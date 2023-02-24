export const getUsers = state => state.user;

export const getUsersFilter = state => state.filter;

export const getVisibleUsers = state => {
  const filter = state.filter.toLowerCase();
  return state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};
