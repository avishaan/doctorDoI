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

var imageSrc = "/imgs/paperCut.jpg"

New = React.createClass({
  getInitialState() {
    return {
      imageSubmit: "/imgs/paperCut.jpg"
    }
  },
  onAttachTap() {
    imageSrc = "/imgs/1.png";
    MeteorCamera.getPicture({
      quality: 50
    }, function(err, data){
      if(!err) {
        // attach back into the dom
        imageSrc = data;
      } else {
        console.log(err);
      }
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
          <img src={imageSrc} className="symptomImage" />
        </Paper>
      </div>
    );
  }
});
