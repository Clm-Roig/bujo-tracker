# Bujo Tracker

This application is inspired by the [Bullet Journal's trackers tool](https://diaryofajournalplanner.com/bullet-journal-habit-tracker/). It aims to track your habits like sports, food, hygiene, self-care, expenses... Even if it works on desktop, it is designed for mobile devices.

## Table of Contents

- [Main features](#main-features)
- [Development](#development)
- [About](#about)

## Main features

📄 Create tracker with a name, begin date, duration and add as much as objectives as you want

✅ Validate a tracker today or in the past

🚀 Client-only application, no internet connection needed (data is stored in locale storage)

👻 Hide a tracker for one day if you are sure you will not validate it or if you want to focus your attention on the other ones

📊 View statistics about your trackers by weeks, month or year

## Development

### Pre-requisites

- nvm aka [Node Version Manager](https://github.com/nvm-sh/nvm) (or Node.js v16+)

### Main development scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template. You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

- `npm install`
- `npm start`
- `npm test`

### Release

`npm run release` (on develop branch, then PR to main branch)

This project use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) and [standard-version package](https://github.com/conventional-changelog/standard-version).

The application is deployed on the Github repository page [here](https://clm-roig.github.io/bujo-tracker/).

## About

### Why this project? Why I built it this way?

I wanted to build an application with a modern React stack and CI tools I (Typescript, Github Actions, standard-version, Prettier + ESLint). I like stats and I like to organize my life around 2 electronic productivity tools: todo lists and calendars. I thaught Bullet Journal trackers was a good idea to complement them 🙂

### How I work on this project?

I wanted to focus on Github tools in order to have everything I need in one place:

- I write notes in a Kanban table ([Project tab](https://github.com/Clm-Roig/bujo-tracker/projects?type=beta))
- I create an issue related to the note with details and labels ([Issue tab](https://github.com/Clm-Roig/bujo-tracker/issues))
- I work on a branch and I open a Pull Request when it's done ([PR tab](https://github.com/Clm-Roig/bujo-tracker/pulls))
- On the PR, the test, linting and code security scripts are run ([Actions tab](https://github.com/Clm-Roig/bujo-tracker/actions))
- I merge the PR after rereading my code.
- Eventually, I create a new version of the application (see [CHANGELOG.md](https://github.com/Clm-Roig/bujo-tracker/blob/develop/CHANGELOG.md))

### If I had more time, I would change...

More on this later because I have time currently and I'm working on it 😛
