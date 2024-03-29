const express = require('express')
const { getTeamDocument, ensureAuthenticated, ensureTeamAdmin, getLeagueGradeSeason } = require('./utils')
const teamController = require('../controllers/teamController.js')

const teamRouter = express.Router()

// GET
teamRouter.get('/:teamId', getTeamDocument, teamController.getTeam)
teamRouter.get('/', (req, res, next) => getLeagueGradeSeason(req, res, next, true), teamController.getAllTeams)

// POST
teamRouter.post('/', ensureAuthenticated, teamController.createTeam)
teamRouter.post(
    '/:teamId/player',
    ensureAuthenticated,
    ensureTeamAdmin,
    teamController.addPlayerToTeam
)

// UPDATE
teamRouter.patch('/:teamId', ensureAuthenticated, ensureTeamAdmin, teamController.updateTeam)

// DELETE
teamRouter.delete(
    '/:teamId/player',
    ensureAuthenticated,
    ensureTeamAdmin,
    teamController.deletePlayersFromTeam
)

module.exports = teamRouter
