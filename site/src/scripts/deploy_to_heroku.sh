#!/bin/bash
cd $1
if [[ "$(git remote)" != *"heroku"* ]]
then
   git remote remove heroku https://git.heroku.com/david-bramwell.git
   git remote add heroku https://git.heroku.com/david-bramwell.git
fi
git push heroku `git subtree split --prefix site/src/app master`:master --force