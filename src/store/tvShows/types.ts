export interface ITvShow{
    id: number ;
    name: string;
    summary: string;
    image:{
        medium: string;
        original: string;
    };
}

export interface ITvShowState {
    tvShows: ITvShow[];
    isLoading: boolean;
    error: string;
}