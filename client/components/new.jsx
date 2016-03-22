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
  getInitialState() {
    // this will set init state, used only for UI updates
    return {
      imageSrc: "/imgs/paperCut.jpg"
    };
  },
  onSubmitTap() {
    // submit button tapped, put into new outcomes/diagnosis
    Outcomes.insert({
      image: this.state.imageSrc,
      description: this.state.description,
      numResponses: 0
    });
  },
  onDescriptionChange(e) {
    this.setState({description: e.target.value});
  },
  onAttachTap() {
    var that = this;
    MeteorCamera.getPicture({
      quality: 50
    }, function(err, data){
      if(!err) {
        // attach back into the dom
        that.setState({'imageSrc': data});
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
          value={this.state.description}
          onChange={this.onDescriptionChange}
          rows={4}
        />
        <RaisedButton label="Submit"
          primary={true}
          style={styles.button}
          onTouchEnd={this.onSubmitTap}
          onMouseUp={this.onSubmitTap}
        />
        <RaisedButton label="Attach Image"
          secondary={true}
          style={styles.button}
          onTouchEnd={this.onAttachTap}
          onMouseUp={this.onAttachTap}
        />
        <Paper style={styles.image} zDepth={1} rounded={true} >
          <img src={this.state.imageSrc} className="symptomImage" />
        </Paper>
      </div>
    );
  }
});
