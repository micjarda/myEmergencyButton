// Knihovny
import { Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Ikonky
import { faBomb } from "@fortawesome/free-solid-svg-icons";
// Styly
import "./error.css";

const BOMB = <FontAwesomeIcon icon={faBomb} />;

interface IError {
  message: string;
}
const ErrorMessage: React.FC<IError> = ({ message }) => {
  return (
    <Box className="error-screen">
      {BOMB}
      {message}
    </Box>
  );
};

export default ErrorMessage;
