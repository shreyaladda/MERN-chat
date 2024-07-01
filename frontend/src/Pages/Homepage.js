import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="xx-large" fontFamily="Work sans" color="black">
          Whisp
        </Text>
      </Box>
      <Box
        bg="white"
        w={"100%"}
        p={4}
        color={"black"}
        borderRadius={"lg"}
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList marginBottom={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default Homepage;
