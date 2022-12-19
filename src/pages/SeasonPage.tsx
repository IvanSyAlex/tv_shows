import Layout from "../components/Layout/Layout";
import {useParams} from "react-router-dom";
import InfoTvShow from "../components/InfoTvShow/InfoTvShow";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store";
import {selectSeasonById} from "../store/seasons/selectors";
import {useEffect, useState} from "react";
import {ISeason} from "../store/seasons/types";
import ListEpisodes from "../components/LIsts/ListEpisodes/ListEpisodes";
import {loadEpisodes} from "../store/episodes/thunks/load-episodes";

const defaultTvShow: ISeason = {id: 0,number: 0,episodeOrder: 0, summary: "", image: {medium: "", original: ""}};

const SeasonsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {id, name} = useParams();
    const [seasonTvShow, setSeasonTvShow] = useState<ISeason>(defaultTvShow)
    const season = useSelector((state: RootState) => selectSeasonById(state, id));

    useEffect(() => {
        dispatch(loadEpisodes(season?.id.toString()));
    }, []);

    if (season && season !== seasonTvShow) setSeasonTvShow(season);

    return(
        <Layout>
            <InfoTvShow
                id={season?.id}
                name={name}
                summary={season?.summary}
                image={season?.image}
            />
            <ListEpisodes idSeason={id}/>
        </Layout>
    );
}

export default SeasonsPage;