const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
// const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    ma: { type: String, requires: true },
    ten: { type: String, maxLength: 255 },
    hinh: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name" },
  },
  {
    timestamps: true,
  }
);

// Add plugins
mongoose.plugin(slug);
// Course.plugin(mongooseDelete);
module.exports = mongoose.model("Course", Course);
