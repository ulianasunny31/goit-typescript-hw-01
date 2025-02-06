enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record

type RoleDescriptions = Record<UserRole, string>;

const roleDescr: RoleDescriptions = {
  admin: 'Admin User',
  editor: 'Editor User',
  guest: 'Guest User',
};

console.log(roleDescr);
