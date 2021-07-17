const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');

// Load plugins


const cssnano = require('gulp-cssnano');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');


function clear() {
  // очищает папку build
  return src('./build/*', {
    read: false
})
    .pipe(clean());
}

// CSS 

function css() {
  // получаем css файл
  const source = './src/css/*';

  return src(source)
    // смотрит за его изменениями
    // если изменяется, то прогоняет его через пакет cssnano(минимизирует cssфайл)
    .pipe(changed(source))
    .pipe(cssnano())
    .pipe(dest('./build/css/'))
    .pipe(browsersync.stream());
}
// JS 
function js() {
  const source = './src/js/*';

  return src(source)
      .pipe(changed(source))
      .pipe(dest('./build/js/'))
      .pipe(browsersync.stream());
}
// Optimize images

function img() {
  // отслеживаем все что находится в папке images
  // imagemin - специальный пакет для gulp который оптимизирует файлы в папке images (сжатие)
  // и копирует в папку build в папку images
  return src('./src/images/*')
  .pipe(imagemin())
  .pipe(dest('./build/images'));
}

// html

function html() {
  // получаем из папки src все html файлы
  // копируем в папку build
  // перезагружаем браузер
  return src('./src/*.html')
  .pipe(dest('./build/'))
  .pipe(browsersync.stream());
}


// Watch files

function watchFiles() {
  watch('./src/css/*', css);
  watch('./src/js/*', js);
  watch('./src/*.html', html);
  watch('./src/images/*', img);
}

// BrowserSync

function browserSync() {
  browsersync.init({
      server: {
          baseDir: './build'
      },
      port: 3000
  });
}

exports.watch = parallel(watchFiles, browserSync);

// очищает папку build и запускает файлы html, css, img
exports.default = series(clear, parallel(html, js, css, img));