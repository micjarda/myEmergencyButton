import { Box, Spinner } from "@chakra-ui/react";
import "./loading.css";

const loading = () => {
  return (
    <Box className="loading-screen">
      <Spinner
        className="loading-screen-spinner"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default loading;
