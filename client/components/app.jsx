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
  getMeteorData() {
    return {
      outcomes: Outcomes.find({}).fetch(),
      loggedIn: !!Meteor.user()
    };
  },
  getInitialState: function () {
    return {
      selectedPlayerId: null
    };
  },
  allowedLayout() {
    // allows us to choose which routes bypass authentication such as the login/registrations form
    var allowedLayouts = ['Login', 'Register'];
    var layoutAllowed = false;
    if (allowedLayouts.indexOf(this.props.content.props.name) > -1 || this.data.loggedIn){
      layoutAllowed = true;
    }
    return layoutAllowed;
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Styles.LightRawTheme)
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
        <Login />
      </div>
    );
  },
  render() {
    return (
      <div className="outer">
        <div className="logo"></div>
        <h1 className="title">Doc Do I</h1>
        <div className="subtitle">The opinions of our medical professionals</div>
        {this.allowedLayout() ? this.showLayout() : this.showLogin()}
      </div>
    );
  }
});
