import { setJSExceptionHandler } from './error_guard';
import { Alert } from 'react-native';

setJSExceptionHandler((e, isFatal) => {
    if (isFatal) {
        Alert.alert(
            'Unexpected error occurred',
            `
            ${e && e.stack && e.stack.slice(0, 300)}...
            `,
            [{
                text: 'OK',
                onPress: () => {
                    console.log('ok');
                }
            }]
        );
    } else {
        console.log(e);
    }
}, true);