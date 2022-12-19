export interface IEpisode{
    id: number ;
    name: string;
    number: number;
    rating:{
        average: number;
    };
    summary: string;
    image:{
        medium: string;
        original: string;
    };
}

export interface IEpisodesState {
    episodes: IEpisode[];
    isLoading: boolean;
    error: string;
}