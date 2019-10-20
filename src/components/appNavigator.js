
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './home';
import Friends from './friends';


console.log(this.props)

const RootStack = createStackNavigator({
    Home: { screen: Home },
    Friends: { screen: Friends},
  },
  {
    defaultNavigationOptions:{
        title: 'Ip-Coster',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {        
            backgroundColor: "#3B5E89",  
        }
    }
  });

const AppNavigator = createAppContainer(RootStack);


  
  
  export default AppNavigator;