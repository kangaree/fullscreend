import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="home">
        <div className="backdrop"><div className="backdrop-fade"></div></div>
        <h2 className="headline-1">The social network for tv lovers.</h2>
        <p className="headline-2">Start your tv diary now, it's free!</p>
        <div className="horizontal-featured-list"> 

            <Link to="/signup" className="poster-link"><img src="https://image.tmdb.org/t/p/original/wjFU9z8EfOwczRTv0FrPcv9zHME.jpg" alt="Cowboy Bebop" /></Link>
            <Link to="/signup" className="poster-link"><img src="https://image.tmdb.org/t/p/original/dg7NuKDjmS6OzuNy33qt8kSkPA1.jpg" alt="The Wire" /></Link>
            <Link to="/signup" className="poster-link"><img src="https://image.tmdb.org/t/p/original/vNJ95BMCzIBJZhW0IEoxzOoW53P.jpg" alt="Stranger Things" /></Link>
            <Link to="/signup" className="poster-link"><img src="https://image.tmdb.org/t/p/original/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg" alt="One Punch Man" /></Link>
            <Link to="/signup" className="poster-link"><img src="https://image.tmdb.org/t/p/original/tPqV63zcW6ZV0Hd48DMGb5UzQIG.jpg" alt="Freaks and Geeks" /></Link>
            <Link to="/signup" className="poster-link"><img src="https://image.tmdb.org/t/p/original/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg" alt="Seinfeld" /></Link>
    
        </div>
    </div>
)