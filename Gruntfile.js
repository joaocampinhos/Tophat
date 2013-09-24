module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    banner: "/**\n" +
            " *  _______                 _               _\n" +
            " * |__   __|               | |             | |\n" +
            " *    | |    ___    _ __   | |__     __ _  | |_        ___   ___   ___\n" +
            " *    | |   / _ \\  | '_ \\  | '_ \\   / _` | | __|      / __| / __| / __|\n" +
            " *    | |  | (_) | | |_) | | | | | | (_| | | |_   _  | (__  \\__ \\ \\__ \\\n" +
            " *    |_|   \\___/  | .__/  |_| |_|  \\__,_|  \\__| (_)  \\___| |___/ |___/\n" +
            " *                 | |\n" +
            " *                 |_|\n *\n" +
            " * URL:        <%= pkg.homepage %>\n" +
            " * Version:    <%= pkg.version %> (<%= grunt.template.today('mmmm yyyy') %>)\n" +
            " * Author:     <%= pkg.author %>\n" +
            " * Source:     https://github.com/joaocampinhos/Tophat\n" +
            " * License:    <%= pkg.license %>\n *\n"+
            " */\n",
    bannercomp : "/* Tophat.css <%= pkg.version %> by <%= pkg.author %> and licensed under <%= pkg.license %> */",
    sass: {
      dist: {
        options: {
          style: 'expanded',
          banner: "@charset \"UTF-8\";\n<%= banner %>"
        },
        files: {
          'compiled/tophat.css': 'tophat.scss',
        }
      },
      compressed : {
        options: {
          style: "compressed",
          banner: "@charset \"UTF-8\";\n<%= bannercomp %>"
        },
        files: {
          "compiled/tophat.min.css": "tophat.scss"
        }
      }
    },
    watch: {
      scripts: {
        files: '**/*.sass',
        tasks: ['stylus']
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("prod", ["sass:compressed"]);
  grunt.registerTask("dev", ["sass"]);
  grunt.registerTask("default", "dev");
};
