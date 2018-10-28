import {
    Dimensions,
    Platform,
} from 'react-native'

const isIphoneX = (() => {
    const x_width = 375
    const x_height = 812

    const screen_width = Dimensions.get('window').width
    const screen_height = Dimensions.get('window').height

    return Platform.OS === 'ios' && (
        (screen_height === x_height && screen_width === x_width) || 
        (screen_width === x_height && screen_height === x_height)
    )
})()

const statusBarHeight = () => {
    if (isIphoneX) {
        return 44
    } else if (Platform.OS === 'ios') {
        return 20
    } else if (Platform.OS === 'android') {
        return 17
    } else {
        return 0
    }
}

export {
    statusBarHeight,
}