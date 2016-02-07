FlowRouter.route("/", {
  name: 'New',
  action() {
    ReactLayout.render(App, {
      content: <New />,
      nav: <Nav />
    });
  }
});

FlowRouter.route("/outcomesList", {
  name: 'OutcomesList',
  action() {
    ReactLayout.render(App, {
      content: <OutcomesList />,
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
