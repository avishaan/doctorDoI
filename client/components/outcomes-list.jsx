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
  render() {
    return (
      <List>
          <ListItem key={this.data.outcomes[0]._id}
            primaryText={this.data.outcomes[0].doctor.name}
            leftAvatar={<Avatar src={'/imgs/' + this.data.outcomes[0].doctor.image }/>}
            secondaryText={'Likelihood of issue: ' + this.data.outcomes[0].confidence}
            />,
          <ListDivider/>
      </List>
    );
  }
});
