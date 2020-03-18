const fs = require('fs');

class DirectoryManagement {

    constructor(){}

    readDirectory(directoryPath, subFolderDirectory) {
        let files = fs.readdirSync(directoryPath+subFolderDirectory);
        return files;
    }

    generateJSONIntoDirectory(directoryPath, subFolderDirectory, jsonToExport, fileTitle) {
        fs.writeFileSync(directoryPath+subFolderDirectory + '/' + fileTitle+'.json', jsonToExport, 'utf8')
    }

    deleteJSONFromDirectory(directoryPath, subFolderDirectory, fileTitle) {
        fs.unlink(directoryPath+subFolderDirectory+fileTitle+'.json', (error) => {
        });
    }
}

module.exports = DirectoryManagement;