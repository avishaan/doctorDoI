Meteor.methods({
  addRoleToUser(userId, role){
    Roles.addUsersToRoles(userId, role);
    console.log("role: ", role, " added to userId ", userId);
  },
  saveOpinion(caseId, docId, text){
    var prevOpinion = CaseFiles.findOne({ _id: caseId, "opinions.doctor._id": docId});
    if (prevOpinion){
      // update opinion
      CaseFiles.update(
        {
          _id: caseId,
          "opinions.doctor._id": docId
        }, {
          $set: {"opinions.$": {
            doctor: {_id: docId},
            text: text
          } }
        }
      );
    } else {
      // add new opinion
      CaseFiles.update(
        { _id: caseId },
        {
          $inc: {
            numOpinions: 1
          },
          $addToSet: {
            opinions: {
              doctor: {_id: docId},
              text: text
            }
          }}
      );
    }

  }
});
