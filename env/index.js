const commandLineArgs = require('command-line-args');
const DotEnv = require('dotenv');
const DotEnvWebpack = require('dotenv-webpack');
const join = require('path').join;

let cliArgs;

// Make sure command line arguments have same name as maintained in .env files
cliArgs = commandLineArgs([
  {
    name: 'NODE_ENV',
    alias: 'e',
    defaultValue: 'development',
    type: String
  }
],
  { partial: true }
);

// Initialise env vars in CLI for Jest testing
if ((process.env.NODE_ENV || cliArgs.NODE_ENV) == 'development') {
  DotEnv.config({
    path: join(__dirname, `${process.env.NODE_ENV || cliArgs.NODE_ENV}.env`)
  })
}

module.exports = new DotEnvWebpack({
  path: join(__dirname, `${process.env.NODE_ENV || cliArgs.NODE_ENV}.env`)
});

// To override env variables with CLI arguments, uncomment following:
/*
delete cliArgs.unknown;
console.log(cliArgs)
Object.keys(cliArgs).forEach((e) => {
  process.env[e] = cliArgs[e];
});
*/