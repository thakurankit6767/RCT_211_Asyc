import * as types from "./actionTypes";

const initState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    //here is where the getting todo data logic applied
    case types.GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.GET_SUCCESS: {
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    }
    case types.GET_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    //here is where the add todo data logic applied
    case types.ADD_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.ADD_SUCCESS: {
      const newTodo = [...state.todos, payload];
      return {
        ...state,
        todos: newTodo,
        isLoading: false,
        isError: false,
      };
    }
    case types.ADD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    //here is where the toggling todo data logic applied
    case types.TOGGLE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.TOGGLE_SUCCESS: {
      let newToggleTodo = state.todos.map((todo) => {
        return todo.id == payload.id ? payload : todo;
      });
      return {
        ...state,
        todos: newToggleTodo,
        isLoading: false,
        isError: false,
      };
    }
    case types.TOGGLE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    //here is where the removing todo data logic applied
    case types.REMOVE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.REMOVE_SUCCESS: {
      const remainingTodos = state.todos.filter(
        (todo) => todo.id === payload.id
      );
      return {
        ...state,
        todos: remainingTodos,
        isLoading: false,
        isError: false,
      };
    }
    case types.REMOVE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    //here is where the UPDATING todo data logic applied
    case types.UPDATE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case types.UPDATE_SUCCESS: {
      let newUpdatedTodo = state.todos.map((todo) => {
        return todo.id == payload.id ? payload : todo;
      });
      return {
        ...state,
        todos: newUpdatedTodo,
        isLoading: false,
        isError: false,
      };
    }
    case types.UPDATE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};