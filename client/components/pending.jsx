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
    // TODO this seems like a bad way to do this, we are going way up into the parent of the parent
    var oid = e.target.parentNode.parentNode.parentNode.getAttribute('value');
    FlowRouter.go('OutcomeView', {'oid': oid});
  },
  renderOutcomes(){
    var self = this;
    return this.data.outcomes.map((outcome) => {
        return (
          <div key={outcome._id}>
          <ListItem 
            primaryText={outcome.description}
            onTouchTap={this.onOutcomeTap}
            value={outcome._id}
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
