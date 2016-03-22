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
    // save opinion to database
    // increment number of attached opinions[]
    // attach doctor to opinion
    // route back to list of opinion
  },
  onDescriptionChange(e) {
    this.setState({description: e.target.value});
  },
  render() {
    return (
      <div>
        <CardMedia
          overlay={<CardTitle title="" subtitle={this.data.outcome.description}/>}
        >
          <img src={this.data.outcome.image}/>
        </CardMedia>
        <TextField
          hintText="Enter your opinion of the diagnostic outcome of what has occured"
          floatingLabelText="Diagnostic Opinion"
          multiLine={true}
          fullWidth={true}
          rows={3}
        />
        <RaisedButton label="Submit Opinion"
          primary={true}
          style={styles.button}
          onTouchEnd={this.onSubmitTap}
          onMouseUp={this.onSubmitTap}
        />
      </div>
    );
  }
});
