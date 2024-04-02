@echo off

rem Instala dependencias y construye en library2
cd library2
npm install
ng build
cd ..

rem Instala dependencias y ejecuta en principal_project2
cd principal_project2
npm install
ng serve --port 4200
