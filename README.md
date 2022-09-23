# Certsy coding test
## Set up

To run the app, you need docker. You can run ;the below in the root folder to build a container with the compiled code inside.
```
docker build . --tag coding-test
```

Once this is built, you can run it using 
```
docker run -it coding-test
```

This is bring the container and app up on your local machine. You should see `Waiting for a command:` print in your terminal and can use the test commands to control the app. Use CTRL+C to exit.

## Local development and running the tests

To set up for local dev, install nodejs (this app was tested on version 16.17.0) and then enter the root directory.
```
npm install
```
to install dependencies

To run the app using your local version of node, use
```
npm start
```

To run the tests, use
```
npm test
```

To run a build, use
```
npm run build
```


