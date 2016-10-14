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
                    dest: 'css',
                    ext: '.css'
                }]
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
        },

        csslint: {
            options: {
                ids: false
            },
            strict: {
                src: ['css/*.css']
            }
        },

        clean: [
            "dist/*"
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
        'clean', 'uglify', 'sass', 'cssmin', 'copy', 'csslint'
    ]);
};