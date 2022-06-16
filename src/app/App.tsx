import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Flex, Heading } from '@react-yuki/ui';
import { theme } from 'app/configs/styles';
import { GlobalStyles, Container, PageHeading } from 'app/components/styledComponents';
import Table from 'app/components/table';
import Command from 'app/containers/Command';
import InfoBox from 'app/components/infoBox';
import createStore from 'app/utils/store';
import { DESCRIPTIONS, INSTRUCTIONS } from 'app/configs/constants';

import { ExpandMore } from '@material-ui/icons';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Container width={1} flexDirection="column">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Heading fontSize={13} fontWeight={1} color="#FF435F" m={0} mb={0}>
                Toy Robot Game Instructions
              </Heading>
            </AccordionSummary>
            <AccordionDetails>
              <InfoBox title="Descriptions" content={DESCRIPTIONS} />
              <InfoBox title="How to operate the robot" content={INSTRUCTIONS} />
            </AccordionDetails>
          </Accordion>
          <br></br>
          <PageHeading>{`Play the game and have fun`}</PageHeading>
          <Flex flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}>
            <Command />
            <Table />
          </Flex>
        </Container>
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
