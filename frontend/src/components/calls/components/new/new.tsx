import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { CheckOutForm } from "../checkout/checkoutform";

interface INewProps {
  buttonId: string;
  pushType: string;
  id: string;
}
const New: React.FC<INewProps> = ({ id, pushType }) => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" marginBottom="5px">
      <Box p="2">
        <Heading size="md">{pushType}</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <CheckOutForm id={id} />
      </ButtonGroup>
    </Flex>
  );
};

export default New;
