import React, { Component } from 'react';
import { View, Modal, Text } from 'react-native';

class CatchComp extends Component {
    state = {
        error: null,
        errorInfo: null,
    }
    componentDidCatch (error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }
    render () {
        return (
            this.state.errorInfo ? (
                <Modal
                    visible>
                    <View>
                        <Text>{this.state.error && this.state.error.toString()}</Text>
                        <Text>{this.state.errorInfo.componentStack}</Text>
                    </View>
                </Modal>
            ) : this.props.children
        );
    }
}

export default CatchComp;