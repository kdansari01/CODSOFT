import { CREATE_JOB, FETCH_ALL_JOBS, FETCH_BY_ID } from "../types/types.js";

const initialState = {
  jobs: [],
  job: {},
  loading: false,
  error: null,
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };
    case FETCH_ALL_JOBS:
      return { ...state, jobs: action.payload };
    case FETCH_BY_ID:
      return { ...state, job: action.payload };
    // case DELETE_BY_ID:
    //   return {
    //     ...state,
    //     blogs: state.blog.filter((blog) => blog.id !== action.payload.id),
    //   };
    default:
      return state;
  }
};
