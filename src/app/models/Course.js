const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
// const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, requires: true },
    description: { type: String, maxLength: 255 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, requires: true },
    level: { type: String, maxLength: 255 },
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
