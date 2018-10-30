# Hike Journal

Create journal entries and rate gear while on the trail

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Install and open [Xcode](https://developer.apple.com/xcode/)

Open up a terminal and run the following commands:

```
$ git clone https://github.com/1337jwilliams95/hikeJournal.git
$ cd hikeJournal
$ git checkout -b new-branch
$ npm install
```

Create a `constants.js` file in `hikeJournal/src/components/` and copy/paste the following in:

```
module.exports = {
  FACEBOOK_APP_ID: '1',
  GOOGLE_ANDROID_CLIENT_ID: '2',
  GOOGLE_IOS_CLIENT_ID: '3',
  GOOGLE_WEB_CLIENT_ID: '4',
};

```

Next, start the application: 

```
$ npm run start
```

This should open a new tab in a browser and in the terminal show a QR code to test on a phone or press `i` to open up an iOS simulator on one's computer. Run any terminal commands the app asks you to.


Create a login and proceed to the app

#### iOS Simulator

The simulator will open up and the [Expo](https://expo.io) app should be installed. Open the Expo app, sign up, and login. Upon login, the hike journal app should show.

## Built With

* [react-community/create-react-native-app](https://github.com/react-community/create-react-native-app) - The easiest way to start a React-Native app

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/1337jwilliams95/hikeJournal/tags). 

## Authors

* **John Williams** - *Initial work* - [1337jwilliams95](https://github.com/1337jwilliams95)

See also the list of [contributors](https://github.com/1337jwilliams95/hikeJournal/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Nature