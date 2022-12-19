import {IEpisode, IEpisodesState} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: IEpisodesState = {
    episodes: [],
    isLoading: false,
    error: "",
};

const episodesSlice = createSlice({
    name: "Episodes",
    initialState: initialState,
    reducers: {
        requestEpisodes: (state): void => {
            state.isLoading = true;
        },
        requestEpisodesSuccess: (state, {payload}: PayloadAction<any>): void => {
            state.episodes = (payload || []).reduce((acc: IEpisode[], episode: IEpisode) => {
                let {id,name,number,rating,summary,image} = episode
                summary = summary?.replace(/<\/?[a-zA-Z]+>/gi, ''); // убирает теги <p></p> из описания
                acc.push({id,name,number,rating,summary,image});
                return acc;
            },[]);
            state.isLoading = false;
        },
        requestEpisodesError: (state, {payload}: PayloadAction<any>): void => {
            state.isLoading = false;
            state.error = payload;
        },
    },

});


export default episodesSlice;