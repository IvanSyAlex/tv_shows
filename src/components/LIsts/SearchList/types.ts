import {ISeries} from "../../Search/types";


export interface ISearchListContainer {
    tvSeries: ISeries[];
    handlerOfStateParameters: (name: string, id: number) => void;
}