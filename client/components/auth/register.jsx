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
Register = React.createClass({
  onRegisterTap(e){
    e.preventDefault();
    var email = this.refs.email.getValue();
    var password = this.refs.password.getValue();
    Accounts.createUser({
      'email': email,
      'password': password
    });
    FlowRouter.go('New');
  },
  onLoginTap(e){
    e.preventDefault();
    FlowRouter.go('Login');
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
          hintText="pick a password"
          floatingLabelText="password"
          fullWidth={true}
          type="password"
        />
        <br/>
        <br/>
        <RaisedButton label="Register"
          primary={true}
          style={styles.button}
          onTouchTap={this.onRegisterTap}
        />
        <br/>
        <RaisedButton label="Login"
          primary={false}
          style={styles.button}
          onTouchTap={this.onLoginTap}
        />
      </div>
    );
  }
});
