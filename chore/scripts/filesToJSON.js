let JSONScanner = require('../classes/JSONScanner.class');
let DirectoryManagement = require('../classes/DirectoryManagement.class');

const filter = '.projects.wait4eatAdmin.architect.build.options.assets[1]';
const jsonFilePath = 'angular.json';
const subDirectory = '/carousel/';

let jsonScanner = new JSONScanner();
let directoryManagement = new DirectoryManagement();

jsonScanner.getAssetsPath(filter, jsonFilePath, '')
.then( directoryPath => {
    directoryManagement.deleteJSONFromDirectory(directoryPath, '', 'images');

    let files = directoryManagement.readDirectory(directoryPath, '/img/carousel');

    console.log(files);

    let filesString = '[';
    files.map( (file) => filesString += '"' + file + '"' + ',');
    filesString = filesString.substr(0, filesString.length - 1)
    filesString += ']';
    let jsonData = `{"images":${filesString}}`;

    directoryManagement.generateJSONIntoDirectory(directoryPath, '', jsonData, 'carouselImages');
});