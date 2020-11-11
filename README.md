# gulp-inject-css

[![GitHub Actions](https://img.shields.io/github/workflow/status/alik0211/gulp-inject-css/Unit%20tests/master?style=flat-square)](https://github.com/alik0211/gulp-inject-css/actions?query=branch%3Amaster)
[![Dependency Status](https://img.shields.io/david/alik0211/gulp-inject-css.svg?label=deps&style=flat-square)](https://david-dm.org/alik0211/gulp-inject-css)
[![devDependency Status](https://img.shields.io/david/dev/alik0211/gulp-inject-css.svg?label=devDeps&style=flat-square)](https://david-dm.org/alik0211/gulp-inject-css?type=dev)

Inject css file to html

## Install

```shell
npm install gulp-inject-css --save-dev
```

## Usage

```javascript
const gulp = require('gulp');
const injectCSS = require('gulp-inject-css');

gulp.task('inject-css', function() {
  gulp.src('src/*.html')
    .pipe(injectCSS())
    .pipe(gulp.dest('dist'));
});
```

In the html file, specify the **relative** path to css

```html
<html>
  ...
  <!-- inject-css css/main.css -->
  ...
</html>
```
