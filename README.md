# wordkat

[![Code Climate](https://codeclimate.com/github/kat4/wordkat/badges/gpa.svg)](https://codeclimate.com/github/kat4/wordkat)
[![Test Coverage](https://codeclimate.com/github/kat4/wordkat/badges/coverage.svg)](https://codeclimate.com/github/kat4/wordkat/coverage)

Auto-complete and dictionary app from team kat4!

[Go to the app](https://wordkat.herokuapp.com/) and type a word into the text field. The app is going to give you a list of words after three letters. Use up and down keys to navigate. Scroll down to see the definition.

### Run locally
1. Make sure you have Node.js installed.
2. Clone repo from [git@github.com:kat4/wordkat.git](git@github.com:kat4/wordkat.git)
3. Run `npm install` to install the dependencies
4. Start the server with `node server.js` or `nodemon server.js` if you have nodemon installed
5. Access site on `localhost:8000`

### Set-up (day 1)

- [X] Set up repo
- [X] Set up Code Climate
- [X] Set up Travis
- [X] Set up pre-commit hooks
- [X] Install tape and shot
- [X] Install nodemon
- [X] Istanbul
- [X] Write initial tests (hello wordkat)
- [X] Set up a server which passes that test
- [X] Deploy to Heroku
- [X] Set up a front end test endpoint

### Build app (day 2)

##### Pair A

- [X] Gets stuck into worknik API
- [X] Test getting response from wordnik


##### Pair 1

- [X] Gets stuck into the http requests between front and back end
- [X] Test getting response from server
- [X] Work on autocomplete

### And theeeen

- [X] Put badges up on github
- [X] Make site look minimal

"devDependencies": {
  "codeclimate-test-reporter": "^0.1.1",
  "istanbul": "^0.3.21",
  "nodemon": "^1.7.1",
  "shot": "^1.6.1",
  "tape": "^4.2.0"
},
"dependencies": {
  "request": "^2.64.0"
}

###Dependencies  

- Request module

###devDependencies

- codeclimate-test-reporter
- istanbul
- nodemon
- shot
- tape
