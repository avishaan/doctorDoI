const {
  List,
  ListItem,
  ListDivider,
  Avatar
} = mui;

OutcomesList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      outcomes: Outcomes.find({}).fetch()
    };
  },
  selectOutcome(outcomeId) {
    this.props.onOutcomeSelected(outcomeId);
  },
  renderOutcomes(){
    return this.data.outcomes.map((outcome) => {
      return (
        <div key={outcome._id}>
        <ListItem 
          primaryText={outcome.doctor.name}
          leftAvatar={<Avatar src={'/imgs/' + outcome.doctor.image }/>}
          secondaryText={'Likelihood of issue: ' + outcome.confidence}
          />
          <ListDivider />
        </div>
      );
    });
  },
  render() {
    return (
      <List>
        {this.renderOutcomes()}
      </List>
    );
  }
});
