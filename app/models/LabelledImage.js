
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * LabelledImage schema
 */

var LabelledImageSchema = new Schema({
  filename: { type: String, default: '' },
  label: { type: String, default: '' }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

LabelledImageSchema.method({

});

/**
 * Statics
 */

LabelledImageSchema.static({

});

/**
 * Register
 */

mongoose.model('LabelledImage', LabelledImageSchema);
