Meteor.methods({
  addRoleToUser(userId, role){
    Roles.addUsersToRoles(userId, role);
    console.log("role: ", role, " added to userId ", userId);
  }
});
