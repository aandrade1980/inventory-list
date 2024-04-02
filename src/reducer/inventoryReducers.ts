import { FETCH_ACTIONS } from '../actions';

type Item = {
  id: number;
  picture: string;
  name: string;
  price: number;
  quantity: number;
  type: string;
};

type State = {
  items: Array<Item> | [];
  loading: boolean;
  error: null | string;
};

type FetchActionsKeys = keyof typeof FETCH_ACTIONS;

type Action = {
  type: (typeof FETCH_ACTIONS)[FetchActionsKeys];
  data: Array<Item> | [];
  error: string | null;
};

const initialState: State = {
  items: [],
  loading: false,
  error: null
};

const inventoryReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'progress': {
      return {
        ...state,
        loading: true
      };
    }

    case 'success': {
      return {
        ...state,
        loading: false,
        items: action.data
      };
    }

    case 'error': {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }

    default: {
      return state;
    }
  }
};

export { inventoryReducer, initialState };
