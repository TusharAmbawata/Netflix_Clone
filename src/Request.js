const key = 'd8aa6e04cfe8c81923b1d7016fa56f49';

// https://api.themoviedb.org/3/movie/popular?api_key=d8aa6e04cfe8c81923b1d7016fa56f49&language=en-US&page=1

// https://api.themoviedb.org/3/movie/popular?api_key=d8aa6e04cfe8c81923b1d7016fa56f49

const requests ={
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestHarry: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=harry&page=1`,

}

export default requests;