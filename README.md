![ScreenShot](https://img.shields.io/badge/License-MIT-blue)
# RMC (Reel Movie Catalog)

## Technologies Used
* React.js
* Tailwind CSS
* Next.js

## Deployment
movie-catalog-ecru.vercel.app

## Description 
Introducting RMC (Reel Movie Catalog), a web application designed to seamlessly showcase an extensive collection of movies from a dynamic database, offering users a comprehensive platform to explore and make informed decisions on what they would like to watch. Say goodbye to the uncertainty of choosing the right movie! RMC equips users with the ability to view detailed information, including summaries, cast details, ratings, and reviews, empowering them to make informed decisions and enhance their viewing experience. They can also search for their movie title and display their results based on their keywords.  <br> <br>

## How it works
The application was designed to be user friendly and easy to use. On the homepage, you will be presented with "Trending Movies" and "Top Rated Movies" which is data retrieved from the <a href='https://developer.themoviedb.org/docs/getting-started'>TMDB</a> API using asynchronous programming to fetch our data from the server, while still initially loading other content to the user.
<br>
When clicking on each movie title, you will be re-directed to another endpoint using "Dynamic Routing" using Next.js, thanks to it's <a href='https://nextjs.org/docs/app/building-your-application/routing/defining-routes'>file-system based routing</a>. <br>

The search bar functionality will find keywords that match a certain movie title and render the matched results to the user based on their input.

 <br> <br>

## Mobile Layout
<br>
<p>
<img src='/' width='480'>
</p> <br><br>

## Desktop Layout
<br>
<p>
<img src='./public/images/desktopView.png' width='980'>
</p>  <br><br>

## Contributions
I am always looking for future improvements and suggestions for my projects, you can contribute to this project by going to my [repo](https://github.com/mattwhen/fetchcoin) and creating a pull request. This project is still under development, which means it also needs quite a bit of work 😅. If you need assistance with how to clone the repo, simply follow these three steps. <br>

1.  Clone the repo using the link [here](https://github.com/mattwhen/movie-catalog). 

2. From there, click on the Git Clone button using your preferred method as shown below to clone the application. <br><br>

<p align='center'>
<img src='./src/images/gitClone.png'>
</p>
<br>

3. Once you clone the repo, run the application locally in the terminal using the following command:
```
npm run dev
```

You can now view the application locally on your machine
http://localhost:3000

4. Make necessary changes, then submit a pull request. 
<br>

## License
This license is covered under the MIT license. <br>

## Questions
Questions, comments, or concerns? Reach me at matt@mattwhen.com <br>
I'm always looking to connect with other developers! 