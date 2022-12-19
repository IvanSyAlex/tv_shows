import {RootState} from "../store";


export const selectSeasons = (state: RootState) => state.seasonsTvShow.seasons;

export const selectSeasonById = (state: RootState, id: string) => {
    return selectSeasons(state).filter((season) => season.id.toString() === id)[0];
}