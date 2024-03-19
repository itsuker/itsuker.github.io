## Paquetes de contruccion pasos
1- crear jason ```npm init```
2- segundo crear los modulos node o reconstruie los archivos```npm i```
3- EL tercero es para instalar gulp ```npm i --save-dev gulp  ```
4- crear un archivo como con el nombre ```gulpfile.js```
5- Instalar sass ```npm i --save-dev sass gulp-sass```
6- Paquetes para compatibilidad css en los navegadores 
``` npm i --save-dev autoprefixer gulp-postcss ```
7- Paquete para las imagenes ```npm install --save-dev gulp-imagemin@7.1.0  ``` @le dice la version a instalar la guarda dependencia desarrollo
8-Paquete para  las images webp ```npm install --save-dev gulp-webp@4.0.1 ``` @le dice la version a instalar la guarda dependencia desarrollo 

9- Paquete sourcemap ``npm i --save-dev gulp-sourcemaps`` optimiza el codigo para que sea mas legible y facil de entender

10 paqueta para comprimir codigo css en nano ```npm i --save-dev cssnano```



## Estrutura de las carpetas
1- Crear dos carpetas carpeta ```SRC/``` Y ```SRC/SCSS``` Y ```app.scss ```
2- Crear la carpeta img ```src/img  ```

## package.json 
soporte para los otros navegadores en package.json
"browserslist" : [
   "last 1 version",
   "> 1%"
  ]