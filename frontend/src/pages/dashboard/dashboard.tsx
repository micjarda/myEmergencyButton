import { Spacer } from "@chakra-ui/react";
import Calls from "../../components/calls/calls";
import Patients from "../../components/patients/patients";

const Dashboard = () => {
  return (
    <div>
      <Calls />
      <Spacer marginBottom="20px" />
      <Patients />
    </div>
  );
};

export default Dashboard;
