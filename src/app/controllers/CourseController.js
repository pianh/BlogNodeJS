const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");

class CourseController {
  // [GET] /course/:slug
  show(req, res, next) {
    // res.send('COURSE DETAIL - ' + req.params.slug);
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        // res.json(course);
        res.render("courses/show", { course: mongooseToObject(course) })
      )
      .catch(next);
  }

  // [GET] /course/create
  create(req, res, next) {
    res.render("courses/create");
  }
  // [POST] /course/store
  store(req, res, next) {
    //  res.json(req.body);
    const formData = req.body;
    // formData.image = `https://files.fullstack.edu.vn/f8-prod/${req.body.videoId}/7.png`
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    // req.body.image = `https://files.fullstack.edu.vn/f8-prod/courses/7.png`
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
    // res.send('COURSE SAVE');
  }

  // [GET] /course/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", {
          course: mongooseToObject(course),
        })
      )
      .catch(next);
  }

  // [PUT] /course/:id
  update(req, res, next) {
    // res.json(req.body);
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE] /course/:id
  destroy(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

//18p30s
module.exports = new CourseController();
