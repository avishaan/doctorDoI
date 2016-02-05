FlowRouter.route("/outcomesList", {
  name: 'OutcomesList',
  action() {
    ReactLayout.render(App, {
      nav: <Nav />
    });
  }
});

FlowRouter.route("/leaders", {
  name: 'Leaderboard',
  action() {
    ReactLayout.render(App);
  }
});
