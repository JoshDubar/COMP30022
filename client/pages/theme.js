import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto-condensed'

const theme = extendTheme({
    fonts: {
        body: 'Roboto Condensed',
        heading: 'Roboto Condensed',
    },
    colors: {
        grey: '#EBEBEB',
        white: '#fff',
        activeSeasonBg: '#FFF4DD',
        inactiveSeasonBg: '#707070',
        activeSeasonColor: '#F57405',
        inactiveSeasonColor: 'white',
        // had to add 500 for checkbox
        greyText: {
            500: '#3E3D3D',
        },
        orange: '#FFBD2D',
        heading: '#15110D',
    },
    breakpoints: ['600px', '1024px', '1440px'],
})
export default theme
