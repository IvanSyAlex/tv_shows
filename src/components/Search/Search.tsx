import React, {useEffect, useRef, useState} from "react";
import SearchListContainer from "../LIsts/SearchList/SearchList";
import {ISeries} from "./types";
import {Link} from "react-router-dom";
import styles from "./styles.module.css"


const Search = () => {
    const url = "https://api.tvmaze.com/search/shows?q="
    const inputRef = useRef<HTMLInputElement>(null);
    const [tvSeries, setTvSeries] = useState<ISeries[]>([]);
    const [valueSearch, setValueSearch] = useState<string>("");
    const [idTvShow, setIdTvShow] = useState<number>(0);
    const [error, setError] = useState<any>({});
    const [httpRequest, setHttpRequest] = useState<string>(url);

    const creatArraySeriesOnRequest = (series: any): ISeries[] => {
        return series.map((row: any): ISeries => {
            return {
                seriesId: row.show.id,
                name: row.show.name,
                image: row.show.image,
            }
        })
    };

    const getValueOnChangeFromInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event?.currentTarget?.value) {
            setValueSearch(event?.currentTarget?.value);
        } else {
            setValueSearch("")
        }
        setHttpRequest(url + valueSearch);
    };

    const requestListTvShow = (httpRequest: string) => {
        fetch(httpRequest).then((response) => response.json())
            .then((data) => setTvSeries(creatArraySeriesOnRequest(data.slice(0, 10))))
            .catch(error => setError(error));
    }

    const handlerOfStateParameters   = (name: string, id: number): void => {
        setIdTvShow(id);
        setValueSearch(name);
    }


    useEffect(() => {
        requestListTvShow(httpRequest);
    }, [httpRequest]);

    return (
        <div className={styles.search}>
            <div>
                <input
                    type="text"
                    ref={inputRef}
                    value={valueSearch}
                    onChange={getValueOnChangeFromInput}
                    className={styles.search__input}
                />

                <Link
                    to={`/tv-show-page/${idTvShow}`}
                    className={styles.search__button}
                >Search</Link>
            </div>
            <SearchListContainer tvSeries={tvSeries} handlerOfStateParameters={handlerOfStateParameters}/>
        </div>
    );
}


export default Search;