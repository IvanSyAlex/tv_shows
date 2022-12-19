import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from "./pages/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TvShowPage from "./pages/TvShowPage";
import {Provider} from "react-redux";
import {store} from "./store/store";
import SeasonPage from "./pages/SeasonPage";
import PlayPage from "./pages/PlayPage";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/tv-show-page/:id" element={<TvShowPage />}/>
                <Route path="/season-page/:id/:name" element={<SeasonPage />}/>
                <Route path="/play-page/:id" element={<PlayPage />}/>
            </Routes>
        </BrowserRouter>
    </Provider>
);


