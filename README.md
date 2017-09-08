# Webshot v1.0

> Consistant screenshots from the command line

## Requirements

* [Node](https://nodejs.org/) 
* [npm](https://www.npmjs.com/) 

## Installation

1. Clone the repository and install dependencies

```
$ git clone https://github.com/jjgrainger/webshot.git
$ npm install
```

## Usage

To take a screenshot of a website (google.com), `cd` into the webshot folder and run the following command in the terminal.

```
$ node webshot.js https://google.com
```

This will take a screenshot and save it to `/shots` directory using the domain name as a filename.

## Options

Additional options can be passed as flags. So to set a delay of 5 seconds, you can run the following command in the terminal.

```
$ node webshot.js https://google.com --delay=5000
```

Below are the available options

* `--delay` - set a delay before taking the screenshot in milliseconds, default: `0`
* `--zoom` - set the page zoom in percent, default: `90`
* `--width` - set the width of the viewport in pixels, default: `1200`
* `--height` - set the height of the viewport in pixels, default: `800`

## Notes

* Uses Google Chromes [Puppeteer](https://github.com/GoogleChrome/puppeteer)
* Licensed under the [MIT License](https://github.com/jjgrainger/webshots/blob/master/LICENSE)
* Maintained under the [Semantic Versioning Guide](http://semver.org)

## Authors

**Joe Grainger**

* [https://jjgrainger.co.uk](http://jjgrainger.co.uk)
* [https://twitter.com/jjgrainger](http://twitter.com/jjgrainger)
