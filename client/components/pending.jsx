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
  onOutcomeTap(e) {
    FlowRouter.go('OutcomeView', {oid: 1});
  },
  renderOutcomes(){
    var self = this;
    return this.data.outcomes.map((outcome) => {
        return (
          <div key={outcome._id}>
          <ListItem 
            primaryText={outcome.description}
            onTouchTap={this.onOutcomeTap}
            secondaryText={'Number of responses: ' + outcome.numResponses}
            leftAvatar={<Avatar src={outcome.image}/>}
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
