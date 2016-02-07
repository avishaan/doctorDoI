const {
  TextField,
  Divider,
  Paper
} = mui;

const styles = {
  textfield: {
    marginLeft: 20
  }
};

New = React.createClass({
  render() {
    return (
      <TextField
        hintText="Tell us what ails you"
        floatingLabelText="Description of symptoms"
        multiLine={true}
        fullWidth={true}
        rows={4}
      />
    );
  }
});
