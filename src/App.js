import * as React from 'react';
import { Router, Route, Switch } from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import { 
    View,
    StyleSheet,
    Platform,
    Dimensions,
} from 'react-native';
import Home from './home';
import pages from './pages';

const history = createHistory();

const isIphoneX = (() => {
    const x_width = 375;
    const x_height = 812;

    const screen_width = Dimensions.get('window').width;
    const screen_height = Dimensions.get('window').height;

    return Platform.OS === 'ios' && (
        (screen_height === x_height && screen_width === x_width) || 
        (screen_width === x_height && screen_height === x_height)
    );
})();

const statusBarHeight = () => {
    if (isIphoneX) {
        return 44;
    } else if (Platform.OS === 'ios') {
        return 20;
    } else if (Platform.OS === 'android') {
        return 17;
    } else {
        return 0;
    }
};

const router = [{
    key: 'home',
    component: Home,
    path: '/',
    exact: true,
}].concat(pages.routerArr);
class App extends React.Component {
    render () {
        return (
            <View style={{ flex: 1, paddingTop: statusBarHeight() }}>
                <Router history={history}>
                    <Switch>
                        <View style={ {flex: 1} }>
                            { router.map(item => <Route key={item.key} exact={item.exact} path={item.path} component={item.component}/>) }
                        </View>
                    </Switch>
                </Router>
            </View>
        )
    }
}

export default App;
