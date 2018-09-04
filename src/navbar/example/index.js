import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import Navbar from 'rn_components/navbar';

class NavbarExample extends React.Component {
    back = () => {
        this.props.history.go(-1);
    }
    render () {
        return (
            <View style={{flex: 1}}>
                <Navbar 
                    title={'Navbar'}
                    rightInfo={<Text>other info</Text>}
                    handleLeft={this.back}/>
            </View>
        );
    }
}

export default NavbarExample;