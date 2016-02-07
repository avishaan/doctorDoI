const {
  TextField
} = mui;

New = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      outcomes: Outcomes.find({}).fetch()
    };
  },
  render() {
    return (
      <div>
        <TextField
          hintText="Hint Text"
        />
      </div>
    );
  }
});
