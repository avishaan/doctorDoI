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
      selectedPlayerId: null,
      loggedIn: !!Meteor.user()
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
  showLayout() {
    return (
      <div>
        {this.props.content}
        {this.props.nav}
      </div>
    );
  },
  showLogin() {
    return (
      <div>
        {this.props.content}
        {this.props.nav}
      </div>
    );
  },
  render() {
    return (
      <div className="outer">
        <div className="logo"></div>
        <h1 className="title">Doc Do I</h1>
        <div className="subtitle">The opinions of our medical professionals</div>
        {this.showLayout()}
      </div>
    );
  }
});
