// @flow
import * as React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'rn_components/icon';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 44,
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: 'rgba(250, 250, 250, 0.9)',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    leftWrapper: {
        width: 83,
    },
    centerWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rightWrapper: {
        width: 83,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

type NavbarProps = {
    title: string,
    titleFontSize: number,
    leftIcon: string,
    leftIconSize: number,
    leftIconColor: number,
    rightInfo: any,
    handleLeft: Function,
    handleRight: Function,
    centerStyle: StyleSheet.styles,
    navbarStyle: StyleSheet.styles,
}

class Navbar extends React.Component<NavbarProps> {
    static defaultProps = {
        titleFontSize: 18,
        leftIcon: 'arrow-left',
        leftIconSize: 18,
        leftIconColor: '#000',
    }
    handleLeft = () => {
        this.props.handleLeft && this.props.handleLeft();
    }
    handleRight = () => {
        this.props.handleRight && this.props.handleRight();
    }
    render () {
        const { title, titleFontSize, leftIcon, leftIconSize, leftIconColor, rightInfo, centerStyle, navbarStyle } = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.navbar, navbarStyle]}>
                    <View style={styles.leftWrapper}>
                        <TouchableOpacity onPress={this.handleLeft}>
                            <Icon icon={leftIcon} size={leftIconSize} color={leftIconColor}/>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.centerWrapper, centerStyle]}>
                        <Text numberOfLines={1} style={{fontSize: titleFontSize}}>{title}</Text>
                    </View>
                    <View style={styles.rightWrapper}>
                        { rightInfo && 
                        <TouchableOpacity onPress={this.handleRight}>
                            {rightInfo}
                        </TouchableOpacity> }
                    </View>
                </View>
            </View>
        );
    }
}

export default Navbar;