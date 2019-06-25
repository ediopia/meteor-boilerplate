import { Meteor } from "meteor/meteor";

Meteor.methods({
  getUserData() {
    return Meteor.user();
  }
});
