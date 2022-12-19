import Layout from "../components/Layout/Layout";
import {useParams} from "react-router-dom";
import {loadTvShow} from "../store/tvShows/thunks/load-shows";
import {useDispatch, useSelector} from "react-redux";
import {selectTvShowOnId} from "../store/tvShows/selectors";
import {AppDispatch, RootState} from "../store/store";
import InfoTvShow from "../components/InfoTvShow/InfoTvShow";
import {useEffect, useState} from "react";
import {ITvShow} from "../store/tvShows/types";
import ListSeasons from "../components/LIsts/ListSeasons/ListSeasons";


const tvShow: ITvShow = {id: 0, name: "", summary: "", image: {medium: "", original: ""}};

const TvShowPage = () => {
    const {id} = useParams();
    const [show, setShow] = useState<ITvShow>(tvShow);
    const dispatch = useDispatch<AppDispatch>();
    const showById = useSelector((state: RootState) => selectTvShowOnId(state, Number(id)));

    useEffect(() => {
        dispatch(loadTvShow(id));
    }, [id]);

    if (showById && showById !== show) setShow(showById);

    return (
        <Layout>
            <InfoTvShow
                id={show.id}
                name={show.name}
                summary={show.summary}
                image={show.image}
            />
            <ListSeasons id={id} name={show.name}/>
        </Layout>
    );
}


export default TvShowPage;