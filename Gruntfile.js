module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
          build: {
            src: 'ToastyAlert.js',
            dest: 'ToastyAlert.min.js'
          }
        },
        cssmin: {
          target: {
            files: {
              'toasty-alert.min.css': ['toasty-alert.css']
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    grunt.registerTask("default", ["uglify", "cssmin"]);
};
