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
    if (value === "new") {
      FlowRouter.go('New');
    } else {
      FlowRouter.go('CaseFilesList', {}, {});
    }
  },
  render() {
    // only non-doctors should be able to submit a new issue
    if (Roles.userIsInRole(Meteor.userId(),['doctor'])){
      return (
      <Tabs style={styles.tabbar} onChange={this.onTabChange}>
          <Tab
            label="Case Files" value="outcomes" >
          </Tab>
      </Tabs>
      );
    } else {
      return (
      <Tabs style={styles.tabbar} onChange={this.onTabChange}>
          <Tab
            label="New" value="new" >
          </Tab>
          <Tab
            label="Case Files" value="outcomes" >
          </Tab>
      </Tabs>
      );
    }
  }
});
