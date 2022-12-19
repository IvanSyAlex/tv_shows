import {RootState} from "../store";


export const selectTvShows = (state: RootState) => state.tvShows;
export const selectTvShowOnId = (state: RootState, id: number) =>
    selectTvShows(state).tvShows.find((show) => show.id === id);
