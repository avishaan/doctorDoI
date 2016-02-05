const { Tabs, Tab } = mui;
const styles = {
  tabbar: {
    // the following keeps the tab bar floating on the bottom
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
};

Nav = React.createClass({
  render() {
    return (
      <Tabs style={styles.tabbar}>
        <Tab
          label="New"
          route="/new"
        >
        </Tab>
        <Tab
          label="Outcomes"
          route="/outcomes"
        >
        </Tab>
      </Tabs>
    );
  }
});
