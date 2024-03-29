const gradeController = require('../../controllers/gradeController')
const Season = require('../../models/season')
const Grade = require('../../models/grade')
const Team = require('../../models/team')
const Round = require('../../models/round')
const { mockRequest, mockResponse, mockNext } = require('./test-utils')

beforeEach(() => {
    jest.restoreAllMocks()
})

describe('Unit Testing: getAllGradeTeams in gradeController', () => {
    test('Getting grade teams with 1 team should return populated team', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const gradeDetails = {
            _id: '612788ed698aac7c50c3d3b6',
            name: 'jdubz grade',
            gender: 'male',
            difficulty: 'A',
            season: '60741060d14008bd0efff9d5',
            teams: ['611ba6a199599722e4d01c38'],
        }
        req.grade = new Grade(gradeDetails)

        const expectedTeams = [
            {
                games: [],
                admin: '611a8a311fb4c81d84a55126',
                _id: '611ba6a199599722e4d01c38',
                name: 'jdubz team',
                grades: ['612788ed698aac7c50c3d3b6'],
                players: [],
                __v: 0,
            },
        ]

        // We expect execPopulate to populate the teams array with the full document
        const populatedObj = {
            ...gradeDetails,
            teams: expectedTeams,
        }

        Grade.prototype.execPopulate = jest.fn().mockResolvedValue(populatedObj)

        await gradeController.getAllGradeTeams(req, res, next)

        const actualRes = {
            status: 200,
            json: {
                success: true,
                data: expectedTeams,
            },
        }

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(actualRes.status)
        expect(res.json).toHaveBeenCalledTimes(1)
        expect(res.json).toHaveBeenCalledWith(actualRes.json)
    })

    test('Getting grade teams with no teams should return empty teams array', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const gradeDetails = {
            _id: '612788ed698aac7c50c3d3b6',
            name: 'jdubz grade',
            gender: 'male',
            difficulty: 'A',
            season: '60741060d14008bd0efff9d5',
            teams: [],
        }
        req.grade = new Grade(gradeDetails)

        Grade.prototype.execPopulate = jest.fn().mockResolvedValue(gradeDetails)

        await gradeController.getAllGradeTeams(req, res, next)

        const actualRes = {
            status: 200,
            json: {
                success: true,
                data: [],
            },
        }

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(actualRes.status)
        expect(res.json).toHaveBeenCalledTimes(1)
        expect(res.json).toHaveBeenCalledWith(actualRes.json)
    })
})

describe('Unit Testing: addTeam in gradeController', () => {
    test('Adding team that is in other grade for the season should return \
            Team already exists in a grade for the season error', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const gradeDetails = {
            _id: '612788ed698aac7c50c3d3b6',
            name: 'jdubz grade',
            gender: 'male',
            difficulty: 'A',
            season: '60741060d14008bd0efff9d5',
            teams: ['611ba6a199599722e4d01c38'],
        }
        req.grade = new Grade(gradeDetails)

        const teamDetails = {
            games: [],
            admin: '611a8a311fb4c81d84a55126',
            _id: '611ba6a199599722e4d01c38',
            name: 'jdubz team',
            grades: ['612788ed698aac7c50c3d3b6'],
            players: [],
            __v: 0,
        }
        req.team = new Team(teamDetails)

        const seasonDetails = {
            _id: '60741060d14008bd0efff9d5',
            grades: ['612788ed698aac7c50c3d3b6'],
            name: 'Summer 2020/2021',
            league: '611a8a661fb4c81d84a5512c',
            dateStart: '2021-08-12T12:23:34.944Z',
            dateFinish: '2021-08-14T12:23:34.944Z',
            __v: 0,
        }
        req.season = new Season(seasonDetails)

        // We expect execPopulate to populate the teams array with the full document
        const populatedObj = {
            ...seasonDetails,
            status: 'completed',
            grades: [gradeDetails],
        }

        Season.prototype.execPopulate = jest.fn().mockResolvedValue(populatedObj)

        await gradeController.addTeamToGrade(req, res, next)

        const actualNext = {
            status: 400,
            message: 'Team already exists in a grade for the season',
        }

        expect(next).toHaveBeenCalledWith(actualNext)
    })

    test('Adding team that are not in other grades for the season should be added', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const gradeDetails = {
            _id: '612788ed698aac7c50c3d3b6',
            name: 'jdubz grade',
            gender: 'male',
            difficulty: 'A',
            season: '60741060d14008bd0efff9d5',
            teams: [],
        }
        req.grade = new Grade(gradeDetails)

        const teamDetails = {
            games: [],
            admin: '611a8a311fb4c81d84a55126',
            _id: '611ba6a199599722e4d01c38',
            name: 'jdubz team',
            grades: [],
            players: [],
            __v: 0,
        }
        req.team = new Team(teamDetails)

        const seasonDetails = {
            _id: '60741060d14008bd0efff9d5',
            grades: ['612788ed698aac7c50c3d3b6'],
            name: 'Summer 2020/2021',
            league: '611a8a661fb4c81d84a5512c',
            dateStart: '2021-08-12T12:23:34.944Z',
            dateFinish: '2021-08-14T12:23:34.944Z',
            __v: 0,
        }
        req.season = new Season(seasonDetails)

        const expectedGrade = new Grade({ ...gradeDetails, teams: [req.team] })

        const populatedObj = {
            ...seasonDetails,
            status: 'completed',
            grades: [gradeDetails],
        }

        Season.prototype.execPopulate = jest.fn().mockResolvedValue(populatedObj)
        Team.prototype.save = jest.fn().mockImplementationOnce()
        Grade.prototype.save = jest.fn().mockResolvedValue(expectedGrade)

        await gradeController.addTeamToGrade(req, res, next)

        const actualRes = {
            status: 200,
            json: {
                success: true,
                data: expectedGrade,
            },
        }

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(actualRes.status)
        expect(res.json).toHaveBeenCalledTimes(1)
        expect(res.json).toHaveBeenCalledWith(actualRes.json)
    })
})

describe('Unit Testing: deleteGrade in gradeController', () => {
    test('Deleting grade teams with valid gradeId should delete the grade', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const gradeDetails = {
            _id: '612788ed698aac7c50c3d3b6',
            name: 'jdubz grade',
            gender: 'male',
            difficulty: 'A',
            season: '60741060d14008bd0efff9d5',
            teams: ['611ba6a199599722e4d01c38'],
        }
        req.grade = new Grade(gradeDetails)

        Grade.prototype.deleteOne = jest.fn().mockImplementationOnce()

        await gradeController.deleteGrade(req, res, next)

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(204)
    })
})

describe('Unit Testing: createRound in gradeController', () => {
    test('Creating a round with valid gradeId should create a round', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const gradeDetails = {
            _id: '612788ed698aac7c50c3d3b6',
            name: 'jdubz grade',
            gender: 'male',
            difficulty: 'A',
            season: '60741060d14008bd0efff9d5',
            teams: ['611ba6a199599722e4d01c38'],
        }
        req.grade = new Grade(gradeDetails)

        const expectedRound = new Round({
            grade: gradeDetails._id,
            date: '2021-08-12T12:23:34.944Z'
        })

        Round.prototype.save = jest.fn().mockResolvedValue(expectedRound)
        Grade.prototype.save = jest.fn().mockImplementationOnce()

        await gradeController.createRound(req, res, next)

        const actualRes = {
            status: 201,
            json: {
                success: true,
                data: expectedRound
            }
        }

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(actualRes.status)
        expect(res.json).toHaveBeenCalledTimes(1)
        expect(res.json).toHaveBeenCalledWith(actualRes.json)
    })
})

describe('Unit Testing: updateGrade in gradeController', () => {
    test('Updating a season with valid gradeName, gradeGender, gradeDifficulty should update the grade', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const gradeDetails = {
            _id: '612788ed698aac7c50c3d3b6',
            name: 'jdubz grade',
            gender: 'male',
            difficulty: 'A',
            season: '60741060d14008bd0efff9d5',
            teams: ['611ba6a199599722e4d01c38'],
        }
        req.grade = new Grade(gradeDetails)

        req.body = {
            gradeName: 'jdubz',
            gradeGender: 'mixed',
            gradeDifficulty: 'B',
        }

        const expectedGrade = new Grade({
            ...gradeDetails,
            name: req.body.gradeName,
            gender: req.body.gradeGender,
            difficulty: req.body.gradeDifficulty
        })

        Grade.findOneAndUpdate = jest.fn().mockResolvedValue(expectedGrade)

        await gradeController.updateGrade(req, res, next)

        const actualRes = {
            status: 200,
            json: {
                success: true,
                data: expectedGrade,
            },
        }

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(actualRes.status)
        expect(res.json).toHaveBeenCalledTimes(1)
        expect(res.json).toHaveBeenCalledWith(actualRes.json)
    })

    test('Updating a grade with valid gradeName and gradeGender but not gradeDifficulty should \
        update the grade dynamically', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const gradeDetails = {
            _id: '612788ed698aac7c50c3d3b6',
            name: 'jdubz grade',
            gender: 'male',
            difficulty: 'A',
            season: '60741060d14008bd0efff9d5',
            teams: ['611ba6a199599722e4d01c38'],
        }
        req.grade = new Grade(gradeDetails)

        req.body = {
            gradeName: 'jdubz',
            gradeGender: 'mixed'
        }

        const expectedGrade = new Grade({
            ...gradeDetails,
            name: req.body.gradeName,
            gender: req.body.gradeGender
        })

        Grade.findOneAndUpdate = jest.fn().mockResolvedValue(expectedGrade)

        await gradeController.updateGrade(req, res, next)

        const actualRes = {
            status: 200,
            json: {
                success: true,
                data: expectedGrade,
            },
        }

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(actualRes.status)
        expect(res.json).toHaveBeenCalledTimes(1)
        expect(res.json).toHaveBeenCalledWith(actualRes.json)
    })
})