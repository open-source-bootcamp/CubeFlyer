---
title: Continuous integration and deployment
labels: enhancement
---

CubeFlyer is fun to play locally, but how much better would it be if your friends could play?

One way to do this is to deploy the game to a static site hosting service. Static hosting services are web hosts that serve up HTML files, but don't run any server-side code. This is fine for CubeFlyer as it is a self-contained HTML file with the game logic as JavaScript that runs locally.

The easiest static hosting service to use with GitHub is [GitHub pages](https://pages.github.com). This takes code from a GitHub repo and hosts it as a web site. 

As a **devops** team, you have been tasked with:

* Deploying the contents of the `game` folder to GitHub pages
* Ensuring that every time the game is updated, a new deploy happens, testing this out with some basic changes

The deploy on every update can be achieved with GitHub actions, workflows that are configured and run inside a repository.

To help you learn about GitHub pages, you should work through the [GitHub pages lab on GitHub skills](https://github.com/skills/github-pages). You can also use the [GitHub pages documentation](https://docs.github.com/pages).

To help you learn about GitHub actions, there are [multiple GitHub actions labs on GitHub skills](https://skills.github.com/#automate-workflows-with-github-actions) that you can work through, using the [GitHub actions documentation](https://docs.github.com/actions) for further reference.
