import gulp from "gulp";
import {
	path
} from "./gulp/config/path.js";
import {
	cleaner
} from "./gulp/tasks/reset.js";
// передаем значения в глобальную переменную

global.app = {
	gulp: gulp,
	path: path
}

import {
	copy
} from "./gulp/tasks/copy.js";

function watcher() {
	gulp.watch(path.watch.files, gulp.series(cleaner, copy))
}


const dev = gulp.series(cleaner, copy, watcher);



gulp.task('default', dev);
// exports.copy = copy;