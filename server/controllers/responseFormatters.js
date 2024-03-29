const { pick } = require('./utils')

const formatLeagueResp = (leagueDoc) => {
    const creator = pick(leagueDoc.creator, ['_id', 'email', 'firstName', 'lastName'])
    const league = pick(leagueDoc, ['_id', 'name', 'organisation', 'creator', 'admins', 'seasons'])
    return { ...league, creator }
}

const formatTeamResp = (teamDoc) => pick(teamDoc, ['_id', 'name', 'grades', 'players', 'games'])

const formatUserResp = (userDoc) => {
    const leagues = userDoc.leagues.map(formatLeagueResp)
    const teams = userDoc.teams.map(formatTeamResp)
    const details = formatUserDetailsResp(userDoc)
    return { ...details, leagues, teams }
}

const formatUserDetailsResp = (userDoc) => pick(userDoc, ['_id', 'email', 'firstName', 'lastName'])

const formatTeamMinimal = (teamDoc) => pick(teamDoc, ['_id', 'name'])

const formatPlayerMinimal = (playerDoc) => pick(playerDoc, ['_id', 'name'])

const formatTeamMinimalPlayers = (teamDoc) => {
    const t = pick(teamDoc, ['_id', 'name'])
    const players = teamDoc.players.map(formatPlayerMinimal)
    return { ...t, players }
}

const formatGameResp = (gameDoc) => {
    const details = pick(gameDoc, [
        '_id',
        'round',
        'dateStart',
        'dateFinish',
        'location',
        'locationName',
        'status',
        'paths'
    ])
    const team1 = {
        team: formatTeamMinimalPlayers(gameDoc.team1.team),
        playersStats: gameDoc.team1.playersStats,
        totalPoints: gameDoc.team1.totalPoints,
    }
    const team2 = {
        team: formatTeamMinimalPlayers(gameDoc.team2.team),
        playersStats: gameDoc.team2.playersStats,
        totalPoints: gameDoc.team2.totalPoints,
    }
    return { ...details, team1, team2 }
}

const formatGradeResp = (gradeDoc) => {
    const teams = gradeDoc.teams.map(formatTeamMinimal)
    const fixture = []
    const sortingOrder = {
        completed: 1,
        active: 2,
        upcoming: 3
    }
    gradeDoc.fixture.forEach((round) => {
        const newRound = pick(round, ['_id', 'grade'])
        const teamsOnBye = round.teamsOnBye.map(formatTeamMinimal)
        const games = []
        round.games.forEach((game) => {
            const newGame = pick(game, [
                '_id',
                'dateStart',
                'dateFinish',
                'location',
                'locationName',
                'round',
                'status',
            ])
            const team1 = {
                team: formatTeamMinimal(game.team1.team),
                totalPoints: game.team1.totalPoints,
            }
            const team2 = {
                team: formatTeamMinimal(game.team2.team),
                totalPoints: game.team2.totalPoints,
            }
            newGame.team1 = team1
            newGame.team2 = team2
            games.push(newGame)
        })
        newRound.games = formatOrderByStatus(games, sortingOrder)
        newRound.teamsOnBye = teamsOnBye
        fixture.push(newRound)
    })
    const details = pick(gradeDoc, ['_id', 'name', 'difficulty', 'gender', 'season', 'ladder'])
    return { ...details, teams, fixture }
}

const formatOrderByStatus = (doc, sortingOrder) =>
    doc.sort((a, b) => {
        const first = sortingOrder[a.status]
        const second = sortingOrder[b.status]

        let result = 0
        if (first < second) result = -1
        else if (first > second) result = 1
        // Compare by dates instead
        else result = a.dateStart < b.dateStart ? -1 : 1
        return result
    })


module.exports = {
    formatLeagueResp,
    formatTeamResp,
    formatUserResp,
    formatUserDetailsResp,
    formatGradeResp,
    formatGameResp,
    formatOrderByStatus,
}
