import { Meteor } from "meteor/meteor";

export function userDataLoader(p: any){
	return {
    isLoggingIn: Meteor.loggingIn(),
    user: Meteor.user()
  };
};
