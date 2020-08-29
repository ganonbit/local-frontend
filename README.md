# Local Social Frontend 🐧

[![Netlify Status](https://api.netlify.com/api/v1/badges/83c50317-9af2-4c3c-a396-3e2b1b4a25b1/deploy-status)](https://app.netlify.com/sites/vigorous-chandrasekhar-bbd3e9/deploys)

## Local development

- clone repo to your desktop via `git clone git@github.com:hyliancoder/local-frontend.git`

- run `yarn` to populate `node_modules` folder and to create your `yarn.lock` file needed

- rename/copy `.env.sample` to `.env` and update with your environment variables.

this has been fixed in latest netlify-cli: ~NOTE:until [fixed](https://github.com/netlify/cli/issues/659) by netlify use this specific version: `yarn global add netlify-cli@2.11.13`~

- install `yarn global add netlify-cli` or run `npx ntl dev` in the below steps if you wish to not install to your local machine to use `ntl dev` command which is used to run netlify serverless/lambda functions locally while also running react at the same time in one command.

- run `yarn build:lambda` to get local build ready for lambda use.

- once that is setup run the command `ntl dev` (or `npx ntl dev` if prompted above) to run lambda functions locally and react locally in one command. \*note: if wanting to run the whole application locally, the api: `https://github.com/hyliancoder/local-api/` needs to be up and running first via it's [README](https://github.com/hyliancoder/local-api/src/master/README.md)

- After running the server, you can navigate to `http://localhost:8888` if using default netlify-cli ports.

## Frontend deployment to Netlify

- Push repository on Bitbucket.
- Create new site on [Netlify](https://www.netlify.com/) and connect that repository to it.
- Add environment variables to Netlify based on `.env` file, making sure to replace API and Frontend URLs, e.g. `REACT_APP_API_URL=https://local-api.heroku.com/graphql` and `REACT_APP_FRONTEND_URL=https://vigorous-chandrasekhar-bbd3e9.netlify.com`

- After every change to the master branch in Bitbucket, Netlify will build and deploy frontend automatically!

### NOTE: if changing environment var on netlify you MUST redeploy to see changes!

## CSS naming conventions for local-frontend

- We're using the BEM standards for all new classes created.
- Please review the standards [Here](http://getbem.com/) so that we're on the same page.

## Extra commands

### yarn post-build

- Used to quickly run postcss post-build but pre-deploy or during netlify post-build via the netlify.toml file.

### yarn format

- quick command to run prettier on all files for consistency. prettier settings are set inside of package.json if you'd like to change to your own tastes.
