1. `yarn init`
2. `yarn add --dev @babel/core @babel/cli @babel/preset-env`
3. `/node_modules/.bin/babel src --out-dir dist`
4. `yarn add core-js`
5. `yarn add @babel/preset-react`


To watch with both Babel and Node:
- `./node_modules/.bin/babel src --out-dir dist --watch --verbose`
- `node --watch-path=dist dist/index.js`
