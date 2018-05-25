# Petful Backend Made With Thinkful Backend Template

A Node.js server made for our Petful app to handle get and delete requests for both cats and dogs.

##Deployed Version: 
[Petful Full App Deployed](http://dazzling-kirch-250b9b.netlify.com/)
[Petful Backend Deployed](https://petful-megan-ray.herokuapp.com/)
(please note: for backend deployed version add /cat or /dog at the end of the url to see data)


##FrontEnd:
[Petful Frontend](https://github.com/thinkful-ei19/Megan-Ray-Petful-Client)


## Getting started (Development Mode)
    -npm install
    -nodemon index.js
        --Please note you should have the following in package.json:

                "scripts": {
                    "start": "nodemon index.js",
                    "mocha": "mocha --exit --file test/setup.test.js '!(node_modules)/**/*test.js'",
                    "mocha-exit0": "mocha --exit --file test/setup.test.js '!(node_modules)/**/*test.js' || true",
                    "test": "nodemon --exec npm run mocha-exit0",
                    "cover": "nodemon --exec nyc --reporter=lcov --reporter=text-summary npm run mocha-exit0",
                    "heroku": "node index.js",
                    "travis": "npm run mocha"
                },
                "author": "Joe Turner <jturner@thinkful.com>",
                "license": "MIT",
                "dependencies": {
                    "cors": "^2.8.4",
                    "express": "^4.16.3",
                    "knex": "^0.14.4",
                    "mongoose": "^5.0.6",
                    "morgan": "^1.9.0",
                    "pg": "^7.4.1"
                },
                "devDependencies": {
                    "chai": "^4.1.2",
                    "chai-http": "^4.0.0",
                    "mocha": "^5.0.4",
                    "nyc": "^11.6.0"
                }
    
##Locations:
    API routes:
    -Cat Get and Delete endpoints are handles in routes/catRouter.js
    -Dog Get and Delete endpoints are handles in routes/dogRouter.js

    Data Logic:
    -Both Cat and Dog array/queue logic is handled in queue/cats-queue and queue/dogs-queue respectively
    -Queue class can be found in queue/queue-class.js

    Dummy Data:
    -Found in db/cats.json for cats and db/dogs.json for dogs

    Middlewear:
    -index.js