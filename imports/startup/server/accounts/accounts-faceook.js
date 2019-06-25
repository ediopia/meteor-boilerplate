ServiceConfiguration.configurations.remove({
  service: "facebook"
});

ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: Meteor.settings.public.oAuth.facebook.client_id,
  secret: Meteor.settings.private.oAuth.facebook.client_secret
});
