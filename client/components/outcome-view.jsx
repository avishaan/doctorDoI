const {
  TextField,
  Divider,
  Paper,
  RaisedButton,
  CardMedia,
  CardTitle
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
    height: 200,
    margin: "0 auto"
  }
};


OutcomeView = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      outcome: Outcomes.findOne({_id: this.props.oid })
    };
  },
  getInitialState() {
    // this will set init state, used only for UI updates
    return {
      imageSrc: "/imgs/paperCut.jpg"
    };
  },
  onSubmitTap() {

  },
  onDescriptionChange(e) {
    this.setState({description: e.target.value});
  },
  render() {
    return (
      <div>
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src="http://lorempixel.com/600/337/nature/" />
        </CardMedia>
        <RaisedButton label="Submit Opinion"
          primary={true}
          style={styles.button}
          onTouchEnd={this.onSubmitTap}
          onMouseUp={this.onSubmitTap}
        />
        <Paper style={styles.image} zDepth={1} rounded={true} >
          <img src={this.data.outcome.image} className="symptomImage" />
        </Paper>
      </div>
    );
  }
});
