## Table of contents
* [General info](#general-info)
* [Features](#features)
* [Requirements](#requirements)
* [Getting Started](#getting-started)
* [Build Setup](#build-setup)
* [Installed](#installed)
* [Work Space Structure](#work-space-structure)
* [Recommended Reads](#recommended-reads)


## General info
# Skeleton's react website

<a href="https://neyu.co/index.html"><img src="https://img.shields.io/badge/-Contact-%23555.svg?logo=neyu-sponsors" height="20"></a>

The web's most popular front-end template for building web applications with
[React](https://reactjs.org/).


## Features

- The right structure for the project to conduct restructuring will help improve work productivity.
- Pre-configured with code quality tools: ESLint, Prettier, JavaScript, Webpack, Redux, etc.
- Pre-configured with VSCode code snippets and other VSCode settings
- The ongoing design and development are supported by these outstanding companies:

<a href="https://reactstarter.com/s/1"><img src="https://reactstarter.com/s/1.png" height="60" /></a>&nbsp;&nbsp;<a href="https://reactstarter.com/s/2"><img src="https://reactstarter.com/s/2.png" height="60" /></a>&nbsp;&nbsp;<a href="https://reactstarter.com/s/3"><img src="https://reactstarter.com/s/3.png" height="60" /></a>


## Requirements

- [Node.js](https://nodejs.org/) v18+ with [Corepack](https://nodejs.org/api/corepack.html) (`$ corepack enable`)
- [VS Code](https://code.visualstudio.com/) editor with [recommended extensions](.vscode/extensions.json)
- Optionally [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  and [Reactime](https://chrome.google.com/webstore/detail/reactime/cgibknllccemdnfhfpmjhffpjfeidjga?hl=en) browser extensions


## Getting Started
[(dotenv)](https://www.npmjs.com/package/dotenv)

Copy [.env.example] to `.env`

``` bash
cp .env.example .env
npm install
npm start
```
The app will become available at [http://localhost:3100/](http://localhost:3100/).


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:<port> | config .env REACT_APP_PORT default 3000
npm run start

# start development with docker | replace .env.REACT_APP_PROXY localhost to host.docker.internal
npm run docker:start

# build for production with minification
npm run build

# run linter
npm run eslint

# run tests
npm run test
```


## Installed

|     Plugin          |     Document  |
|     ------------    |     -----------         |
| Package manager | [npm](https://www.npmjs.com/) |
| Hook installer for git | [pre-commit](https://github.com/observing/pre-commit) |
| Module bundler | [webpack-v4](https://v4.webpack.js.org/api) |
| Javascript compiler | [babel](https://babeljs.io/) |
| CSS preprocessor | [sass](https://sass-lang.com) |
| Linter tool | [eslint](https://eslint.org/) |
| Javascript testing | [jest](https://github.com/facebook/jest) |
| Managing environment variables | [dotenv](https://github.com/motdotla/dotenv) |
| Promise based HTTP client | [axios](https://github.com/axios/axios) |
| Value parsing and validation | [yup](https://www.npmjs.com/package/yup) |


## Work Space Structure

``` bash
# ├── README.md           # Documents
├── .vscode             # vscode editor config
├── .env                # environment variables
├── .babelrc            # babel config
├── .eslintrc           # eslint config
├── .eslintignore       # eslint config
├── jsconfig.json       # to enable editor IntelliSense
├── logo.png            # project logo
├── package-lock.json   # project metadata
├── package.json        # project metadata
├── test.js             # test scripts
├── public
|  ├── favicon.ico      # app icon
|  ├── index.html       # the template file of the app
|  ├── manifest.json    # the file that describes the app
|  └── static           # static content (.png, .jpg, .pdf, ...etc)
|     ├── fonts
|     ├── icons
|     └── ...
├── build   # build output folder
|  ├── favicon.ico
|  ├── index.html
|  ├── manifest.json
|  ├── service-worker.js
|  └── ...
├── config  # source configuration (env, polyfill, ...etc)
|  ├── env.js
|  ├── es5.js
|  ├── paths.js
|  ├── polyfills.js
|  └── jest
|     ├── babelTransform.js
|     ├── cssTransform.js
|     └── fileTransform.js
├── webpack # webpack scripts configuration
|  ├── webpack.common.js
|  ├── webpack.dev.js
|  └── webpack.prod.js
└── src
   ├── App.js                   # app component
   ├── App.test.js              # app component test scripts
   ├── index.js                 # app main
   ├── registerServiceWorker.js # where install service worker
   ├── setupTests.js            # setup jest test env
   ├── api                      # where define API actions
   ├── components # atom component, stateless component
   |  ├── loading       # Example: loading component
   |  |  ├── index.js   # component script
   |  |  └── style.scss # component style
   |  └── ...
   ├── constants  # constant variables
   ├── hooks      # custom hooks
   ├── i18n       # i18n configuration
   ├── layout     # layout component
   |  ├── footer    # Example: footer component
   |  |  ├── index.js   # component script
   |  |  └── style.scss # component style
   |  └── ...
   ├── module
   |  ├── core  # core module
   |  |  ├── components   # module components
   |  |  |  ├── 403.js        # component script
   |  |  |  ├── 403.test.js   # component test scripts
   |  |  |  ├── 404.js        # component script
   |  |  |  ├── 404.test.js   # component test scripts
   |  |  |  ├── home.js       # component script
   |  |  |  ├── home.scss     # component style
   |  |  |  └── home.test.js  # component test scripts
   |  |  └── route.js     # module routes
   |  ├── test  # example test module
   │  │  ├── components   # module components
   |  |  |  ├── detail
   |  |  |  |  └── index.js       # component script
   |  |  |  └── list
   |  |  |     ├── index.js       # component script
   |  |  |     ├── index.test.js  # component style
   |  |  |     └── style.scss     # component test scripts
   │  │  └── route.js     # module routes
   │  └── ...
   ├── route  # react-router configuration
   ├── store  # redux configuration
   |  ├── index.js
   |  ├── actions
   |  ├── reducers
   |  └── selectors
   ├── style  # app style configuration
   |  ├── _animation.scss
   |  ├── _autoload.scss
   |  ├── _color.scss
   |  ├── _font.scss
   |  ├── _helper.scss
   |  ├── _mixin.scss
   |  ├── _reset.scss
   |  ├── _size.scss
   |  ├── _typography.scss
   |  └── index.js
   └── util   # utility, helpers, custom, loader, ...
      ├── firebase.js
      ├── helpers.js
      └── reCAPTCHA.js
```


## Recommended Reads

### ES6

- [http://es6-features.org](http://es6-features.org)

### React

- [https://reactjs.org/docs](https://reactjs.org/docs)
- [https://reactjs.org/docs/strict-mode.html](https://reactjs.org/docs/strict-mode.html)
- [https://reactjs.org/docs/hooks-rules.html](https://reactjs.org/docs/hooks-rules.html)
- [https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)

### Style guide

- [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
- [https://google.github.io/styleguide/jsguide.html#naming](https://google.github.io/styleguide/jsguide.html#naming)
- [https://google.github.io/styleguide/jsguide.html#jsdoc](https://google.github.io/styleguide/jsguide.html#jsdoc)
