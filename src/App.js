import { AppWrapper } from "./App.style";
import ContentTop from "./components/ContentTop";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <AppWrapper>
      <GlobalStyle/> 
      <Header/>
      <ContentTop/>
    </AppWrapper>


  );
}

export default App;
