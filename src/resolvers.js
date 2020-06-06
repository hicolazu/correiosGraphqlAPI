let users = [
  {id: 1, name: "Henrico", email: "henrico.lazuroz2@gmail.com"},
  {id: 2, name: "Generic Name", email: "generic_email@gmail.com"}
];

module.exports = {
  Query: {
    users: () => users,
    user: (_, { id }) => users[id-1],
  },

  Mutation: {
    createUser: (_, { name, email }) => { 
      const newUser = {id: Math.floor(Math.random() * 65536), name, email};
      users.push(newUser);
      return newUser;
    },
  }
};