import {AppDispatch} from "../../store";
import episodesSlice from "../index";

export const loadEpisodes = (idSeasonTvShow: string) => (dispatch: AppDispatch) => {
    dispatch(episodesSlice.actions.requestEpisodes());
    fetch(`https://api.tvmaze.com/seasons/${idSeasonTvShow}/episodes`)
        .then((response) => response.json())
        .then((data) => dispatch(episodesSlice.actions.requestEpisodesSuccess(data)))
        .catch((error) => dispatch(episodesSlice.actions.requestEpisodesError(error)));
}