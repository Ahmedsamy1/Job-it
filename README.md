# Job-it
This is a web application to search different job openings from different websites.

Dependencies: to install all depenndecies run npm install once in frontend end and once in backend

to run frontend : ng serve

to run back end:
 1- create config.js file in config folder in backendend
 
 default is this example:
 
 const env = process.env.NODE_ENV || 'dev'; // 'dev' or 'test'

const dev = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || 3000
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT) || 27017,
        name: process.env.DEV_DB_NAME || 'jobit'
    }
};
const test = {
    app: {
        port: parseInt(process.env.TEST_APP_PORT) || 3000
    },
    db: {
        host: process.env.TEST_DB_HOST || 'localhost',
        port: parseInt(process.env.TEST_DB_PORT) || 27017,
        name: process.env.TEST_DB_NAME || 'test'
    }
};

const config = {
    dev,
    test
};

module.exports = config[env];

2- download dependencies and click npm start
