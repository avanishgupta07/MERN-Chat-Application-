import React from 'react'
import { Box, Text, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
  import{ Login }from "./components/Authentication/Login";
import {Signup} from './components/Authentication/Signup';


export const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      < Box
        display={'flex'}
        justifyContent={'Center'}
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        < Text fontSize="4xl" fontFamily="Open Sans" color="black">
          Talk-A-Live
        </Text>
      </Box>
      <Box bg="white" w="100%" P={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><Login/></TabPanel>
            <TabPanel><Signup/></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </Container>
  );
};

export default Homepage;