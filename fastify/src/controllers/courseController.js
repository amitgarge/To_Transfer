const Course = require('../models/Course');

exports.getCourse = async (req, reply) => {
    try {
        const courses = await Course.find()
        return courses;
    } catch (error) {
        throw error;
    }
}

exports.getSingleCourseInfo = async (req, reply) => {
    try {
        const courseId = req.params.id
        const course = await Course.findById(courseId)
        return course
    } catch (error) {
        throw error;
    }
}

exports.addNewCourse = async (req, reply) => {
    try {
        const course = new Course(req.body)
        return course.save()

    } catch (error) {
        throw error;
    }
}

exports.updateCourse = async (req, reply) => {
    try {
        const courseId = req.params.id
        const course = req.body
        const { ...updatedCourse } = course

        const update = await Course.findByIdAndUpdate(courseId, updatedCourse, { new: true })
        return update

    } catch (error) {
        throw error
    }
}

exports.deleteCourse = async (req, reply) => {
    try {
        const courseId = req.params.id
        const course = Course.findByIdAndDelete(courseId)
        return course
    }
    catch (error) {
        throw error
    }
}