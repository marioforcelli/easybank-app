import { AppWrapper } from "./App.style";
import ContentTop from "./components/ContentTop";
import Header from "./components/Header";
import { GlobalStyle } from "./styles/global";
import MainSection from "./components/MainSection";
import Articles from "./components/Articles";

function App() {
  return (
    <AppWrapper>
      <GlobalStyle/> 
      <Header/>
      <ContentTop/>
      <MainSection/>
      <Articles/>
    </AppWrapper>


  );
}

export default App;
