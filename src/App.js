import * as React from 'react';
import { Router, Route, Switch } from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import { View, StyleSheet } from 'react-native';
import Home from './home';

const history = createHistory();
class App extends React.Component {
    router = {
        key: 'home',
        component: Home,
        path: '/',
        exact: true,
    }
    render () {
        return (
            <View style={{ flex: 1 }}>
                <Router history={history}>
                    <Switch>
                        <View style={ {flex: 1} }>
                            <Route key='home' exact={true} path='/' component={Home}/>
                        </View>
                    </Switch>
                </Router>
            </View>
        )
    }
}

export default App;
