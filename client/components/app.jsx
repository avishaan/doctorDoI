const {
  RaisedButton,
  Tabs,
  Tab,
  Slider,
  Styles
} = mui;
const ThemeManager = Styles.ThemeManager;
const styles = {
  tabbar: {
    // the following keeps the tab bar floating on the bottom
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
};

App = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState: function () {
    return {
      selectedPlayerId: null  
    };
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },
  getMeteorData() {
    return {
      players: Players.find({}, { sort: { score: -1, name: 1 } }).fetch(),
      outcomes: Outcomes.find({}).fetch(),
      selectedPlayer: Players.findOne(this.state.selectedPlayerId)
    };
  },
  selectPlayer(playerId) {
    this.setState({
      selectedPlayerId: playerId
    });
  },
  addPointsToPlayer(playerId) {
    Players.update(playerId, {$inc: {score: 5}});
  },
  getBottomBar() {
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
  },
  render() {
    return (
      <div className="outer">
        <div className="logo"></div>
        <h1 className="title">Doc Do I</h1>
        <div className="subtitle">The opinions of our medical professionals</div>
        <OutcomesList players={this.data.players}
          outcomes={this.data.outcomes}
          selectedPlayerId={this.state.selectedPlayerId}
          onPlayerSelected={this.selectPlayer} />
        {this.getBottomBar()}
      </div>
    );
  }
});
