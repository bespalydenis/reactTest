import { RECEIVE_API_DATA, RECEIVE_API_POST  } from "../actions";

const iState = {
}

export default (state = iState, { type, data }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return {
          posts: data
      }
    case RECEIVE_API_POST:
      return {
          post: [data]
      }
    default:
      return state;
  }
};
