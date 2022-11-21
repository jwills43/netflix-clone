const key = 'd152cb72324186361b4791c001a56785'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}<<api_key>>&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}<<api_key>>&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}<<api_key>>`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}<<api_key>>&language=en-US&page=1`
}


export default requests