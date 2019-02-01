import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    // <div className="home">
    //     <div className="backdrop"><div className="backdrop-fade">
    //         <h2 className="headline-1">DA PLACE FOR GOOD STUFF!.</h2>
    //         <p className="headline-2">Start your tv diary now, it's free!</p>
    //     </div></div>
    //     <div className="horizontal-featured-list"> 

            // <Link to="/shows/30991" className="poster-link"><img src="https://image.tmdb.org/t/p/original/wjFU9z8EfOwczRTv0FrPcv9zHME.jpg" alt="Cowboy Bebop" /></Link>
    //         <Link to="/shows/1438" className="poster-link"><img src="https://image.tmdb.org/t/p/original/dg7NuKDjmS6OzuNy33qt8kSkPA1.jpg" alt="The Wire" /></Link>
    //         <Link to="/shows/66732" className="poster-link"><img src="https://image.tmdb.org/t/p/original/vNJ95BMCzIBJZhW0IEoxzOoW53P.jpg" alt="Stranger Things" /></Link>
    //         <Link to="/shows/63926" className="poster-link"><img src="https://image.tmdb.org/t/p/original/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg" alt="One Punch Man" /></Link>
    //         <Link to="/shows/2382" className="poster-link"><img src="https://image.tmdb.org/t/p/original/tPqV63zcW6ZV0Hd48DMGb5UzQIG.jpg" alt="Freaks and Geeks" /></Link>
    //         <Link to="/shows/1400" className="poster-link"><img src="https://image.tmdb.org/t/p/original/aCw8ONfyz3AhngVQa1E2Ss4KSUQ.jpg" alt="Seinfeld" /></Link>
    
    //     </div>

    //     <div className="div-center"><a href="//letterboxd.com"><img src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb-1000px.png" alt="Letterboxd" /></a></div>
    // </div>
    <>
        <div className="blank-header"></div>
        <div className="show-index">
            <ul className="shows-ul-top">
                <li className="show-li-top"><Link to="/shows/30991" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/wjFU9z8EfOwczRTv0FrPcv9zHME.jpg" alt="Cowboy Bebop" /></Link></li>
                <li className="show-li-top"><Link to="/shows/1396" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w500//1yeVJox3rjo2jBKrrihIMj7uoS9.jpg" alt="Breaking Bad" /></Link></li>
                <li className="show-li-top"><Link to="/shows/58957" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/jH4eaDfDBx2x2CyKZ8inQuVAfA3.jpg" alt="Nathan For You" /></Link></li>
                <li className="show-li-top"><Link to="/shows/1432" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/8ThWFacN4JIsaITvksyVl1xGpUp.jpg" alt="Veronica Mars" /></Link></li>
                <li className="show-li-top"><Link to="/shows/34594" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/cTRcV3AT69iEVFq7HRa3maqylZB.jpg" alt="Enlightened" /></Link></li>
                <li className="show-li-top"><Link to="/shows/74577" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/xzwwzmXbz6n2Y3fc0GbjqGiFQPm.jpg" alt="The End of the F***ing World" /></Link></li>
                <li className="show-li-top"><Link to="/shows/2122" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/83LbPNL1NZ2czbRlN5vNSfi47Fj.jpg" alt="King of the Hill" /></Link></li>
                <li className="show-li-top"><Link to="/shows/745" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/e9Slc8UFri8F1Eq1M6TQXn14RIK.jpg" alt="Spaced" /></Link></li>
                <li className="show-li-top"><Link to="/shows/42009" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/vGrS1mzlSHQQdOcmqH1zlE2iViY.jpg" alt="Black Mirror" /></Link></li>
                <li className="show-li-top"><Link to="/shows/63161" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/bbt9VPYK105CaiY6YlwSRELB5je.jpg" alt="Crazy Ex-Girlfriend" /></Link></li>
                <li className="show-li-top"><Link to="/shows/4589" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/qMzwO952hMWQSCfHkp7IL20s4K7.jpg" alt="Arrested Development" /></Link></li>
                <li className="show-li-top"><Link to="/shows/18347" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/kMceNzAgVtl6MwU5C7Iv9azPbih.jpg" alt="Community" /></Link></li>
                <li className="show-li-top"><Link to="/shows/3452" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/gYAb6GCVEFsU9hzMCG5rxaxoIv3.jpg" alt="Cowboy Bebop" /></Link></li>
                <li className="show-li-top"><Link to="/shows/60573" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/dc5r71XI1gD4YwIUoEYCLiVvtss.jpg" alt="Silicon Valley" /></Link></li>
                <li className="show-li-top"><Link to="/shows/4385" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/7mwErPneNN2BUAODW2gldnhL8Oe.jpg" alt="The Colbert Report" /></Link></li>
                <li className="show-li-top"><Link to="/shows/21729" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/964uFOAXVprOvi37I9k9FDs7lRt.jpg" alt="Gurren Lagann" /></Link></li>
                <li className="show-li-top"><Link to="/shows/35415" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/y8066BjWBL2pCrMPm0XQQwNpTlz.jpg" alt="Honey and Clover" /></Link></li>
                <li className="show-li-top"><Link to="/shows/66292" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/6nxTO2tYDBR9twPWlDC3I1eXUnY.jpg" alt="Big Little Lies" /></Link></li>
                <li className="show-li-top"><Link to="/shows/713" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/o5FI6Xu30m2HDim07f6bHAos9ZC.jpg" alt="Chappelle's Show" /></Link></li>
                <li className="show-li-top"><Link to="/shows/1104" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/6R3PCqGzyTh12Lafhop0U0MNJDz.jpg" alt="Mad Men" /></Link></li>
                <li className="show-li-top"><Link to="/shows/17287" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/r8tFjUJrfwAheK8zHfKZbIR5LqU.jpg" alt="Party Down" /></Link></li>
                <li className="show-li-top"><Link to="/shows/69864" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/sa3uXjGkF0lZMB7gjixz0sPQrQ0.jpg" alt="Terrace House: Aloha State" /></Link></li>
                <li className="show-li-top"><Link to="/shows/6357" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/7uY4pCOxbEdv4M8jTE4uMPVoSIW.jpg" alt="The Twilight Zone" /></Link></li>
                <li className="show-li-top"><Link to="/shows/615" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/iN0LOeE2JnJpIy4jF7imUjO6jwn.jpg" alt="Futurama" /></Link></li>
                <li className="show-li-top"><Link to="/shows/9841" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/q4zXHqZWZ3f1FFHgm6C8TuRuuQx.jpg" alt="It's Garry Shandling's Show" /></Link></li>
                <li className="show-li-top"><Link to="/shows/387" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/dprzrmKPHP910hPwU0OAaYYJBIj.jpg" alt="SpongeBob SquarePants" /></Link></li>
                <li className="show-li-top"><Link to="/shows/3793" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/x5MLJLL8yxzeGZjttdT3y55YNmb.jpg" alt="Invader Zim" /></Link></li>
                <li className="show-li-top"><Link to="/shows/1668" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/7buCWBTpiPrCF5Lt023dSC60rgS.jpg" alt="Friends" /></Link></li>
                <li className="show-li-top"><Link to="/shows/4087" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/5BD0kiTGnDxONqdrsswTewnk6WH.jpg" alt="The X-Files" /></Link></li>
                <li className="show-li-top"><Link to="/shows/141" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/hS4i9yyo9juP1YfjWiJb5S7I7LA.jpg" alt="Cheers" /></Link></li>
                <li className="show-li-top"><Link to="/shows/60839" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/9w8UKR9ZoIhabAvmRhI1KhV4Ngy.jpg" alt="Broad City" /></Link></li>
                <li className="show-li-top"><Link to="/shows/4670" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/z9fzRh0g7JqFiwPrmajMSqVYN4x.jpg" alt="Stella" /></Link></li>
                <li className="show-li-top"><Link to="/shows/1667" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/pCSb6uZwlCCrM3hBgqohbwSF9t1.jpg" alt="Saturday Night Live" /></Link></li>
                <li className="show-li-top"><Link to="/shows/2730" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/qvPk5BDS1tYRyoxerU6bYk5zix6.jpg" alt="I Love Lucy" /></Link></li>
                <li className="show-li-top"><Link to="/shows/82" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/bYCnPVwFbpjjZC5daEuQh2NcGJz.jpg" alt="Animaniacs" /></Link></li>
                <li className="show-li-top"><Link to="/shows/73126" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/z1vnHi6L2VqB620vT33sdChuIhX.jpg" alt="American Vandal" /></Link></li>
                <li className="show-li-top"><Link to="/shows/4594" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/pRehOQa4pXB1RgFCWvDC7FrBeeX.jpg" alt="Iron Chef" /></Link></li>
                <li className="show-li-top"><Link to="/shows/8592" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/9kWSJ9c8NlBY2WgfvOZZ71kafSx.jpg" alt="Parks and Recreation" /></Link></li>
                <li className="show-li-top"><Link to="/shows/67198" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/aJTSeqG43514TewIuS9hiHvbero.jpg" alt="Star Trek: Discovery" /></Link></li>
                <li className="show-li-top"><Link to="/shows/1399" className="poster-link-top"><img src="https://image.tmdb.org/t/p/w154/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg" alt="Game of Thrones" /></Link></li>

            </ul>
        </div>
    </>
)