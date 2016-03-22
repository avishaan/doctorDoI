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
  },
  render() {
    return (
      <div>
        <TextField
          id="email"
          hintText="type in your email address"
          floatingLabelText="email"
          fullWidth={true}
        />
        <br/>
        <TextField
          id="password"
          hintText="pick a password"
          floatingLabelText="password"
          fullWidth={true}
          type="password"
        />
        <br/>
        <RaisedButton label="Register"
          primary={true}
          style={styles.button}
          onTouchTap={this.onRegisterTap}
        />
      </div>
    );
  }
});
