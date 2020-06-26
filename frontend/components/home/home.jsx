import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, openModal }) => (
    <div className="home">
        <video playsInline autoPlay muted loop id="tv-intros">
            <source src="https://s3.amazonaws.com/fullscreend/TV+Intros+Montage.webm" type="video/webm"></source>
            <source src="https://s3.amazonaws.com/fullscreend/TV+Intros+Montage.mp4" type="video/mp4"></source>
        </video>
        <div className="home-backdrop"><div className="backdrop-fade">
            <h2 className="headline-1">The social network for tv lovers.</h2>
            {currentUser ? "" : <p className="headline-2" onClick={() => openModal({ modal_type: 'signup' })}><button className="green-button">Get started- it's free!</button></p>}
        </div></div>
        <div className="horizontal-featured-list"> 

            <Link to="/shows/30991" className="poster-link"><img src="https://image.tmdb.org/t/p/original//xDiXDfZwC6XYC6fxHI1jl3A3Ill.jpg" alt="Cowboy Bebop" /></Link>
            <Link to="/shows/1438" className="poster-link"><img src="https://image.tmdb.org/t/p/original//4lbclFySvugI51fwsyxBTOm4DqK.jpg" alt="The Wire" /></Link>
            <Link to="/shows/66732" className="poster-link"><img src="https://image.tmdb.org/t/p/original/vNJ95BMCzIBJZhW0IEoxzOoW53P.jpg" alt="Stranger Things" /></Link>
            <Link to="/shows/63926" className="poster-link"><img src="https://image.tmdb.org/t/p/original/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg" alt="One Punch Man" /></Link>
            <Link to="/shows/2382" className="poster-link"><img src="https://image.tmdb.org/t/p/original/tPqV63zcW6ZV0Hd48DMGb5UzQIG.jpg" alt="Freaks and Geeks" /></Link>
            <Link to="/shows/1400" className="poster-link"><img src="https://image.tmdb.org/t/p/original/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg" alt="Seinfeld" /></Link>
    
        </div>

        <p className="div-center">Fullscreend lets you...</p>
        <div className="lets-you">
            <div className="lets-you-item">
                <i className="fas fa-eye"></i>
                <p>Keep a diary of your favorite shows. Record and share.</p>
            </div>
            <div className="lets-you-item">
                <i className="fas fa-star"></i>
                <p>Rate each show on a five-star scale. Like a show.</p>
            </div>
            <div className="lets-you-item">
                <i className="fas fa-list-ul"></i>
                <p>Compile and share lists of shows on any topic.</p>
            </div>
        </div>

        <p className="div-center">Love film? Check out...</p>
        <div className="div-center"><a href="//letterboxd.com"><img src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb-1000px.png" alt="Letterboxd" className="letterboxd-horizontal" /></a></div>
    </div>
)