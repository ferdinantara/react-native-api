import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Homescreen from '../Views/Homescreen';
import Addscreen from '../Views/Addscreen';
import Editscreen from '../Views/Editscreen';

const RootStack = createStackNavigator(
  {
    Home: Homescreen,
    Add: Addscreen,
    Edit: Editscreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1e88e5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const App = createAppContainer(RootStack);
export default App;
