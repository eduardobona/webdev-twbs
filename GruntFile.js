module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            core: {
                files: {
                    'dist/all-core-js.min.js': [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/tether/dist/js/tether.js',
                        'bower_components/bootstrap/dist/js/bootstrap.js'
                    ]
                }
            }
        },
        
        cssmin : {
            target : {
                files : {
                    'dist/all-core-css.min.css' : [
                        'bower_components/bootstrap/dist/css/bootstrap.min.css',
                        'css/style.css'
                    ]
                }
            }
        },
        
        copy: {
            icons : {
                expand: true,
                cwd: 'css/icons/',
                src: '*',
                dest: 'dist/icons/'
            },
            images : {
                expand: true,
                cwd: 'css/images/',
                src: '*',
                dest: 'dist/images/'
            }
        }
    });
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    // Default task(s).
    grunt.registerTask('default', [
        'uglify', 'cssmin', 'copy'
    ]);
};