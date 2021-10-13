export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'

export const appPaths = {
    LOGIN_PATH: '/login',
    SIGN_UP_PATH: '/register',
    HOME_PATH: '/',
    DASHBOARD_TEAMS_PATH: '/dashboard/teams',
    DASHBOARD_CREATE_TEAM_PATH: '/dashboard/teams/create',
    DASHBOARD_LEAGUES_PATH: '/dashboard/leagues',
    DASHBOARD_CREATE_LEAGUE_PATH: '/dashboard/leagues/create',
    DASHBOARD_PROFILE_PATH: '/dashboard/profile',
    LOG_OUT_PATH: '/logout',
    LEAGUE_PATH: '/league',
    LEAGUE_SEASON_PATH: '/league/[leagueId]/seasons',
    LEAGUE_GRADE_PATH: '/league/[leagueId]/seasons/[seasonId]/grades',
}

export const requiredText = 'This is a required field.'
