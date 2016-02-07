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
  },
  image: {
    display: "block",
    width: 300,
    height: 300,
    margin: "0 auto"
  }
};

New = React.createClass({
  onAttachTap() {
    debugger;
    MeteorCamera.getPicture({
      quality: 50
    }, function(err, data){
      debugger;
    });
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
        <Paper style={styles.image} zDepth={1} rounded={true} >
          <img src="/imgs/paperCut.jpg" className="symptomImage" />
        </Paper>
      </div>
    );
  }
});
