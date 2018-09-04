import * as React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import pages from './pages';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

class Home extends React.Component {
    toItem = item => {
        this.props.history.push(item.path);
    }
    getItem = (item, index) => {
        return (
            <TouchableOpacity onPress={() => this.toItem(item)} key={index}>
                <View>
                    <Text>{item.key}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    render () {
        return (
            <View style={styles.container}>
                { pages.routerArr.map((item, index) => this.getItem(item, index)) }
            </View>
        )
    }
}

export default Home;