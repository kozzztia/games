
export type gameType = {
    id: number,
    slug: string,
    name: string,
    released: string,
    tba: true,
    rating: number,
    background_image: string,
    rating_top: number,
    ratings: { },
    ratings_count: number,
    reviews_text_count: string,
    added: number,
    added_by_status: { },
    metacritic: number,
    playtime: number,
    suggestions_count: number,
    updated: string,
    esrb_rating: {
        id: 0,
        slug: string,
        name: string
    },
    platforms: [
        {
            platform: {
                id: 0,
                slug: string,
                nam: string
            },
            released_at: string,
            requirements: {
                minimum: string,
                recommended: string
            }
        }
    ]
}


 export type GenresType = {
    id : number;
    name : string;
    slug: string;
    games_count : number;
    image_background: string;
}