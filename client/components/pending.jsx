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
        return (
          <div key={outcome._id}>
          <ListItem 
            primaryText={outcome.description}
            leftAvatar={<Avatar src={outcome.image}/>}
            secondaryText={'Number of responses: ' + outcome.numResponses}
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
