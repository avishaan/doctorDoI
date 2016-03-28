const {
  RaisedButton,
  Dialog,
  FlatButton,
  FontIcon,
  Avatar
} = mui;

DoctorInfo = React.createClass({
  standardActions: [
    { text: 'Cancel' },
    { text: 'Submit', onTouchTap: this.onDialogSubmit, ref: 'submit' }
  ],
  onDialogSubmit() {
    console.log('dialog submitted');
  },
  handleRequestClose() {
    console.log('handleRequestClose');
  },
  render() {
    console.log('dialog render');
    // this.refs.doctorInfoDialog.setState({'open': this.props.open});
    return (
      <Dialog
        ref="doctorInfoDialog"
        title="Dialog With Standard Actions"
        actions={this.standardActions}
        actionFocus="submit"
        openImmediately={false}
        open={this.props.open}
        onRequestClose={this.handleRequestClose}>
        The actions in this window are created from the json that's passed in.
      </Dialog>
    );
  }
});
