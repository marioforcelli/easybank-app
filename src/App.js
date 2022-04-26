import { AppWrapper } from "./App.style";
import ContentTop from "./components/ContentTop";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import MainSection from "./components/MainSection";

function App() {
  return (
    <AppWrapper>
      <GlobalStyle/> 
      <Header/>
      <ContentTop/>
      <MainSection/>
    </AppWrapper>


  );
}

export default App;
