const Team = require('../models/team')
const Player = require('../models/player')
const { allValidDocumentIds, checkTeamInGrade } = require('./utils')

async function createTeam(req, res, next) {
    try {
        let { teamName } = req.body
        const newTeam = new Team({
            name: teamName,
            admin: req.user._id,
            grades: [],
            players: [],
        })

        const team = await newTeam.save()
        req.user.teams.push(team)
        await req.user.save()

        return res.status(201).json({
            success: true,
            data: team,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function getTeam(req, res, next) {
    try {
        const populateQuery = [
            {
                path: 'players',
                model: 'Player',
            },
            {
                path: 'games',
                model: 'Game',
                populate: [
                    {
                        path: 'team1.team',
                        model: 'Team',
                    },
                    {
                        path: 'team1.playersStats',
                        model: 'PlayerStat',
                    },
                    {
                        path: 'team2.team',
                        model: 'Team',
                    },
                    {
                        path: 'team2.playersStats',
                        model: 'PlayerStat',
                    },
                ],
            },
        ]
        const team = await req.team.execPopulate(populateQuery)

        return res.status(200).json({
            success: true,
            data: team,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function getAllTeams(req, res, next) {
    try {
        var teams = await Team.find()

        if (req.grade) {
            var unwantedTeams = []
            for (const team of teams) {
                if (await checkTeamInGrade(team, req.season)) {
                    if (!unwantedTeams.includes(team)) unwantedTeams.push(team)
                }
            }
            teams = teams.filter((team) => !unwantedTeams.some((uTeam) => uTeam._id == team._id))
        }

        return res.status(200).json({
            success: true,
            data: teams,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function updateTeam(req, res, next) {
    try {
        let { teamName } = req.body

        const updateQuery = {}
        if (teamName) updateQuery.name = teamName

        const team = await Team.findOneAndUpdate(
            { _id: req.team._id },
            { $set: updateQuery },
            { new: true, runValidators: true }
        )

        return res.status(200).json({
            success: true,
            data: team,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function addPlayerToTeam(req, res, next) {
    try {
        const playerNames = [... new Set(req.body.playerNames.map(player => player.playerName))]
        var newPlayers = await Promise.all(
            playerNames.map(async (playerName) => {
                // Find if a player already exists
                var player = await Player.findOne({ name: playerName, team: req.team._id })
                if (!player) {
                    const newPlayer = new Player({
                        team: req.team._id,
                        name: playerName,
                    })
                    player = await newPlayer.save()
                }
                return player
            })
        )

        const team = await Team.findOneAndUpdate(
            { _id: req.team._id },
            { $addToSet: { players: newPlayers } },
            { new: true }
        )

        return res.status(200).json({
            success: true,
            data: team.players,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function deletePlayersFromTeam(req, res, next) {
    try {
        if (!(await allValidDocumentIds(req.body.playerIds, Player))) {
            return next({ status: 404, message: 'Some players do not exist' })
        }

        var toDeletePlayers = await Promise.all(
            req.body.playerIds.map(async (playerId) => {
                const player = await Player.findOneAndUpdate({ _id: playerId }, { team: null })
                return player
            })
        )

        const team = await Team.findOneAndUpdate(
            { _id: req.team._id },
            { $pull: { players: { $in: toDeletePlayers } } },
            { new: true }
        )

        return res.status(200).json({
            success: true,
            data: team.players,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

module.exports = {
    createTeam,
    getTeam,
    getAllTeams,
    updateTeam,
    addPlayerToTeam,
    deletePlayersFromTeam,
}
