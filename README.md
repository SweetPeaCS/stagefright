# stage-fright-frontend

This repository contains the frontend application for the Twitch clip categoriser.

It allows to watch and categorise Twitch clips.
This should be driven in parallel with [stagefright-backend](https://github.com/SweetPeaCS/stagefright-backend).

![Top app](https://raw.githubusercontent.com/SweetPeaCS/stagefright-frontend/master/README/clip-analytics-top-w-filters.png)
![Histogram](https://raw.githubusercontent.com/SweetPeaCS/stagefright-frontend/master/README/clip-list.png.png)
![Clip list](https://raw.githubusercontent.com/SweetPeaCS/stagefright-frontend/master/README/histogram-chart.png)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd stage-fright-frontend`
* `npm install`
* `ember build`
* `cd dist/`
* Serve the distribution directory from your favourite web host (eg: `python -m SimpleHTTPServer 8080`)
