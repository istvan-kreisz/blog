---
title: 'Do you like GeoGuessr? I made a multiplayer version of it that you need to try.'
description: ''
tags: [web]
date: 'Oct 2020'
---

## Geo... what?

In case you don't know [GeoGuessr](https://geoguessr.com) is an online game where you're dropped somewhere on Earth and with the help of Google Street View you need to figure out where you are. It's a very popular online game and a personal favorite of mine.

## So why make another one?

A little background story: besides being a GeoGuessr fan, I've also spent countless hours playing .io-type online multiplayer games, like: [skribbl.io](https://skribbl.io) and [slither.io](https://slither.io). The multiplayer element (among other things) makes these games a lot of fun and (unfortunately) highly addictive.

And that's what's missing from GeoGuessr.. Don't get me wrong it's a great game, but I figured it could be even greater if it had some sort of multiplayer functionality. So I built my own version of it.

## Introducing... Hide & Seek World!

In [Hide & Seek World](https://hideandseek.world) you're up against real players instead of just getting computer-generated random locations.

The game consists of a few turns, and in each turn there's one hider who selects a location somewhere in the world, and 1-5 seekers who try to guess the location based on Google Street View images.
As a hider your goal is hide well because the better seekers are able to guess your location the less points you get. As a seeker you get more points if you guess better.

![screenshot1](/images/posts/post3/screenshot1.jpg)

The concept is similar to the popular children's game, hence the name. The exception is that you have a bigger playground here, the whole world. At the end of each round you can see the guesses of all the players and how far everyone was from the actual hiding place.

![screenshot2](/images/posts/post3/screenshot3.jpg)

## Game modes

There's 2 game modes: Street View and Satellite. In Street View mode you hide by selecting a street view location somewhere and in Satellite mode you're hiding spot is a zoomed in rectangular area on the surface of Earth. In Street View mode you need to be able to read visual cues about architectural styles, vegetation, people etc. to guess well, while Satellite mode relies more on your geographical knowledge.

You can also create a private room and play against your friends, where you can customize more things like: how much time you have to make a guess or restrict the map to only certain countries.

## How I built it

I built the frontend using Next.js & React, and the backend with Firebase services: Authentication, Realtime Database, FireStore, Functions, Analytics. For the maps & Street View related things I used Bing Maps and Google Maps APIs. Payments are handled with Stripe Checkout. The site is hosted on Netlify.

## [Go check it out now!](https://hideandseek.world)
