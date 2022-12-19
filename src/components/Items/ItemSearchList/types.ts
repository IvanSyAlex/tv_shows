export interface IItemSearchList{
    seriesId: number;
    name: string;
    image: string;
    handlerOfStateParameters: (name: string, id: number) => void;
}