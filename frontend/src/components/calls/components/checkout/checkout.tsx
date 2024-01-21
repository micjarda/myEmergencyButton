import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useCallDeleteMutation } from "../../../../features/api/buttonapi";

interface INewProps {
  buttonId: string;
  id: string;
  message: string;
  answerdDate: string;

}
const Checkout: React.FC<INewProps> = ({ id, message, answerdDate }) => {
  const [deleteCallMutation] = useCallDeleteMutation();
  const handlePationDelete = async () => {
    try {
      await deleteCallMutation(id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" marginBottom="5px">
      <Box p="2">
        <Heading size="md">{message} {answerdDate}</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button onClick={handlePationDelete} colorScheme="red"><FaTrash /></Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Checkout;
