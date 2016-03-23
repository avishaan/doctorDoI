const {
  RaisedButton,
  TextField,
  Slider,
  Styles,
  Toggle
} = mui;

const ThemeManager = Styles.ThemeManager;

const styles = {
  textfield: {
    marginLeft: 20
  },
  button: {
    margin: "0, auto",
    display: "block"
  },
  toggle: {
    marginBottom: 16,
    marginTop: 16
  }
};
Register = React.createClass({
  onRegisterTap(e){
    e.preventDefault();
    var email = this.refs.email.getValue();
    var password = this.refs.password.getValue();
    var isDoctor = this.refs.isDoctor.state.switched;
    var userId = Accounts.createUser({
      'email': email,
      'password': password
    }, function(err){
      if (err) {
        console.log(err);
      } else if (isDoctor) {
        // assign role to user
        Meteor.call('addRoleToUser', Meteor.userId(), 'doctor');
      }
      FlowRouter.go('New');
    });
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
        <Toggle
          ref="isDoctor"
          label="Register as Doctor"
          style={styles.toggle}
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
