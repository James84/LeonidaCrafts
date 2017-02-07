var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('nodemon')

gulp.task('default', function(){

});

// start node server
gulp.task("start", ['watch'], function(){
  var stream = nodemon({
      script: 'app.js',      
  }); 
    
  stream.on('restart', function(){
    console.log('restart'); 
  })      
  .on('crash', function() {
    console.error('Application has crashed!\n')
      stream.emit('restart', 10)  // restart the server in 10 seconds 
  });
});

gulp.task('watch', function(){
    //watch for changes in sass files and recompile
    return gulp.watch('public/sass/**/*.scss', ['sass']);
});

gulp.task('sass', function(){
    gulp.src('public/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('public/css/'));   
});
