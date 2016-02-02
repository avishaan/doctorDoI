FlowRouter.route("/outcomes", {
  name: 'Outcomes',
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
