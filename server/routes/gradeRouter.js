const express = require('express')
const { getLeagueGradeSeason, ensureAuthenticated, ensureLeagueAdmin } = require('./utils')
const gradeController = require('../controllers/gradeController.js')

const gradeRouter = express.Router()

// GET
gradeRouter.get(
    '/:gradeId',
    getLeagueGradeSeason,
    gradeController.getGrade)
gradeRouter.get(
    '/:gradeId/team',
    getLeagueGradeSeason,
    gradeController.getAllGradeTeams)

module.exports = gradeRouter