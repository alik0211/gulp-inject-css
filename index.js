const fs = require('fs');
const through = require('through2').obj;
const PluginError = require('gulp-util').PluginError;

const PLUGIN_NAME = 'gulp-inject-css';

module.exports = function() {
  'use strict';

  const PATTERN = '<\\!--\\s*inject-css\\s*(.*?)\\s*-->';

  let self = null;

  function throwError(msg) {
    self.emit('error', new PluginError(PLUGIN_NAME, msg));
  }

  function getStyle(source) {
    if (source) {
      return '<style>\n' + fs.readFileSync(source) + '\n</style>';
    } else {
      throwError('No source file specified.');
    }
  }

  function styleInject(file, enc, callback) {

    self = this;

    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    if (file.isStream()) {
      this.emit('error',
        new PluginError(PLUGIN_NAME, 'Stream content is not supported'));
      return callback();
    }

    if (file.isBuffer()) {
      let contents = String(file.contents);

      contents = contents.replace(new RegExp(PATTERN, 'gi'), function(match, src) {
        return getStyle(file.base + src);
      });

      file.contents = new Buffer(contents);
      this.push(file);
      return callback();
    }

    return callback();
  }

  return through(styleInject);
};