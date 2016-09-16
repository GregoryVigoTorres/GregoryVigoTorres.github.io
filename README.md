Just serve the static site with js using Flask for heroku.

THIS HAS TO BE PYTHON 2.7

Build assets directly with sass in dev environment, keep css under version control.

There's no database or anything. so it should be trivial


https://tranquil-reef-63239.herokuapp.com/

push heroku.dev to remote master

# make sure an instance is running
heroku ps:scale web=1

# get url/domain for app
heroku domains (-r heroku)

add my custom domain
ping the app to keep it alive during US and Western Europe working hours
