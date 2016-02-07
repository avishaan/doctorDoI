FlowRouter.route("/new", {
  name: 'New',
  action() {
    ReactLayout.render(App, {
      content: <h1>New Page</h1>,
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
