const {
  List,
  ListItem,
  ListDivider,
  Avatar
} = mui;

CaseFilesList = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      caseFiles: CaseFiles.find({}).fetch()
    };
  },
  selectCaseFile(caseFileId) {
    this.props.onCaseFileSelected(caseFileId);
  },
  renderCaseFiles(){
    return this.data.caseFiles.map((caseFile) => {
      if (caseFile.doctor){
        return (
          <div key={caseFile._id}>
          <ListItem 
            primaryText={caseFile.doctor.name}
            leftAvatar={<Avatar src={ caseFile.doctor.image }/>}
            secondaryText={'Likelihood of issue: ' + caseFile.confidence}
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
