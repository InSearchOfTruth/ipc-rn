
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MessengerProjectsScreenList from './MessengerProjectsScreenList'
import MessengerProjectsChatScreen from './chat/MessengerProjectsScreenChat'

const RootStack = createStackNavigator({
    Home: { screen: MessengerProjectsScreenList },
    chatScreen: {screen: MessengerProjectsChatScreen}
  },
  {
    defaultNavigationOptions:{
        title: 'Messenger',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {        
            backgroundColor: "#3B5E89",  
        }
    },
    headerMode: 'none'
  });

const MessengerProjectsScreen = createAppContainer(RootStack);

  
  
  export default MessengerProjectsScreen;