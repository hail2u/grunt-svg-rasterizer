grunt-svg-rasterizer
====================

Rasterize SVG files with [Inkscape][1] CLI.


INSTALL
-------

This Grunt plugin does not available in npm registry yet, so you must install
from my GitHub repository:

    $ npm install hail2u/grunt-svg-rasterizer

Then, load this task in `Gruntfile.js` of your project:

    loadNpmTask('grunt-svg-rasterizer');


CONFIGURE
---------

Task name is `svgRasterizer`.

    svgRasterizer: {
      main: {
        dest: 'build/img/logo.png',
        src: 'src/img/logo.svg'
      },

      appleTouchIcon: {
        // Specify output width, keep aspect ratio
        options: {
          width: 180
        },

        dest: 'build/apple-touch-icon.png',
        src: 'src/img/favicon.svg'
      },

      favicon16: {
        // Specify output width and height, may break aspect ratio
        options: {
          height: 16,
          width: 16
        },

        dest: 'build/images/favicon-16.png',
        src: 'src/img/favicon.svg'
      }
    }

Enjoy!


LICENSE
-------

MIT: http://hail2u.mit-license.org/2015


[1]: http://inkscape.org/
