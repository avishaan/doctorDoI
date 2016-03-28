const {
  RaisedButton,
  Dialog,
  FlatButton,
  FloatingActionButton,
  FontIcon
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
        title={this.props.titleText}
        actions={this.standardActions}
        actionFocus="submit"
        openImmediately={false}
        open={this.props.open}
        onRequestClose={this.handleRequestClose}
      >
        <div id='communicatePanel'>
          <FloatingActionButton iconClassName="fa fa-phone" secondary={true} />
          <FloatingActionButton iconClassName="fa fa-video-camera" secondary={true} />
          <FloatingActionButton iconClassName="fa fa-mobile" secondary={true} />
        </div>
        <br/>
          {this.props.bodyText}

      </Dialog>
    );
  }
});
