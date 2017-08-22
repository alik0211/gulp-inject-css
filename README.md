# gulp-inject-css

Inject css file to html

## Install

```shell
npm install gulp-inject-css --save-dev
```

## Example

app/css/main.css
```css
* { box-sizing: border-box; }
```

app/index.html
```html
<!-- inject-css css/main.css -->
```

gulpfile.js
```javascript
const gulp = require('gulp');
const injectCSS = require('gulp-inject-css');

gulp.task('build', function() {
  gulp.src('app/*.html')
    .pipe(injectCSS())
    .pipe(gulp.dest('build'));
});
```

Result(build/index.html):
```html
<style>
* { box-sizing: border-box; }
</style>
```