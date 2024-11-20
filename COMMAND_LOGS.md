yarn init
yarn add --dev @babel/core @babel/cli @babel/preset-env

./node_modules/.bin/babel src --out-dir dist
Watch with both Babel and Node :
  - ./node_modules/.bin/babel src --out-dir dist --watch --verbose
  - node --watch-path=dist dist/index.js
  
