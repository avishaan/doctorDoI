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


CaseFileView = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      caseFile: CaseFiles.findOne({_id: this.props.oid })
    };
  },
  getInitialState() {
    // this will set init state, used only for UI updates
    return {
      imageSrc: "/imgs/paperCut.jpg"
    };
  },
  onSubmitTap() {
    console.log('save opinion');
    // save opinion to database
    CaseFiles.update(
      { _id: this.props.oid },
      {
        $inc: {
          numOpinions: 1
        },
        $addToSet: {
        opinions: {
          doctor: {_id: 1},
          text: this.state.opinion
        }
      }}
    );
    // attach doctor to opinion
    // route back to list of opinion
    FlowRouter.go('CaseFilesList');
  },
  onOpinionChange(e) {
    this.setState({opinion: e.target.value});
  },
  renderOpinions(){
    if (Roles.userIsInRole(Meteor.userId(), 'doctor')) {
      return (
        <h1> Doctor </h1>
      );
    } else {
      return (
        <h1> User </h1>
      );
    }
  },
  render() {
    return (
      <div>
        <CardMedia
          overlay={<CardTitle title="" subtitle={this.data.caseFile.description}/>}
        >
          <img src={this.data.caseFile.image}/>
        </CardMedia>
        <TextField
          hintText="Enter your opinion of the diagnosis for what may have occured"
          floatingLabelText="Diagnostic Opinion"
          multiLine={true}
          onChange={this.onOpinionChange}
          fullWidth={true}
          rows={3}
        />
        <RaisedButton label="Submit Opinion"
          primary={true}
          style={styles.button}
          onTouchEnd={this.onSubmitTap}
          onMouseUp={this.onSubmitTap}
        />
        {this.renderOpinions()}
      </div>
    );
  }
});
