module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.loadTasks('grunt/');

    var taskConfig = require('load-grunt-configs')(grunt, {
        config: {
            src: 'grunt/*.js'
        }
    });
    grunt.initConfig(grunt.util._.extend(taskConfig));

    grunt.registerTask('default', ['jscs']);
};
