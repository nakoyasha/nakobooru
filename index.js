/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './components/App';
import { name as appName } from './app.json';
import { PaperProvider } from 'react-native-paper';

export default function Main() {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
