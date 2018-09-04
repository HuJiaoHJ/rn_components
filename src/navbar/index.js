import * as React from 'react';
import { 
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Icon from 'rn_components/icon';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 44,
        backgroundColor: '#000',
    }
})

class Navbar extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>navbar</Text>
            </View>
        );
    }
}

export default Navbar;