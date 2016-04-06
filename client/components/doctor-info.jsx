const {
  RaisedButton,
  Dialog,
  FlatButton,
  FloatingActionButton,
  FontIcon
} = mui;

const styles = {
  panel: {
    display: "flex"
  },
  button: {
    margin: "auto"
  }
};

DoctorInfo = React.createClass({
  standardActions: [
    { text: 'Cancel' },
    { text: 'Ok', onTouchTap: this.onDialogSubmit, ref: 'submit' }
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
        <div style={styles.panel}>
          <FloatingActionButton iconClassName="fa fa-file" style={styles.button}/>
          <FloatingActionButton iconClassName="fa fa-video-camera" style={styles.button}/>
          <FloatingActionButton iconClassName="fa fa-mobile" style={styles.button}/>
        </div>
        <br/>
          {this.props.bodyText}

      </Dialog>
    );
  }
});
