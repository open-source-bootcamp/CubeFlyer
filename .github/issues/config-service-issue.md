---
title: Add a configuration service
labels: enhancement
---

The game is fun with the current configuration of greetings and gravity, and it may have a local high score if this was implemented by teams in day 1. It would be nicer if this could all be in a service running somewhere that would allow the configuration to be updated without having to change the game code, or for high scores to be persisted.

> A lot of software does this - it has certain values set from a configuration service that can be tweaked without redeploying the application based on data gathered from users of the application. For example, in a game if a lot of users are failing to defeat a certain boss, the game can be tweaked through configuration to make the boss easier to beat.

As a **software engineering** team, you have been tasked with:

-   Creating a service that hosts a web API that you can use to retrieve configuration every time the page is refreshed
-   Adding the ability to store high scores using this web API.

How this is created is up to the team. It can be a local Python/Flask web app that stores the scores in memory, it can use a database to store the scores and configuration, use a cloud-based gaming service, or even a cloud-based serverless application. It depends on the skill level of the team, though the recommendation is to start as simple as possible.
