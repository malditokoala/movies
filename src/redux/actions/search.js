import { SERACH_MOVIE_START } from "../../consts/actionTypes";

export const serchMovie = (payload) => ({
  type: SERACH_MOVIE_START,
  payload,
});
