const {
  List,
  ListItem,
  ListDivider,
  Avatar
} = mui;

OutcomesList = React.createClass({
  propTypes: {
    selectedPlayerId: React.PropTypes.string,
    players: React.PropTypes.array.isRequired,
    onPlayerSelected: React.PropTypes.func
  },
  selectPlayer(playerId) {
    this.props.onPlayerSelected(playerId);
  },
  selectOutcome(outcomeId) {
    this.props.onOutcomeSelected(outcomeId);
  },
  render() {
    return (
      <List>
      {this.props.outcomes.map((outcome) => {
        let style = {};

        if (this.props.selectedOutcomeId === outcome._id) {
          style['backgroundColor'] = '#eee';
        }

        return [
          <ListItem key={outcome._id}
            primaryText={outcome.doctor.name}
            onClick={this.selectOutcome.bind(this, outcome._id)}
            leftAvatar={<Avatar src={'/imgs/' + outcome.doctor.image }/>}
            secondaryText={'Current score: ' + outcome.confidence}
            style={style}/>,
          <ListDivider/>
        ];
      })}
      </List>
    );
  }
});
