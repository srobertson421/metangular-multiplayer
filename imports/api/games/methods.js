import { Meteor } from 'meteor/meteor';
import { Games } from './collection';

Meteor.methods({
  newGame: function(newGame) {
    if(!this.userId) {
      throw new Meteor.Error(400, 'Unauthorized');
    }

    newGame.owner = this.userId;
    newGame.createdAt = new Date();
    newGame.updatedAt = new Date();
    newGame.gameOver = false;
    newGame.player1 = Meteor.users.findOne(this.userId);
    newGame.player1.cards = []
    newGame.player2 = null;

    return Games.insert(newGame); 
  }
}); 