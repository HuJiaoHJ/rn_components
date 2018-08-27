import { AppRegistry } from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import './src/icon/rn_iconfont/rn_iconfont.css';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('react-root')
});