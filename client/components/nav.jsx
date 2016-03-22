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
  onTabChange(value, e, tab) {
    if (value == "new") {
      FlowRouter.go('New');
    } else {
      FlowRouter.go('CaseFilesList', {}, {});
    }
  },
  render() {
    return (
      <Tabs style={styles.tabbar} onChange={this.onTabChange}>
        <Tab
          label="New" route="/new" value="new" >
        </Tab>
        <Tab
          label="Case Files" route="/outcomes" value="outcomes" >
        </Tab>
      </Tabs>
    );
  }
});
