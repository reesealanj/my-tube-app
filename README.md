# MyTube App

This is a personal project of mine to see how much of the youtube interface I can build out on my own with sparing use of tutorials as needed.

## Author

- [Reese Jones](https://github.com/reesealanj)

## Requirements

1. Firebase account configured with Firebase Authentication, Firebase Functions, FireStore Database, and Realtime Database

## Installation

1. Clone the repo
2. `cd` into the `my-tube-app` directory
3. Ensure you make a copy of the `/config/env.local` and input all your proper keys
4. Run `npm install` to install all required packages and dependencies
5. Run `npm run dev` to start the dev server for the Next.js application

## Contribution

If you found a problem or want to submit an improvement to the project, use the Github Issues tab to create an Issue with a description of what you think needs to be changed/added. If you'd like to submit a PR with an update/fix, reference the issue number you created. Also please make sure to squash all your commits into one when you make your PR into the repository.

### Github Branching Strategy

- `main` - main branch, this is what will be deployed to DigitalOcean/whatever service it runs on
- `develop` - this is the "working branch" that is being used to develop while keeping production releases clean

## Project Progression Idea

1. Start with just UI working off of stored data (data in config files, thumbnails and videos in the `/public` folder)
2. Then progress the UI for the thumbnails and video to come from Firestore (video metadata still hardcoded)
3. Then add authentication to allow for individual channels, uploads, and subscriptions
4. Now with proper security, add the ability to upload and view other uploads (homepage selections still hardcoded)
5. Then add the notion of "trending," but managed by me directly in firestore (a list of top video id's)
6. Then work with interactive metrics (video views, comments, likes, dislikes)
7. Then tackle fun stretch features or new stuff that comes up (potentially stuff below)

## Project Goals/Wishlist

(feel free to make a PR to add to this list)
