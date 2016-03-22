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
      if (caseFile.image){
        return (
          <div key={caseFile._id}>
          <ListItem 
            primaryText={caseFile.description.substr(0,35)}
            secondaryText={caseFile.description}
            secondaryTextLines={2}
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
