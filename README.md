## Table of contents
* [General info](#general-info)
* [Features](#features)
* [Requirements](#requirements)
* [Getting Started](#getting-started)
* [Creating A Component](#creating-a-component)
* [Build Setup](#build-setup)
* [Installed](#installed)
* [Work Space Structure](#work-space-structure)
* [Recommended Reads](#recommended-reads)


## General info
# Skeleton's react website

<a href="https://neyu.co/index.html"><img src="https://img.shields.io/badge/-Contact-%23555.svg?logo=neyu-sponsors" height="20"></a>

- The web's most popular front-end template for building web applications with
[React](https://reactjs.org/) in version 16.13.0(popular).
- State management with [Redux](https://github.com/reactjs/react-redux) in version 4.0.5.


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


## Creating A Component

We're going to write a `Welcome` component.
The component will take the name of whoever we want to greet (which we'll call `name`), and optionally, the number of exclamation marks to trail with (`enthusiasmLevel`).

When we write something like `<Welcome name="Michael" enthusiasmLevel={3} />`, the component should render to something like `<div>Hello Michael!!!</div>`.
If `enthusiasmLevel` isn't specified, the component should default to showing one exclamation mark.
If `enthusiasmLevel` is `0` or negative, it should throw an error.

We'll write a `Welcome.js`:

```js
// src/components/Hello.js

import * as React from 'react';

function Welcome({ name, enthusiasmLevel = 1 }) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="welcome">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Welcome;

// helpers

function getExclamationMarks(numChars) {
  return Array(numChars + 1).join('!');
}
```

We also wrote `Welcome` as a stateless function component (an SFC).
To be specific, `Welcome` is a function that takes a `Props` object, and picks apart (or "destructure") all the properties that it will be passed.
If `enthusiasmLevel` isn't given in our `Props` object, it will default to `1`.

Writing functions is one of two primary [ways React allows us to make components]((https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components)).
If we wanted, we *could* have written it out as a class as follows:

```js
class Welcome extends React.Component {
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}
```

Classes are useful [when our component instances have some state or need to handle lifecycle hooks](https://facebook.github.io/react/docs/state-and-lifecycle.html).
But we don't really need to think about state in this specific example - in fact, we specified it as `object` in `React.Component`, so writing an SFC makes more sense here, but it's important to know how to write a class component.

Notice that the class extends `React.Component`.
The JavaScript-specific bit here are the type arguments we're passing to `React.Component`.
We'll return to component state in a bit.

Now that we've written our component, let's dive into `index.js` and replace our render of `<App />` with a render of `<Hello ... />`.

First we'll import it at the top of the file:

```js
import Welcome from './components/Welcome';
```

and then change up our `render` call:

```js
ReactDOM.render(
  <Welcome name="JavaScript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
);
```


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
# ├── README.md            # Documents
├── .env                  # environment variables
├── .babelrc              # babel config
├── .eslintrc             # eslint config
├── .eslintignore         # eslint config
├── ecosystem.config.js   # ecosystem config
├── index.js              # index scripts
├── jsconfig.json         # to enable editor IntelliSense
├── package-lock.json     # project metadata
├── package.json          # project metadata
├── test.js               # test scripts
├── public
|  ├── favicon.ico        # app icon
|  ├── index.html         # the template file of the app
|  ├── manifest.json      # the file that describes the app
|  └── static             # static content (.png, .jpg, .pdf, ...etc)
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
   ├── index.js                 # app main
   ├── registerServiceWorker.js # where install service worker
   ├── setupTests.js            # setup jest test env
   ├── apis       # where define API actions
   |  ├── core.js       # define API actions example
   ├── components # atom component, stateless component
   |  ├── loading       # Example: loading component
   |  |  ├── index.js   # component script
   |  |  └── style.scss # component style
   |  └── ...
   ├── constants  # constant variables
   ├── hooks      # custom hooks
   ├── i18n       # i18n configuration
   ├── layout     # layout component
   |     ├── index.js   # component script
   |     └── style.scss # component style
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
   |── util   # utility, helpers, custom, loader, ...
   |  ├── firebase.js
   |  ├── helpers.js
   |  └── reCAPTCHA.js
   └── view   # view component
      ├── Home     # Home page
      ├── NotFound # Not Found page
      └── index.js # component script
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
