# This is a search App that fetches the remote Flickr API to retrieve photos. Have Fun!

It is a Mobile First, responsive app that searches for terms in the freely available
Flickr api. The app has 3 radio buttons that are active for the bigger screen devices
which is hidden on smaller devices allowing all the photos that come from Flickr to be
displayed in an infinite scroll.
This project has been built using React, Redux, JQuery (for the API calls), Webpack, Jest and Enzyme.



This repo has 2 main sections:
1. **build** all the production ready files.
2. **src** all the development files, divided in compartments to easily identify React from Redux functionalities.

## Unit tests.
The repo also contains some very basic unit tests performed using Jest and Enzyme.


## Run the code
The repo does not contain the node_modules folder, so it is necessary to
1. Run `npm install` to reinstall all the packages.

2. Run `npm start` afterwards to start the server and run the project locally in your machine.

3. Run `npm test` to run all the basic unit tests.

4. Run `npm run build` to create all the production ready files that will be
placed in the build folder.
