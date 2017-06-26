const UglifyJS = require('uglify-js');
const fs = require('fs');
const { resolve } = require('path');

const getFileContent = (relativePath) => {
  const codePath = resolve(process.cwd(), relativePath);
  const code = fs.readFileSync(codePath, "utf8");
  let minifiedCode = UglifyJS.minify(code, {
    output: {comments: false}
  }).code;
  minifiedCode = minifiedCode.replace(/`/g, "");
  const readyForFile = `export default '${minifiedCode}'`;
  return readyForFile;
}

const writeFileContent = (relativePath, content) => {
  const filePath = resolve(process.cwd(), relativePath);
  try {
    fs.writeFileSync(relativePath, content);
    console.log('DONE!');
  } catch (e) {
    console.error('ERROR', e);
  }

}

writeFileContent('./src/test.js', getFileContent('./node_modules/aframe/build/aframe.js'));
