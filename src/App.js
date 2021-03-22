import React from 'react';
import ChatList from '../src/components/ChatList';
import ChatMessage from '../src/components/ChatMessage';
import ButtonTheme from '../src/components/ButtonTheme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/GlobalStyles';
import { lightTheme, darkTheme } from './components/Themes';
import { useDarkMode } from './utils/useDarkMode';
import { Container, Content } from './styles';

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Container>
          <ButtonTheme
            theme={theme}
            themeMode={themeMode}
            toggleTheme={themeToggler}
          />
          <Content>
            <ChatList />
            <ChatMessage theme={themeMode} />
          </Content>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
