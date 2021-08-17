const Season = require('../models/season')
const Grade = require('../models/grade')

async function getSeason(req, res, next) {
    try {
        const season = await Season.findById(req.params.seasonId)
        if (!season) return next({ status: 404, message: 'Season does not exist' })

        return res.status(200).json({
            success: true,
            data: season,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function createGrade(req, res, next) {
    let { gradeName, gradeGender, gradeDifficulty } = req.body
    try {
        const season = await Season.findById(req.params.seasonId)
        if (!season) return next({ status: 404, message: 'Season does not exist' })
        if (['male', 'female', 'mixed'].indexOf(gradeGender) < 0)
            return next({ status: 400, message: 'Invalid gender' })
        if (['A', 'B', 'C', 'D', 'E'].indexOf(gradeDifficulty) < 0)
            return next({ status: 400, message: 'Invalid difficulty' })

        const newGrade = new Grade({
            name: gradeName,
            gender: gradeGender,
            difficulty: gradeDifficulty,
            season: season,
        })
        await newGrade.save()
        season.grades.push(newGrade)
        await season.save()

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
        const season = await Season.findById(req.params.seasonId)
        if (!season) return next({ status: 404, message: 'Season does not exist' })

        return res.status(200).json({
            success: true,
            data: season.grades,
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
