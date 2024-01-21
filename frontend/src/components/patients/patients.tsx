import { Card, CardHeader, Heading, CardBody, Box } from "@chakra-ui/react";
import { usePatientsListQuery } from "../../features/api/buttonapi";
import Patient from "./patient";

import Loading from "../../screens/loading/loading";

const Patients = () => {
  const {
    data: patientsData,
    isLoading: patientsLoading,
    isError: patientsError,
  } = usePatientsListQuery();

  let patientcards = <div>Něco se nenepvedlo..</div>;
  if (!patientsLoading) {
    if (patientsData.length > 0)
      patientcards = patientsData.map((patient, index) => (
        <Patient
          key={index}
          name={patient.name}
          buttonId={patient.buttonId}
          id={patient._id}
        />
      ));
    if (patientsData.length === 0)
      patientcards = (
        <Box textAlign="center">
          <Heading>Nejsou tady zapsaní žádní pacienti</Heading>
        </Box>
      );
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="md" textAlign={"center"}>
          Pacienti
        </Heading>
      </CardHeader>
      <CardBody>
        {patientsLoading && !patientsError ? <Loading /> : patientcards}
      </CardBody>
    </Card>
  );
};

export default Patients;
