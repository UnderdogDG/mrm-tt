import { ThemeProvider } from 'styled-components';
import Form from './components/form/Form';
import MainContainer from './components/MainContainer';
import { GlobalStyle, theme } from './theme';

import { AppProvider } from '../src/components/context/MainContext';
import List from './components/List';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalStyle />
      <AppProvider>
        <MainContainer>
          <Form />
          <List />
        </MainContainer>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;