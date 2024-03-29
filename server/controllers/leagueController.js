const League = require('../models/league')
const Season = require('../models/season')
const User = require('../models/user')
const { formatOrderByStatus, formatLeagueResp } = require('./responseFormatters')
const { allValidDocumentIds } = require('./utils')

async function createLeague(req, res, next) {
    try {
        let { leagueName, organisationName } = req.body

        const newLeague = new League({
            name: leagueName,
            organisation: organisationName,
            creator: req.user._id,
            admins: [req.user._id],
            seasons: [],
        })

        const league = await newLeague.save()
        req.user.leagues.push(newLeague)
        await req.user.save()

        return res.status(201).json({
            success: true,
            data: league,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function getAllLeagues(_, res, next) {
    try {
        const leagues = await League.find().populate(['seasons', 'creator'])
        return res.status(200).json({
            success: true,
            data: leagues.map(formatLeagueResp),
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function getLeague(req, res, next) {
    try {
        return res.status(200).json({
            success: true,
            data: req.league,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function deleteLeague(req, res, next) {
    try {
        await req.league.deleteOne({ _id: req.league._id })
        return res.status(204).send()
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function updateLeague(req, res, next) {
    try {
        let { leagueName, organisationName } = req.body

        const updateQuery = {}
        if (leagueName) updateQuery.name = leagueName
        if (organisationName) updateQuery.organisation = organisationName

        const league = await League.findOneAndUpdate(
            { _id: req.league._id },
            { $set: updateQuery },
            { new: true, runValidators: true }
        )

        return res.status(200).json({
            success: true,
            data: league,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function getAllLeagueSeasons(req, res, next) {
    try {
        const league = await req.league.execPopulate('seasons')
        const sortingOrder = {
            active: 1,
            upcoming: 2,
            completed: 3
        }
        return res.status(200).json({
            success: true,
            data: formatOrderByStatus(league.seasons, sortingOrder),
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function createLeagueSeason(req, res, next) {
    try {
        let { seasonName, seasonStart, seasonFinish } = req.body

        const newSeason = new Season({
            name: seasonName,
            dateStart: seasonStart,
            dateFinish: seasonFinish,
            league: req.league._id,
            grades: [],
        })

        const season = await newSeason.save()
        req.league.seasons.push(newSeason)
        await req.league.save()

        return res.status(201).json({
            success: true,
            data: season,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function createLeagueAdmins(req, res, next) {
    try {
        if (!(await allValidDocumentIds(req.body.adminIds, User))) {
            return next({ status: 404, message: 'Some users do not exist' })
        }

        var newLeagueAdmins = await Promise.all(
            req.body.adminIds.map(async (userId) => {
                const user = await User.findOneAndUpdate(
                    { _id: userId },
                    { $addToSet: { leagues: req.league._id } }
                )
                return user
            })
        )

        const league = await League.findOneAndUpdate(
            { _id: req.league._id },
            { $addToSet: { admins: newLeagueAdmins } },
            { new: true }
        )

        return res.status(200).json({
            success: true,
            data: league.admins,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

async function deleteLeagueAdmins(req, res, next) {
    try {
        if (!(await allValidDocumentIds(req.body.adminIds, User))) {
            return next({ status: 404, message: 'Some users do not exist' })
        }

        var toDeleteLeagueAdmins = await Promise.all(
            req.body.adminIds.map(async (userId) => {
                const user = await User.findOneAndUpdate(
                    { _id: userId },
                    { $pull: { leagues: { $in: req.league._id } } }
                )
                return user
            })
        )

        const league = await League.findOneAndUpdate(
            { _id: req.league._id },
            { $pull: { admins: { $in: toDeleteLeagueAdmins } } },
            { new: true }
        )

        return res.status(200).json({
            success: true,
            data: league.admins,
        })
    } catch (err) {
        console.log(err)
        return next(err)
    }
}

module.exports = {
    createLeagueAdmins,
    deleteLeagueAdmins,
    getLeague,
    getAllLeagues,
    deleteLeague,
    updateLeague,
    getAllLeagueSeasons,
    createLeague,
    createLeagueSeason,
}
