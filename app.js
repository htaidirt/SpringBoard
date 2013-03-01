var fs = require('fs')
,   chokidar = require('chokidar')
,   marked = require('marked')

/*
 * 'marked' settings.
 */
marked.setOptions({
    gfm: true
})

/*
 * Getting all the articles.
 */
fs.readdir('articles/', function(err, files){
    if(err) throw err
    console.log('Files on "article/" folder > ' + files)

    /*
     * Get only .md files.
     * Iterate throw all files and push only .md files to another array.
     */
    var mdFiles = []
    files.map(function(file){ if(/\.md$/.test(file)) mdFiles.push(file) })
    console.log('.md files that are considered > ' + mdFiles)

    /*
     * For each file (article), perform changes tracking.
     */
    mdFiles.forEach(function(file){

        watcher = chokidar.watch('articles/' + file, { ignored: /^\./, persistent: true })

        /*
         * Watch on the change event.
         */
        watcher.on('change', function(path){
            
            /*
             * Get file content.
             */
            fs.readFile(path, 'utf8', function(err, content){
                if(err) throw err
                console.log('New text >> ' + content)
                console.log(marked(content))
            })
            console.log('File ' + path + ' changed.')
        
        })
        console.log('Watching changes on ' + file)

    })
})
