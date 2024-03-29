const seasonController = require('../../controllers/seasonController')
const Season = require('../../models/season')
const Grade = require('../../models/grade')
const { mockRequest, mockResponse, mockNext } = require('./test-utils')

beforeEach(() => {
    jest.restoreAllMocks()
})

describe('Unit Testing: getAllSeasonGrades in seasonController', () => {
    test('Getting season grades with 1 grade should return populated grade', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const seasonDetails = {
            _id: '60741060d14008bd0efff9d5',
            grades: ['611ba1c73dc3af241c95e7e2'],
            name: 'Summer 2020/2021',
            league: '611a8a661fb4c81d84a5512c',
            dateStart: '2021-08-12T12:23:34.944Z',
            dateFinish: '2021-08-14T12:23:34.944Z',
            __v: 0,
        }
        req.season = new Season(seasonDetails)

        const expectedGrades = [
            {
                difficulty: 'A',
                gender: 'male',
                teams: [],
                _id: '611ba1c73dc3af241c95e7e2',
                name: 'Male A Grade',
                season: '60741060d14008bd0efff9d5',
                __v: 0,
            },
        ]

        // We expect execPopulate to populate the grades array with the full document
        const populatedObj = {
            ...seasonDetails,
            status: 'completed',
            grades: expectedGrades,
        }

        Season.prototype.execPopulate = jest.fn().mockResolvedValue(populatedObj)

        await seasonController.getAllSeasonGrades(req, res, next)

        const actualRes = {
            status: 200,
            json: {
                success: true,
                data: expectedGrades,
            },
        }

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(actualRes.status)
        expect(res.json).toHaveBeenCalledTimes(1)
        expect(res.json).toHaveBeenCalledWith(actualRes.json)
    })

    test('Getting season grades with no grades should return empty grades array', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const seasonDetails = {
            _id: '60741060d14008bd0efff9d5',
            grades: [],
            name: 'Summer 2020/2021',
            league: '611a8a661fb4c81d84a5512c',
            dateStart: '2021-08-12T12:23:34.944Z',
            dateFinish: '2021-08-14T12:23:34.944Z',
            __v: 0,
        }

        req.season = new Season(seasonDetails)

        Season.prototype.execPopulate = jest.fn().mockResolvedValue(seasonDetails)

        await seasonController.getAllSeasonGrades(req, res, next)

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

describe('Unit Testing: createGrade in seasonController', () => {
    test('Creating grade with valid gender, difficulty and season should create a grade', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        req.season = new Season({
            _id: '60741060d14008bd0efff9d5',
            grades: [],
            name: 'Summer 2020/2021',
            league: '611a8a661fb4c81d84a5512c',
            dateStart: '2021-08-12T12:23:34.944Z',
            dateFinish: '2021-08-14T12:23:34.944Z',
            __v: 0,
        })

        req.body = {
            gradeName: 'jdubz',
            gradeGender: 'male',
            gradeDifficulty: 'A',
        }

        const expectedGrade = new Grade({
            _id: '612788ed698aac7c50c3d3b6',
            name: 'jdubz',
            gender: 'male',
            difficulty: 'A',
            season: '60741060d14008bd0efff9d5',
            teams: [],
        })

        Season.prototype.save = jest.fn().mockImplementationOnce()
        Grade.prototype.save = jest.fn().mockResolvedValue(expectedGrade)
        await seasonController.createGrade(req, res, next)

        const actualRes = {
            status: 201,
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

describe('Unit Testing: updateSeason in seasonController', () => {
    test('Updating a season with valid seasonName, seasonStart, seasonFinish should update the season', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const seasonDetails = {
            _id: '60741060d14008bd0efff9d5',
            grades: [],
            name: 'Summer 2020/2021',
            league: '611a8a661fb4c81d84a5512c',
            dateStart: '2021-08-12T12:23:34.944Z',
            dateFinish: '2021-08-14T12:23:34.944Z',
            __v: 0,
        }
        req.season = new Season(seasonDetails)

        req.body = {
            seasonName: 'Summer 2020/2021 Part 2',
            seasonStart: '2021-08-13T12:23:34.944Z',
            seasonFinish: '2021-08-16T12:23:34.944Z',
        }

        const expectedSeason = new Season({
            ...seasonDetails, 
            name: req.body.seasonName, 
            dateStart: new Date(req.body.seasonStart), 
            dateFinish: new Date(req.body.seasonFinish), 
            status: 'completed'
        })

        Season.findOneAndUpdate = jest.fn().mockResolvedValue(expectedSeason)

        await seasonController.updateSeason(req, res, next)

        const actualRes = {
            status: 200,
            json: {
                success: true,
                data: expectedSeason,
            },
        }

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(actualRes.status)
        expect(res.json).toHaveBeenCalledTimes(1)
        expect(res.json).toHaveBeenCalledWith(actualRes.json)
    })

    test('Updating a season with valid seasonName and seasonStart but not seasonFinish should \
        update the season dynamically', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        const seasonDetails = {
            _id: '60741060d14008bd0efff9d5',
            grades: [],
            name: 'Summer 2020/2021',
            league: '611a8a661fb4c81d84a5512c',
            dateStart: '2021-08-12T12:23:34.944Z',
            dateFinish: '2021-08-14T12:23:34.944Z',
            __v: 0,
        }
        req.season = new Season(seasonDetails)

        req.body = {
            seasonName: 'Summer 2020/2021 Part 2',
            seasonStart: '2021-08-13T12:23:34.944Z'
        }

        const expectedSeason = new Season({
            ...seasonDetails, 
            name: req.body.seasonName, 
            dateStart: new Date(req.body.seasonStart)
        })

        Season.findOneAndUpdate = jest.fn().mockResolvedValue(expectedSeason)

        await seasonController.updateSeason(req, res, next)

        const actualRes = {
            status: 200,
            json: {
                success: true,
                data: expectedSeason,
            },
        }

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(actualRes.status)
        expect(res.json).toHaveBeenCalledTimes(1)
        expect(res.json).toHaveBeenCalledWith(actualRes.json)
    })
})

describe('Unit Testing: deleteSeason in seasonController', () => {
    test('Deleting season with valid seasonId should delete the season', async () => {
        const req = mockRequest()
        const res = mockResponse()
        const next = mockNext()

        req.season = new Season({
            _id: '60741060d14008bd0efff9d5',
            grades: [],
            name: 'Summer 2020/2021',
            league: '611a8a661fb4c81d84a5512c',
            dateStart: '2021-08-12T12:23:34.944Z',
            dateFinish: '2021-08-14T12:23:34.944Z',
            __v: 0,
        })

        Season.prototype.deleteOne = jest.fn().mockImplementationOnce()

        await seasonController.deleteSeason(req, res, next)

        expect(next).not.toHaveBeenCalled()
        expect(res.status).toHaveBeenCalledTimes(1)
        expect(res.status).toHaveBeenCalledWith(204)
    })
})
