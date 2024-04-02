#!/bin/bash

fnm use 20

cd ./library2 && npm i && ng build
cd ../principal_project2 && npm i && ng serve --port 4200