yarn init
yarn add --dev @babel/core @babel/cli @babel/preset-env

./node_modules/.bin/babel src --out-dir dist
node --watch-path=dist dist/index.js
