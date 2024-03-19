const {src,dest,watch,series,parallel} = require('gulp'); //{} imporata varias funciones gracias {dest destino guardar}
/**src Ruta de los que va tomar
 * dest ruta donde se van guardar 
 * watch son los cambios 
 */


//CSS y SASS
const sass = require('gulp-sass')(require('sass')); //aqui solo importa 1 funcion
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps =  require('gulp-sourcemaps');
const cssnano = require('cssnano');
//imagenes
const imagenMin = require('gulp-imagemin'); //optimizar imagenes
const webp = require('gulp-webp');//convertir imagenes webp
const avif = require('gulp-avif');


function css(done){
    //compilar sass
    //pasos 1-identificar archivos
    //      2-compilarla
    //      3-guardar el css

    src('src/scss/app.scss') //identificar hoja estilos
    .pipe(sourcemaps.init())  //ayuda depurar y entender mejor el codigo
    .pipe(sass())  //compila  hojas estilos
    .pipe (postcss([autoprefixer(),cssnano()]))   //ayuda sooporta css otros navega
    .pipe(sourcemaps.write('.'))        
    .pipe(dest('build/css')) //ruta donde se crea la carpeta

    



    done();
}
function imagenes(){
   return  src('src/img/**/*')
    .pipe(imagenMin({optimizationLevel: 3}))
    .pipe(dest('build/img'));
    
}
//Esta funcion optimiza las images webp de dos formatos
function versionWebp(){
    const opciones ={
        quality : 50
    }
    return src('src/img/**/*.{png,jpg}') //solo seleccionara png y jpg
    .pipe(webp(opciones))
    .pipe(dest('build/img')); //ruta de guardado
}

function versionAvif(){
    const opciones ={
        quality : 50
    }
    return src('src/img/**/*.{png,jpg}')
    .pipe(avif(opciones))
    .pipe(dest('build/img'));
}


//funcion de la cual las rutas escucha los cambios
function dev(){
 watch('src/scss/**/*.scss' ,css); //Lo que hace es buscar todos con la extension scss
 watch('src/img/**/*' ,imagenes);
}



/**Exportaciones */
exports.css = css;
exports.dev = dev;
/*
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif =versionAvif;*/
exports.default = series(/*imagenes,versionWebp,versionAvif,*/css,dev);

//series-  Se inicia una tarea , y hasta que finaliza , inicia la siguiente

//parallel - Todas las tareas inician al mismo tiempo