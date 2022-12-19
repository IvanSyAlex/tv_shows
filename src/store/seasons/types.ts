export interface ISeason{
    id: number ;
    number: number;
    episodeOrder: number;
    summary: string;
    image:{
        medium: string;
        original: string;
    };
}

export interface ISeasonsState {
    seasons: ISeason[];
    isLoading: boolean;
    error: string;
}