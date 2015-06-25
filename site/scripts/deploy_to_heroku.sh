#!/bin/sh
git remote add heroku https://git.heroku.com/david-bramwell.git
git subtree push --prefix site/app heroku master