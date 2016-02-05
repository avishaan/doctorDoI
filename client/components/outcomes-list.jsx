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
        <ListItem key={outcome._id}
          primaryText={outcome.doctor.name}
          leftAvatar={<Avatar src={'/imgs/' + outcome.doctor.image }/>}
          secondaryText={'Likelihood of issue: ' + outcome.confidence}
          />
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
