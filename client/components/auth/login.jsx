const {
  RaisedButton,
  TextField,
  Slider,
  Styles
} = mui;

const ThemeManager = Styles.ThemeManager;

const styles = {
  textfield: {
    marginLeft: 20
  },
  button: {
    margin: "0, auto",
    display: "block"
  }
};
Login = React.createClass({
  onLoginTap(e){
    e.preventDefault();
    var email = this.refs.email.getValue();
    var password = this.refs.password.getValue();
    Meteor.loginWithPassword(email, password, FlowRouter.go('New'));
  },
  onRegisterTap(e){
    e.preventDefault();
    FlowRouter.go('Register');
  },
  render() {
    return (
      <div>
        <TextField
          ref="email"
          hintText="type in your email address"
          floatingLabelText="email"
          fullWidth={true}
        />
        <br/>
        <TextField
          ref="password"
          hintText="type in your password"
          floatingLabelText="password"
          fullWidth={true}
          type="password"
        />
        <br/>
        <RaisedButton label="Login"
          primary={true}
          style={styles.button}
          onTouchTap={this.onLoginTap}
        />
        <br/>
        <RaisedButton label="Register"
          primary={false}
          style={styles.button}
          onTouchTap={this.onRegisterTap}
        />
      </div>
    );
  }
});
