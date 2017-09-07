# new-phaser-project
My ongoing effort to create a nice starting point for Phaser.js games...

IMPORTANT! This report contains several dot files. Do not clone this repo and just do a simple cp over to a new repo or you will likey miss those files.

Instead try one of the following:
- download this project as zip file and unpack in your new repo
- import it with github
- fork the project

Supports:
- webpack, webpack dev server, es6 via babel
- travis ci integration
- unit testing using mocha chai
- pc distribution using electron

## Prereqs
- Cairo 2D graphics library (for Canvs module). If you have homebrew you can *brew install cairo*. Or see https://cairographics.org/ for more details on manual installation.
- Node.js - https://nodejs.org/en/

## Setup
- npm install

## Running webpack dev server
- npm start

## Testing with Watcher
- npm run test-watch

## Testing without Watcher
- npm test

## lint
- npm run eslint
- npm run eslint-fix

## creating a packaged distribution
- npm run dist

## electron
- npm run electron
- npm run electron-dist-win
- npm run electron-dist-mac
- npm run electron-dist-linux
