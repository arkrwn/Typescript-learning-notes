var Permissions;
(function (Permissions) {
    Permissions[Permissions["Read"] = 1] = "Read";
    Permissions[Permissions["Write"] = 2] = "Write";
    Permissions[Permissions["Execute"] = 4] = "Execute"; // Binary: 0100
})(Permissions || (Permissions = {}));
var user = {
    name: "Bob",
    role: "Editor",
    permissions: Permissions.Read | Permissions.Write // Combines read and write
};
function canPerformAction(user, action) {
    return (user.permissions & action) === action;
}
// Usage
if (canPerformAction(user, Permissions.Execute)) {
    console.log("User can execute");
}
else {
    console.log("User cannot execute");
}
