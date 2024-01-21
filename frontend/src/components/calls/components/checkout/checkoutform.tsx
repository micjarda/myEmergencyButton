import { Button, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import { FaCheck } from "react-icons/fa";
import React from "react"
import { useCallUpdateMutation } from "../../../../features/api/buttonapi";

interface ICheckoutProps {
  id: string;
}

export const CheckOutForm: React.FC<ICheckoutProps> = ({ id }) => {
  const [updateCallMutation] = useCallUpdateMutation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const selectedReasonRef = React.useRef<HTMLSelectElement | null>(null);

  const handlePationUpdate = async () => {
    try {
      const selectedReason = selectedReasonRef.current?.value;
      console.log(selectedReason);

      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      await updateCallMutation({ id: id, answerd: true, message: selectedReason, answerdDate: formattedDate });
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        <FaCheck />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nouzové volání</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Vyberte zprávu</FormLabel>
              <Select ref={selectedReasonRef} defaultValue='Medical Assistance Request'>
                <option value='Medical Assistance Request'>Medical Assistance Request</option>
                <option value='Mobility Aid Needed'>Mobility Aid Needed</option>
                <option value='Medication Support'>Medication Support</option>
                <option value='Emotional Support Request'>Emotional Support Request</option>
                <option value='Technical Assistance'>Technical Assistance</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handlePationUpdate} colorScheme='blue' mr={3}>
              Odbavit
            </Button>
            <Button onClick={onClose}>Zrušit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};