import {AppDispatch} from "../../store";
import tvShowsSlice from "../index";


export const loadTvShow = (idTvShow: string) => (dispatch: AppDispatch) => {
    dispatch(tvShowsSlice.actions.fetchingTvShows);
    fetch(`https://api.tvmaze.com/shows/${idTvShow}`)
        .then((response) => response.json())
        .then((data) => dispatch(tvShowsSlice.actions.fetchingTvShowsSuccess(data)))
        .catch(error => dispatch(tvShowsSlice.actions.fetchingTvShowsError(error)));
};
