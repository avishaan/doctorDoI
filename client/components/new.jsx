const {
  TextField,
  Divider,
  Paper,
  RaisedButton
} = mui;

const styles = {
  textfield: {
    marginLeft: 20
  },
  button: {
    margin: "0, auto",
    display: "block"
  }
};

New = React.createClass({
  onAttachTap() {
    console.log('attach tap');
  },
  render() {
    return (
      <div>
        <TextField
          hintText="Tell us what ails you"
          floatingLabelText="Description of symptoms"
          multiLine={true}
          fullWidth={true}
          rows={4}
        />
        <RaisedButton label="Submit" primary={true} style={styles.button} />
        <RaisedButton label="Attach Image"
          secondary={true}
          style={styles.button}
          onTouchEnd={this.onAttachTap}
          onMouseUp={this.onAttachTap}
        />
      </div>
    );
  }
});
