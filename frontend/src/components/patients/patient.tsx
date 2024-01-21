import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { FaTrash, FaPen } from "react-icons/fa";
import { useDeletePatientMutation } from "../../features/api/buttonapi";

interface IPatientProps {
  name: string;
  buttonId: string;
  id: string;
}
const Patient: React.FC<IPatientProps> = ({ name, buttonId, id }) => {
  const [deletePatientMutation, { isLoading, isError }] =
    useDeletePatientMutation();

  const handlePationDelete = async () => {
    try {
      await deletePatientMutation(id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      marginBottom={"5px"}
    >
      <Box p="2">
        <Heading size="md">{name}</Heading>
        <Heading size="md">{buttonId}</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="blue">
          <FaPen />
        </Button>
        <Button onClick={handlePationDelete} colorScheme="red">
          <FaTrash />
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Patient;
