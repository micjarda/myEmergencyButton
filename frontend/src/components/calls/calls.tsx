import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Box,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Ok from "./screens/ok/ok";
import Alert from "./screens/alert/alert";
import New from "./components/new/new";
import Checkout from "./components/checkout/checkout";
// Screen
import { useSelector } from "react-redux";
import { selectCheckoutedCalls, selectNewCalls } from "../../features/slices/callSlice";

const Calls = () => {
  const checkoudcalls = useSelector(selectCheckoutedCalls);
  console.log(checkoudcalls);
  const newcalls: string[] = useSelector(selectNewCalls);
  const defaultmessage = <Heading>Něco se nepovedlo...</Heading>;

  let newalerts: any = defaultmessage;
  if (newcalls)
    newalerts = newcalls.map((alert: any) => (
      <New id={alert._id} buttonId={alert._id} pushType={alert.pushType} />
    ));

  let oldcalls: any = defaultmessage;
  if (checkoudcalls) {
    console.log(checkoudcalls);
    oldcalls = checkoudcalls.map((alert: any) => (
      <Checkout id={alert._id} buttonId={alert.buttonId} message={alert.message} answerdDate={alert.answerdDate} />
    ));
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="md" textAlign={"center"}>
          Stav
        </Heading>
      </CardHeader>
      <CardBody>
        {newcalls.length > 0 ?
          <Flex color="white">
            <Box w="25%">
              <Alert />
            </Box>
            <Box w="75%" h="15vw" textColor="black">
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Nové</Tab>
                  <Tab>Odbavené</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {newalerts}
                  </TabPanel>
                  <TabPanel>
                    {oldcalls}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Flex>
          :
          <Flex color="white">
            <Box w="100%" paddingTop="10px" paddingBottom="45px">
              <Ok />
            </Box>
          </Flex>
        }
      </CardBody>
    </Card>
  );
};

export default Calls;
