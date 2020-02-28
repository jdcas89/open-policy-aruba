import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../../../styles/theme';
import { GlobalStyles } from '../../../styles/globalStyle';
import { BreakpointProvider } from 'react-socks';
import { Theme } from 'styled-system';
import UnderConstruction from '../../templates/UnderConstruction';
import Footer from '../../molecules/Footer';
import { footerData } from '../../../data/footer.data';
import { navLinks } from '../../../data/navlinks.data';
import NavBar from '../../molecules/NavBar';
import { H1, Paragraph } from '../../atoms/Typography';

interface PageShellProps {
  wip?: boolean;
}

const PageShell: React.FC<PageShellProps> = ({ wip, children }) => {
  if (wip) {
    return (
      <ThemeProvider theme={defaultTheme}>
        <StyledLayout>
          <GlobalStyles />
          <Container>
            <UnderConstruction />
          </Container>
        </StyledLayout>
      </ThemeProvider>
    );
  }

  return (
    <BreakpointProvider>
      <ThemeProvider theme={defaultTheme}>
        <StyledLayout>
          <GlobalStyles />
          <Header>
            <NavBar type="primary" navLinks={navLinks} />
          </Header>

          <Content style={{ zIndex: 10 }}>
            <H1 p="16px" m="0" color="red" fontSize="24px">
              !!!DEMO MODE!!!
            </H1>
            <Paragraph p="16px" m="0">
              This project has no real data yet
            </Paragraph>
            <main>{children}</main>
            <Footer {...footerData} />
          </Content>
        </StyledLayout>
      </ThemeProvider>
    </BreakpointProvider>
  );
};
const Header = styled.header`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
`;

const Container = styled.div<{ theme: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
  padding: 16px;
  overflow: hidden;
`;

const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  background-color: #ecf0f1;
`;

const StyledLayout = styled.div<{ theme: Theme }>`
  background-color: #ecf0f1;
  height: 100%;
`;

export default PageShell;
