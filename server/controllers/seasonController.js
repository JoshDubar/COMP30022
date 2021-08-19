const Season = require('../models/season')
const Grade = require('../models/grade')

async function getSeason(req, res, next) {
    try {
        return res.status(200).json({
            success: true,
            data: req.season,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function createGrade(req, res, next) {
    try {
        let { gradeName, gradeGender, gradeDifficulty } = req.body
        if (['male', 'female', 'mixed'].indexOf(gradeGender) < 0)
            return next({ status: 400, message: 'Invalid gender' })
        if (['A', 'B', 'C', 'D', 'E'].indexOf(gradeDifficulty) < 0)
            return next({ status: 400, message: 'Invalid difficulty' })

        const newGrade = new Grade({
            name: gradeName,
            gender: gradeGender,
            difficulty: gradeDifficulty,
            season: req.season._id,
        })
        await newGrade.save()
        req.season.grades.push(newGrade)
        await req.season.save()

        return res.status(201).json({
            success: true,
            data: newGrade,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function getAllSeasonGrades(req, res, next) {
    try {
        await req.season.execPopulate('grades')
        return res.status(200).json({
            success: true,
            data: req.season.grades,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

module.exports = {
    getSeason,
    createGrade,
    getAllSeasonGrades,
}
