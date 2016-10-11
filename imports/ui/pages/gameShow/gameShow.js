import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Games } from '../../../api/games';

import template from './gameShow.html';

class GameShow {
  constructor($reactive, $scope, $stateParams) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('games.all');

    this.helpers({
      game() {
        return Games.findOne({_id: $stateParams.id});
      }
    });
  }
}

const name = 'gameShow';

export default angular.module(name, [angularMeteor, uiRouter])
.component(name, {
  template,
  controllerAs: name,
  controller: GameShow
})
.config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider
  .state('gameShow', {
    url: '/game/:id',
    template: '<game-show></game-show>'
  });
}