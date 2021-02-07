---
title: 'How I built a simple stock "analytics" site with web scraping and serverless functions'
description: ''
tags: [web]
date: 'Feb 2021'
---

## A little backstory: the GameStop short squeeze

Everyone who even just loosely follows american news must have heard of the craziness going on on the US stock market in the past few weeks. In short the story is that a large group of Reddit users from the [WallStreetBets](https://www.reddit.com/r/wallstreetbets/) subreddit, which describes itself as "a community for making money and being amused while doing it. Or, realistically, a place to come and upvote memes when your portfolio is down." almost brought Wall Street to its knees. They discovered that the GameStop stock was massively overshorted by a number of large hedge funds and in an effort to stick it to those greedy Wall Street investors they decided to start mass buying the company's shares. This drove up the stock's price so much that some hedge funds lost billions and needed to be bailed out to avoid bankruptcy. There's more to the story than this but let's get to the topic of the article.

![The GameStop rally](/images/posts/post4/gamestop.jpg)

## We Like The Stock!

Okay, I admit calling [WeLikeTheStock.live](https://welikethestock.live) a stock analytics site is a bit generous for this ridiculous looking meme-themed site. My goal was not to build a [Yahoo Finance](https://finance.yahoo.com/) competitor, but be a small part of this historic movement and build something that can bring a smile to some disgruntled Reddit investors' faces.

![The GameStop rally](/images/posts/post4/post4-thumbnail.jpg)

## Web scraping, serverless functions and serverless database

I've been a heavy user of [React](https://reactjs.org/) and [Next.js](https://nextjs.org/) so they were obvious choices for this project as well. Next.js makes the development of React sites a breeze with many useful features such as static & server side rendering, easy routing etc. If you use their own hosting solution, [Vercel](https://vercel.com/) and hook it up to your site's repository then the whole deployment process is as easy as just pushing your changes to GitHub (or BitBucket or GitLab). Vercel also has built-in support for serverless functions which you can write in the same repo as your frontend code and push it to production along with your site. It doensn't get much easier than that!

For the web scraping part I went with [Scarper API](https://www.scraperapi.com/) which is another wonderfully simple to use framework, allowing developers to easily grab the HTML content from any page.

I used [Lambda Store](https://lambda.store/) to store data, which is a serverless database solution which takes only a few clicks to set up. It was my first time using it but I was suprised at the simplicity of it. It may not be suitable for a large scale application but it was perfect for my needs here.

## Hooking it all up

So we've got everything we need but how does it all come together to form this gorgeous looking website? Well the frontend code is not much to look at, the juicy part is the serverless function. It's one simple endpoint which provides the data to the site through Next.js's [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) function, which lets you pre-render the page on each request before serving it to the user. This function is an `async` function which can go and fetch data or do any kind of work before returning the result which will be passed in as render props to the React site.

The serverless function itself does the following:

-   It checks the Redis database for recently updated data.
-   If it doesn't find anything or if the data is out of date (older than 20 mins), it goes ahead and scrapes [https://www.highshortinterest.com/](https://www.highshortinterest.com/) which is a site listing the most shorted stocks. Scraper API takes care of all the scraping work, returning just the raw HTML code.
-   With the help of [JSSoup](https://github.com/chishui/JSSoup) it pulls out the data from the HTML and transforms it into a JSON object.
-   Once that's done it saves the new data to the database, and returns it for the frontend to use.

And that's how you build a site using web scraping and serverless functions in no time! While this toolset would not scale well for larger applications, it's best not to overcomplicate things when all we want is a simple website that will break America's financial system.

## [Go check it out now!](https://welikethestock.live)
