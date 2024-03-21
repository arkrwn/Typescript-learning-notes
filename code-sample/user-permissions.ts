
enum Permissions {
    Read = 1, // Binary: 0001
    Write = 2, // Binary: 0010
    Execute = 4 // Binary: 0100
}

interface User {
    name: string;
    role: string;
    permissions: number; // Bitmask representing combined permissions
}

const user: User = {
    name: "Bob",
    role: "Editor",
    permissions: Permissions.Read | Permissions.Write // Combines read and write
};

function canPerformAction(user: User, action: Permissions): boolean {
  return (user.permissions & action) === action; 
}

// Usage
if (canPerformAction(user, Permissions.Execute)) {
  console.log("User can execute");
} else {
  console.log("User cannot execute");
}
