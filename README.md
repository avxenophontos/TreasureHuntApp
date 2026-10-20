# TreasureHuntApp

Okay listen up. This is the tutorial on how to use the repo.
First up make sure to never push to main. EVER.
No joke. 

I don't want to stay up at night working on this.

SO the steps are as follows:


Open Webstorm: Clone the repository
You will start off in the main branch.

>git checkout main

>git pull

Then you will create a separate branch for each feature you work on.

> git checkout -b feature/FEATURE_NAME

The -b creates a new branch and feature is the folder with all the features.
WHEN YOU ARE DONE AND WANT TO PUSH:
You will need a github token

First up in the console you will write: 

> git config --global credential.helper store

This will let you store the token so you don't need to re-enter it every time

Next go to github and then to your Profile settings (The Icon in the top right)

-Settings
-Developer Settings
-Personal Access Tokens
-Tokens (Classic)
-Generate new token
-Generate new token (Classic)
-For the note write the date of the token creation
-Set Expiration Date for 90 days
-Tick repo
-Generate Token
-Do not click anything else and go back to Webstorm
-Type in console 

>git push -u origin feature/FEATURE_NAME

IF IT REQUIRES IT put in your GitHub username and the copy the token code from before

That's it. I will deal the rest of the things.

Every time you open the file to work on things, first enter

>git checkout main
>git pull
>git checkout feature/FEATURE_NAME

