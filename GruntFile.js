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

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'public/dist/css',
                    ext: '.css'
                }]
            }
        },
        
        cssmin : {
            target : {
                files : {
                    'public/dist/css/all.min.css' : [
                        'public/dist/css/bootstrap.css',
                        'public/dist/css/project.css'
                    ]
                }
            }
        },

        /*
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
        */

        csslint: {
            strict: {
                src: [
                    'public/dist/css/all.css'
                ]
            }
        },

        clean: [
            "public/dist/*"
        ]
    });
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    
    // Default task(s).
    grunt.registerTask('default', [
        'clean', 'uglify', 'sass', 'cssmin', 'csslint'
    ]);
};