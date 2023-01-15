// import
import {promises as fspromises} from 'fs'
import fs from 'fs'
import path from 'path'
import ejs from 'ejs'


let my_db_compiled = {
  website_title: 'spooders',
}

let files = fs.readdirSync('./')
files.forEach(file => {
  if(path.extname(file) !== '.page') return

  build_file(file)

  fs.watchFile(file, {interval: 100}, (curr, prev) => {build_file(file) })
})


function build_file(file) {
  let filecontent = fs.readFileSync(file, 'utf8')

  let htmlfile = file.replace('.page', '.html')
  let htmlcontent = getview(filecontent, my_db_compiled)

  fs.writeFileSync(htmlfile, htmlcontent)
  console.log('writing file:', htmlfile)
}









function getview(src, data={}) {
  let str = ejs.render(src, data, {root: process.cwd()})
  var compiled_code = str + `\n<!-- generated on ${new Date().toGMTString()} -->`
  return compiled_code
}

