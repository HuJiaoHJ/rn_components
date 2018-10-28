import * as React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import 'rn_components/exception_handler/guard_comp'
import { withErrorBoundary } from 'rn_components/exception_handler'
import Navbar from 'rn_components/navbar'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

class ExceptionHandlerExample extends React.Component {
    state = {
        visible: false,
    }
    error = () => {
        console.log('error')
        setTimeout(() => {
            /* eslint-disable */
            const a = b
        }, 3000)
        const a = c
    }
    catch = () => {
        console.log('catch')
        this.setState({
            visible: true,
        })
    }
    render () {
        if (this.state.visible) {
            const a = d
        }
        return (
            <View style={styles.container}>
                <Navbar 
                    title={'Exception Handler'}
                    handleLeft={() => this.props.history.go(-1)}/>
                <View style={styles.content}>
                    <TouchableOpacity onPress={this.error}>
                        <View>
                            <Text>Click me</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.catch}>
                        <View>
                            <Text>Click me</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default withErrorBoundary(ExceptionHandlerExample, (error, errorInfo) => {
    console.log('errorCallback', error, errorInfo)
}, true)