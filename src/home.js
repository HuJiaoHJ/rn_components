import * as React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

class Home extends React.Component {
    toItem = item => {
        console.log(item);
    }
    getItem = item => {
        return (
            <TouchableOpacity onPress={() => this.toItem(item)}>
                <View>
                    <Text>{item.key}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    render () {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        )
    }
}

export default Home;