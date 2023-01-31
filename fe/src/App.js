import { ThemeProvider } from 'styled-components';
import Form from './components/form/Form';
import MainContainer from './components/MainContainer';
import { GlobalStyle, theme } from './theme';

import { AppProvider } from '../src/components/context/MainContext';
import List from './components/List';
import Header from './components/Title';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <AppProvider>
        <MainContainer>
          <Header title={ 'IP Generator' }/>
          <Form />
          <List />
        </MainContainer>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;