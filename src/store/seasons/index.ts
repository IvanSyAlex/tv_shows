import {ISeason, ISeasonsState} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: ISeasonsState ={
     seasons: [],
    isLoading: false,
    error: "",
};

const seasonsSlice = createSlice({
    name: "Seasons",
    initialState: initialState,
    reducers: {
        requestSeasons: (state ): void => {
            state.isLoading = true
        },
        requestSeasonsSuccess: (state, {payload}: PayloadAction<any>): void => {
            state.seasons = (payload || []).reduce((acc: ISeason[], season: ISeason) => {
                let {id, number, episodeOrder, summary, image} = season;
                summary = summary?.replace(/<\/?[a-zA-Z]+>/gi, ''); // убирает теги <p></p> из описания
                acc.push({id, number, episodeOrder, summary, image});
                return acc;
            }, []);
            state.isLoading = false;
        },
        requestSeasonsError: (state, {payload}: PayloadAction<any>): void => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});


export default seasonsSlice;