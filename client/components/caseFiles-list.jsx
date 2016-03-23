const {
  List,
  ListItem,
  ListDivider,
  Avatar
} = mui;

CaseFilesList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    var caseFiles;
    // if doctor, can see all cases
    // can see cases based on user role
    if (Roles.getRolesForUser(Meteor.userId()).indexOf('doctor') !== -1){
      // dr can see all cases
      caseFiles = CaseFiles.find().fetch();
    } else {
      caseFiles = CaseFiles.find({ 'patientId': Meteor.userId() }).fetch();
    }
    return {
      'caseFiles': caseFiles
    };
  },
  selectCaseFile(caseFileId) {
    this.props.onCaseFileSelected(caseFileId);
  },
  onListTap(e){
    //TODO must be a better way to do this
    var caseFileId = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id;
    FlowRouter.go('CaseFileView', {'oid': caseFileId}, {});
  },
  renderCaseFiles(){
    return this.data.caseFiles.map((caseFile) => {
      if (caseFile.image && caseFile.numOpinions < 2){
        return (
          <div key={caseFile._id} id={caseFile._id}>
          <ListItem 
            key={caseFile._id}
            primaryText={caseFile.description.substr(0,35)}
            secondaryText={caseFile.description}
            secondaryTextLines={2}
            onTouchTap={this.onListTap}
            leftAvatar={<Avatar src={ caseFile.image }/>}
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
        {this.renderCaseFiles()}
      </List>
    );
  }
});
