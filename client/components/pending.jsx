const {
  List,
  ListItem,
  ListDivider,
  Avatar
} = mui;

Pending = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      outcomes: Outcomes.find({'numResponses': 0}).fetch()
    };
  },
  selectOutcome(outcomeId) {
    this.props.onOutcomeSelected(outcomeId);
  },
  renderOutcomes(){
    return this.data.outcomes.map((outcome) => {
      if (outcome.doctor){
        return (
          <div key={outcome._id}>
          <ListItem 
            primaryText={outcome.doctor.name}
            leftAvatar={<Avatar src={outcome.img}/>}
            secondaryText={'Likelihood of issue: ' + outcome.confidence}
            />
            <ListDivider />
          </div>
        );
      } else {
        return;
      }
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
