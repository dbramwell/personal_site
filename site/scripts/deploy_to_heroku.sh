#!/bin/sh
cd ../app
test "$(ls | grep .git)" == "" && git init
test "$(ls | grep .git)" == "" && git remote add heroku https://git.heroku.com/david-bramwell.git
ls | grep -v node_modules | xargs git add
git commit -m "Adding app"
git push origin heroku