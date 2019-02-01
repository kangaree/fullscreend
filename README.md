# Fullscreend

![Alt Text](https://media.giphy.com/media/Sb7WSbjHFNIL6/giphy.gif)
[Live Demo](https://fullscreend.herokuapp.com)

Fullscreend is an app that lets you log and collect tv. 

It is a clone of Letterboxd, an app that lets you log and collect movies. 

Fullscreend's name comes from the full screen aspect ratio 4:3 (1.3:1) of the old standard television screen. 

Letterboxd's name comes from letterboxing, or the practice of transferring film shot in a widescreen aspect ratio to standard-width video formats while preserving the original aspect ratio. It comes from a love of the widescreen format.

It was built on a Rails and PostgreSQL backend with a React/Redux frontend.
It uses the TMDb API but is not endorsed or certified by TMDb.

This project was completed in a fortnight, but will continue to be updated.

## Features

* User authentication using BCrypt
* Search, Index, and Show TV Shows through TMDb API
* Create, Read, Update, and Delete Reviews
* Flexible Form for Reviews

## Search, Index, and Show TV Shows through TMDb API

The TMDb API service is for those interested in using movie, TV show or actor images and/or data in their applications. It has an easy interface to programmatically fetch and use data and/or images. 

Letterboxd uses the TMDb API service for its website. I adapted the TMDb API for TV.

## Flexible Form for Reviews

Letterboxd has a very flexible structure for reviews. It's really more of a log with several optional fields. You can submit nothing and it'll make a timestamp of the show.

I like this philosophy. It puts less stress on the diary writer. Diaries should not be restricted to a number rating. When I review a show, I might want to write the date I saw it, the season I watched, write a blurb, give a star rating, and like it, or I could only want to keep a log of the show.

The review form is a modal and it has clickable stars and hearts.

## Design

I love the design of Letterboxd. The faded gradient backdrops are gorgeous and mirror the effect of watching a film in the dark. Posters are are easier to identify than title text and are used frequently throughout Letterboxd. The color choices are well balanced as well- dark blue, orange, and green.

A slice of the CSS:

```
.backdrop-fade {
    background-image: linear-gradient(90deg,#14181d 0,rgba(20,24,29,.98556487) .97%,rgba(20,24,29,.9451312) 2.07833333%,rgba(20,24,29,.88300656) 3.29666667%,rgba(20,24,29,.80349854) 4.60166667%,rgba(20,24,29,.71091472) 5.96666667%,rgba(20,24,29,.60956268) 7.365%,rgba(20,24,29,.50375) 8.77166667%,rgba(20,24,29,.39778426) 10.16%,rgba(20,24,29,.29597303) 11.505%,rgba(20,24,29,.20262391) 12.78%,rgba(20,24,29,.12204446) 13.95833333%,rgba(20,24,29,.05854227) 15.01666667%,rgba(20,24,29,.01642493) 15.92833333%,rgba(20,24,29,0) 16.66666667%,rgba(20,24,29,0) 83.33333333%,rgba(20,24,29,.01642493) 84.07166667%,rgba(20,24,29,.05854227) 84.98333333%,rgba(20,24,29,.12204446) 86.04166667%,rgba(20,24,29,.20262391) 87.22%,rgba(20,24,29,.29597303) 88.495%,rgba(20,24,29,.39778426) 89.84%,rgba(20,24,29,.50375) 91.22833333%,rgba(20,24,29,.60956268) 92.635%,rgba(20,24,29,.71091472) 94.03333333%,rgba(20,24,29,.80349854) 95.39833333%,rgba(20,24,29,.88300656) 96.70333333%,rgba(20,24,29,.9451312) 97.92166667%,rgba(20,24,29,.98556487) 99.03%,#14181d),linear-gradient(0deg,#14181d 0,#14181d 21.48148148%,rgba(20,24,29,.98556487) 23.63703704%,rgba(20,24,29,.9451312) 26.1%,rgba(20,24,29,.88300656) 28.80740741%,rgba(20,24,29,.80349854) 31.70740741%,rgba(20,24,29,.71091472) 34.74074074%,rgba(20,24,29,.60956268) 37.84814815%,rgba(20,24,29,.50375) 40.97407407%,rgba(20,24,29,.39778426) 44.05925926%,rgba(20,24,29,.29597303) 47.04814815%,rgba(20,24,29,.20262391) 49.88148148%,rgba(20,24,29,.12204446) 52.5%,rgba(20,24,29,.05854227) 54.85185185%,rgba(20,24,29,.01642493) 56.87777778%,rgba(20,24,29,0) 58.51851852%);
    background-position: center -15px;
    background-repeat: no-repeat;
    background-size: 100% auto;
    margin: 0 auto;
    z-index: 1;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 675px;
}
```

## Additional Resources

* [Database Schema](https://github.com/kangaree/fullscreend/wiki/Schema)
* [Backend Routes](https://github.com/kangaree/fullscreend/wiki/Backend-Routes)
* [Frontend Routes and Components](https://github.com/kangaree/fullscreend/wiki/Frontend-Routes)
* [Sample State](https://github.com/kangaree/fullscreend/wiki/Sample-State-Shape)

* [TMDb](https://www.themoviedb.org)

## Future Features

* Lists
* Filters
* Loading Transition
* Seasons and Episodes
* Spoiler Filter
* Calendar
* Half Stars