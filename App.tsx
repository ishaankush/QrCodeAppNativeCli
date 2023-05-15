import Routes from './src/Navigation/Routes';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(()=>{
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;