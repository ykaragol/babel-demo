1. `yarn init`
2. `yarn add --dev @babel/core @babel/cli @babel/preset-env`
3. `/node_modules/.bin/babel src --out-dir dist`
4. `yarn add core-js`
5. `yarn add @babel/preset-react`
6. `yarn add --dev @babel/preset-typescript @types/node @types/react @types/react-dom`
7. `yarn add react react-dom`
8. `yarn add babel-preset-minify --dev`

To watch with both Babel and Node:
- `./node_modules/.bin/babel src --out-dir dist --watch --verbose --extensions '.ts,.tsx,.js,.jsx'`
- `node --watch-path=dist dist/index.js`
