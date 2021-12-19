export const allReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((all) => all.id !== action.payload); //filter regresa un nuevo arreglo
    case "toggle":
      return state.map((all) =>
        all.id === action.payload ? { ...all, done: !all.done } : all
      );
    default:
      return state;
  }
};
