import {ITvShow, ITvShowState} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: ITvShowState = {
    tvShows: [],
    isLoading: false,
    error: "",
}

const tvShowsSlice = createSlice({
    name: "tv-shows",
    initialState: initialState,
    reducers: {
        fetchingTvShows: (state): void => {
            state.isLoading = true;
        },

        fetchingTvShowsSuccess: (state, {payload}: PayloadAction<any>): void => {
            if (typeof payload === "object") {
                payload.summary = payload.summary?.replace(/<\/?[a-zA-Z]+>/gi, ''); // убирает теги <p></p> из описания
                const {id, name, summary, image} = payload;
                const newTvShow: ITvShow = {id, name, summary, image};
                if (state.tvShows.length === 0)
                    state.tvShows.push(newTvShow);
                if (!(state.tvShows.map((tvShow) => tvShow.id)).includes(newTvShow.id))
                    state.tvShows.push(newTvShow);
                state.error = "";
                return;
            }
            state.tvShows = [];
            state.error = "";
        },

        fetchingTvShowsError: (state, action: PayloadAction<string>): void => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});


export default tvShowsSlice;