
export type gameType = {
    id: number,
    slug: string,
    name: string,
    released: string,
    tba: true,
    rating: number,
    background_image: string,
    rating_top: number,
    ratings: Record<string, number>,
    ratings_count: number,
    reviews_text_count: string,
    added: number,
    added_by_status: Record<string, number>,
    metacritic: number,
    playtime: number,
    suggestions_count: number,
    updated: string,
    esrb_rating: {
        id: number,
        slug: string,
        name: string
    },
    platforms: [
        {
            platform: {
                id: number,
                slug: string,
                name: string
            },
            released_at: string,
            requirements: {
                minimum: string,
                recommended: string
            }
        }
    ]
}
