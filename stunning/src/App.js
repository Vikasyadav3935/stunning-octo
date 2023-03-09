
import AppNavigator from './AppNavigator';
import ContextProvider from './components/Context';


const App=()=>{
  return (
    <ContextProvider>
   <AppNavigator/>
   </ContextProvider>
  )
}


export default App;
