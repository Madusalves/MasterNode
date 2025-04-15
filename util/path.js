const path = require('path');
//Father of the path module
// path.dirname() gives the directory name of the path  
// path.join() joins all given path segments together
// __dirname gives the directory name of the current module
// process.mainModule.filename gives the path of the main module

module.exports = path.dirname(process.mainModule.filename);