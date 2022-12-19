import React, {FC} from "react";
import ItemSearchList from "../../Items/ItemSearchList/ItemSearchList";
import {ISearchListContainer} from "./types";
import styles from "./styles.module.css";


const SearchListContainer: FC<ISearchListContainer> = ({tvSeries,handlerOfStateParameters}) => {

    return (
        <div className={styles.search_list_container}>
            {
                tvSeries.map((series) =>
                    <ItemSearchList
                        key={series.seriesId}
                        seriesId={series.seriesId}
                        name={series.name}
                        image={series.image?.medium}
                        handlerOfStateParameters={handlerOfStateParameters}
                    />
                )
            }
        </div>
    );
}


export default SearchListContainer;

