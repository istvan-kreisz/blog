---
title: 'Do you like GeoGuessr? I made a multiplayer version of it that you need to try.'
description: ''
tags: [web]
date: 'Oct 2020'
---

## What is GeoGuessr?

[GeoGuessr](https://geoguessr.com) is an online game where you're dropped somewhere on Earth and with the help of Google Street View you need to figure out where you are. It's a very popular game and a longtime personal favorite of mine.

## So why make another one?

Even though the game I built was inspired by it, it's quite different from GeoGuessr. It's called [Hide & Seek World](https://hideandseek.world) and it's a turn-based multiplayer game, while GeoGuessr is a (primarily) single player game.

In Hide & Seek World you “hide” somewhere in the world, and the other players have to guess where you are based on Street View or satellite images. The better your opponents are able to guess your hiding location the less points you get. Similarly when you're a seeker, the more accurately you can guess your opponents location, the more points you get in that turn. In the end whoever has the most points wins the game.

![screenshot1](/images/posts/post3/screenshot1.jpg)

As much as I like GeoGuessr I always thought it'd be nice if it was a bit more of a social game. In Hide & Seek World you're up against real players and you've got the extra excitement from trying to hide from others so they can't find you. Your goal should be to try to hide in an area which doesn't have many distinctive features so it's harder to guess. Sometimes only a street sign, a building or a pedestrian is enough to give it away.

![screenshot2](/images/posts/post3/screenshot2.jpg)

## Game Modes

Hide & Seek World comes with 2 game modes: Street View or Satellite. In Street View mode you hide by selecting a street view location somewhere and in Satellite mode you're hiding spot is a zoomed in rectangular area on the surface of Earth. In Street View mode you need to be able to read visual cues about people, architectural styles, vegetation etc. to guess well, while Satellite mode relies more heavily on pure geographical knowledge.

In addition to the 2 game modes you can choose to play against random players or create a private room and play against your friends.

![screenshot3](/images/posts/post3/screenshot3.jpg)

## Development

The development of the first version of the game took about 2 months. Since it was my first "serious" web dev project (after years of iOS development) things were moving at a relatively slow pace. I built it using Next.js & React and various Firebase services: Authentication, Realtime Database, FireStore, Functions (for all backend logic), Analytics. For the maps & Street View related things I used the Bing Maps and Google Maps APIs.

## [Go check it out now!](https://hideandseek.world)
