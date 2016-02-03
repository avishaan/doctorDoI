FlowRouter.route("/outcomesList", {
  name: 'OutcomesList',
  action() {
    ReactLayout.render(App);
  }
});

FlowRouter.route("/leaders", {
  name: 'Leaderboard',
  action() {
    ReactLayout.render(App);
  }
});
