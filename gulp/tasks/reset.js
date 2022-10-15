import del from "del";
export const cleaner = () => {
	return del(app.path.clean);
}

// var gulp = require('gulp');
// var clean = require('gulp-clean');

// gulp.task('default', function () {
//     return gulp.src('app/tmp', {read: false})
//         .pipe(clean());
// });