'use strict';

const home = require('../app/controllers/home');
const underscore = require('underscore');
var mongoose = require('mongoose');
const Label = mongoose.model('Label');

module.exports = function (app, passport) {

  app.get('/', home.index);

  app.put('/label', (req, res) => {
      console.log("/label", req.body);
      var filenames = req.body.filenames;
      var study = req.body.study;
      var label = req.body.label;
      underscore.each(filenames, (filename) => {
          var query = { "filename": filename, "study": study };
          var doc = { "filename": filename, "study": study, "label": label };
          Label.findOneAndUpdate(query, doc, { "upsert": true }, (err, result) => {
             if (err) {
                 console.log(`Encounter an error while upserting document: ${doc}`, err);
                 return res.send(500, { error: err });
             }
          });

      });
      res.send(200, "Success!");
  });

  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
