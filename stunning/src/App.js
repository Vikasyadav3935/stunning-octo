
import AppNavigator from './AppNavigator';
import ContextProvider from './components/Context';
import { NativeBaseProvider, Text, Box } from "native-base";


const App=()=>{
  return (
    <NativeBaseProvider>
    <ContextProvider>
   <AppNavigator/>
   </ContextProvider>
   </NativeBaseProvider>
  )
}


export default App;
