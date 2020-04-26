# React Starter

Starter Kit for developing React Web Apps!

## Project structure
| Folder Path | Description |
| ------------- | ------------- |
| \_\_mocks__ | Jest mocks |
| env/ | Environment files |
| public/ | Public directory |
| src/components/ | React components directory |
| src/index.js | Entry file |
| src/webpack/ | Webpack configuration for `dev` and `prod` environments |
| .eslintrc.json | ESLint configuration |
| .stylelintrc | SCSS Lint configuration |
| babel.config.js | Babel configuration |
| db.json | Mock API server database |
| jest.config.json | Jest configuration |
| json-server.js | Mock API server |
| package.json | Project dependencies |
| yarn.lock| Yarn lock file |


## To start, follow these steps

### Step 1: Install NodeJS & NPM

[NodeJS & NPM](https://nodejs.org/en/download/)

### Step 2: Install Yarn
```bash
npm i -g yarn
```

### Step 3: Get project

Clone this repository and go to this project's root location

### Step 4: Add local dependencies

```bash
yarn install
```

### Step 5: Run webpack dev server

```bash
yarn start
```

### Step 6: Run in dev environment

```bash
npm run start:dev
```

### Step 7: Check Website

Open browser and go to [http://localhost:3000/](http://localhost:3000/)

### Step 8 (Optional): Run test cases

```bash
yarn test
```

### Step 9: Build for production

```bash
yarn build
```

### Step 10: Run in production environment

```bash
yarn start:prod
```