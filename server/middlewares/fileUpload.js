const multer = require('multer');
const fs = require('fs');
const uploadFolder = require('../helpers/configs').uploadFolder

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${uploadFolder}${req.session.passport.user.userid}/`);
  },
  filename: function (req, file, cb) {
    // console.log(file);
    cb(null, `${Date.now()}-${file.originalname}`);
  }
})
const upload = multer({ storage: storage }).single('image');

function fileUpload(req, res, next) {
  const path = `${uploadFolder}${req.session.passport.user.userid}`;
  // console.log('path: ' + path)
  // console.log('fileupload body: ' + req.body);
  fs.exists(path, (exist) => {
    if (exist) {
      upload(req, res, (err) => {
        if (err) {
          console.log('upload err: ' + err);
          res.status(500).send({ status: 500, body: err.message || 'Try again' });
        } else 
          next();        
      })
    } else {
      fs.mkdir(path, (err) => {
        if (err) {
          console.log('mkdir err: ' + err);
          res.status(500).send({ status: 500, body: err.message || 'Try again' });
        } else {
          upload(req, res, (err) => {
            if (err) {
              console.log('upload err: ' + err);
              res.status(500).send({ status: 500, body: err.message || 'Try again' });
            } else 
              next();
          });
        }
      });
    }
  });
}

module.exports =  fileUpload
