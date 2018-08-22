import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Icon from '../index';
import svg from '../svg';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
    compWrapper: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    compWrap: {
        width: '33.33%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'powderblue',
    },
    compName: {
        marginTop: 10,
        fontSize: 16
    }
});

class IconExample extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.compWrapper}>
                        { Object.keys(svg).map((item, index) => (
                            <View key={index} style={styles.compWrap}>
                                <Icon icon={item} size={30}/>
                                <Text style={styles.compName}>{item}</Text>
                            </View>
                        )) }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default IconExample;