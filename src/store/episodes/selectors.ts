import {RootState} from "../store";


export const selectEpisodes = (state: RootState) => state.episodesSeason.episodes;

export const selectEpisodeById = (state: RootState, id: string) => {
    return selectEpisodes(state).filter((episode) => episode.id.toString() === id)[0];
};