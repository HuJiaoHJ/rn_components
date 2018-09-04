import * as React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

class ExceptionHandlerExample extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>ExceptionHandlerExample</Text>
            </View>
        );
    }
}

export default ExceptionHandlerExample;