## Find A Doctor
#### A web app created by *_HUNTER PARKS_*

This program is designed to pull information, using the BetterDoctor API, about doctors that can most suit your needs.

![logo of BetterDoctor][logo]

A special thanks to BetterDoctor for letting me use their API. [Here is the company's website](http://betterdoctor.com/)

### Specs

| Behavior | User Input | App Output |
| -------- | ---------- | ---------- |
| Webpage will show the user the front page | User does nothing | App displays 'Enter your injury' and ' Enter your location'|
| Webpage will take the information given from the user | User enters their injury and location | App calculates which doctors are best for the user given the information |
| Webpage will display doctors that more suit the needs of the user | User enters nothing | App displays list of doctors in the area |

### Tutorial
* [Clone my Github repository](https://github.com/HunterTParks/doctor-search-api)
* In Powershell, Navigate to the cloned folder
* Run the following commands

```console
$ npm install gulp --save-dev
$ bower install jquery --save
$ bower install bootstrap --save
$ bower install moment --save
$ npm install bower-files --save-dev
$ npm install browser-sync --save-dev
$ npm install browserify --save-dev
$ npm install vinyl-source-stream --save-dev
$ npm install gulp-concat --save-dev
$ npm install gulp-uglify --save-dev
$ npm install gulp-util --save-dev
$ npm install del --save-dev
$ npm install jshint --save-dev
$ npm install gulp-jshint --save-dev
```

* Once you have all of the libraries downloaded, run the following commands

```console
$ gulp build
$ gulp serve
```

* Once the 'gulp serve' command has been completed, a webpage will open up automatically.



[logo]: https://images-na.ssl-images-amazon.com/images/I/71eJ7bU3R0L.png
