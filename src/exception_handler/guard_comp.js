import { setJSExceptionHandler } from './error_guard';
import { Alert } from 'react-native';

setJSExceptionHandler((e, isFatal) => {
    if (isFatal) {
        Alert.alert(
            'Unexpected error occurred',
            `
        Error: ${(isFatal) ? 'Fatal:' : ''} ${e.name} ${e.message}

        We will need to restart the app.
        `,
            [{
                text: 'OK',
                onPress: () => {
                    console.log('ok');
                }
            }]
        );
    } else {
        console.log(e); // So that we can see it in the ADB logs in case of Android if needed
    }
});