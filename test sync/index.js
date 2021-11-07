const fs = require('fs')

// File rename 1 => 2
/*fs.rename('after.js', 'after2.js', err => {
    if (err) {
      return console.error(err)
    }
  
    //done
})
// Writing in the File

fs.writeFile('after.js', 'console.log("hi")', err => {
    if (err) {
        return console.error(err)
    }
})


// File Reading
fs.readFile('after2.js', err => {
    if (err) {
        return console.error(err)
    }
})*/

// Copy a File 
fs.copyFile('index.js','index2.js', err => {
    if (err) {
        return console.error(err)
    }
})

// Create a new Folder
fs.mkdir('assets', err => {
    if (err) {
        return console.error(err)
    }
})

fs.mkdir('img', err => {
    if (err) {
        return console.error(err)
    }
})

// remove a Folder 

fs.rmdir('img', err => {
    if (err) {
        return console.log(err)
    }
        
    
})

fs.symlink('index2.js', err => {
    if (err) {
        return console.error(err)
    }
})