# Particle: A design system integrating to Pattern Lab and a Drupal 8 theme

[![GitHub (pre-)release](https://img.shields.io/github/release/phase2/particle/all.svg)](https://github.com/phase2/particle/releases) [![Build Status](https://travis-ci.org/phase2/particle.svg?branch=master)](https://travis-ci.org/phase2/particle) [![Greenkeeper badge](https://badges.greenkeeper.io/phase2/particle.svg)](https://greenkeeper.io/)

![Particle mascot: Astrogoat](source/_patterns/01-atoms/image/demo/astrogoat.png?raw=true "Astrogoat")

Particle is an opinionated set of tools and examples to:

1. Build an application-agnostic **design system**
1. Apply that design system to a locally-served **Pattern Lab** for rapid prototyping
1. Apply that design system to a **Drupal theme**

In depth documentation about frontend approach using this project at [Phase2 Frontend Docs](https://phase2.github.io/frontend-docs/)

## Prerequisites

- [Node `^8.0.0`](https://nodejs.org)
- [PHP `5.6`, `^7.0.0`](https://php.net)
- [Composer `^1.0.0`](https://getcomposer.org)

## Provides

- Drupal theme, Grav theme,  and Pattern Lab app
- Strict [Atomic Design](http://atomicdesign.bradfrost.com/) component structure
- Webpack bundling of all CSS, javascript, font, and static image assets for multiple targets (Drupal theme, Grav theme, Pattern Lab)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) for local hosting and hot reloading of assets into Pattern Lab
- [Twig namespaced paths](https://symfony.com/doc/current/templating/namespaced_paths.html) automatically added into Drupal theme and Pattern Lab config. Within any twig file, `@atoms/thing.twig` means the same thing to Drupal theme and Pattern Lab.
- Iconfont auto-generation
- Bootstrap 4 integration, used for all starting example components
- Auto-linting against the [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript) and sane Sass standards
- All Webpack and Gulp files are fully configurable
- Simple [Yeoman](http://yeoman.io/) generator for Design System component creation

## Quickstart

Particle builds design systems in dev mode for local hosting, or production mode for optimized asset generation.

### Quickstart anywhere

1. [Download the latest release](https://github.com/phase2/particle/releases)
1. Extract anywhere (i.e. this readme should be at `any/where/particle/README.md`)
1. Within the extracted folder run:

```bash
npm install
npm run setup
npm start
```

Simply wait until the webpack bundle output appears then visit [http://0.0.0.0:8080/pl](http://0.0.0.0:8080/pl) (or [http://localhost:8080/pl](http://localhost:8080/pl)) and start working.

That's it. For **much** greater detail on the frontend approach using this project, check out the [Phase2 Frontend Docs](https://phase2.github.io/frontend-docs/).
