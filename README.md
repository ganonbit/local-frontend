# Avocado Nation Frontend 🥑

## Local development
clone repo to your desktop via `git clone git@bitbucket.org:270b/avonation-frontend.git`

run `yarn` to populate `node_modules` folder and to create your `yarn.lock` file needed

to start the server locally you'll either need to request the `.env` file from me, or have it connect to the staging environment vis your own `.env` file. that allows us to safely use environment variables with passwords/credentials without fear of it getting exposed to clients/hackers as it is only used locally and not pushed to git.

once that is setup run the command `npm start` to start the front end. *note: if wanting to run the whole application locally, the api: `https://bitbucket.org/270b/avonation-api/` needs to be up and running first via it's README. 

After running the server, you can navigate to `http://localhost:3000`

## Frontend deployment to Netlify

- Push repository on Bitbucket.
- Create new site on [Netlify](https://www.netlify.com/) and connect that repository to it.
- You don't need to add build options in Netlify's UI as it is already configured in `netlify.toml` file in the root of repository.
- Add environment variables to Netlify based on `frontend/.env` file, make sure to replace API and Frontend URLs, e.g. `REACT_APP_API_URL=https://avonation-api.heroku.com/graphql` and `REACT_APP_FRONTEND_URL=https://avonation-frontend.netlify.com`
- After every change to the master branch in Bitbucket, Netlify will build and deploy frontend automatically!
