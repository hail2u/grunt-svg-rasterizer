'use strict';

module.exports = function (grunt) {
  var pkg = require('../package.json');
  var taskName = pkg.name.toLowerCase().replace(
    /^@.*?\//,
    ''
  ).replace(
    /^grunt-/,
    ''
  ).replace(
    /-(.)/g,
    function (m, l) {
      return l.toUpperCase();
    }
  );
  var taskDescription = pkg.description;

  grunt.registerMultiTask(taskName, taskDescription, function () {
    var spawn = require('child_process').spawnSync;
    var which = require('which').sync;

    var options = this.options({});
    var args = [];
    var cmd = 'inkscape';

    if (options.height) {
      args.push('-h');
      args.push(options.height);
    }

    if (options.width) {
      args.push('-w');
      args.push(options.width);
    }

    this.files.forEach(function (file) {
      var a = args.slice(0);
      a.push('-f');
      a.push(file.src[0]);
      a.push('-e');
      a.push(file.dest);
      var child = spawn(which(cmd), a, {
        stdio: 'inherit'
      });

      if (child.error) {
        grunt.fail.warn(child.error);
      }
    });
  });
};
