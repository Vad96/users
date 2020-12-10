const initialState = { users: ['ld'], pickedUsers: ['ldsk'] };

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
    case "ADD_USER":
      return action.payload;
    default:
      return state;
  }
}
