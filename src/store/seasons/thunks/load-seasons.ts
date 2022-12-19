import {AppDispatch} from "../../store";
import seasonsSlice from "../index";


export const loadSeasons = (idTvShow: string) => (dispatch: AppDispatch) => {
    dispatch(seasonsSlice.actions.requestSeasons());
    fetch(`https://api.tvmaze.com/shows/${idTvShow}/seasons`)
        .then((response) => response.json())
        .then((data) => dispatch(seasonsSlice.actions.requestSeasonsSuccess(data)))
        .catch((error) => dispatch(seasonsSlice.actions.requestSeasonsError(error)));
}