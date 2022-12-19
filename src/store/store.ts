import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tvShowsSlice from "./tvShows";
import seasonsSlice from "./seasons";
import episodesSlice from "./episodes";
import {TypedUseSelectorHook, useSelector} from "react-redux";



const rootReducer = combineReducers({
    tvShows: tvShowsSlice.reducer,
    seasonsTvShow: seasonsSlice.reducer,
    episodesSeason: episodesSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
