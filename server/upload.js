const IncomingForm = require('formidable').IncomingForm
module.exports = function upload(req, res) {
  let form = new IncomingForm()
  form.on('file', (field, file) => {
    console.log('req', req)
    console.log('res', res)
    console.log('file.path', file.path)
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
  })
  form.on('end', () => {
    res.json()
  })
  form.parse(req)
}
