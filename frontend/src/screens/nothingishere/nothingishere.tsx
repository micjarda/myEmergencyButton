import { Box } from "@chakra-ui/react";
import "./nothingishere.css";
// Knihovny
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Ikony
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
const CART = <FontAwesomeIcon icon={faBasketShopping} />;

const Nothingishere = () => {
  return (
    <Box className="nothingishere-screen">
      <div className="nothingishere">
        <div className="icon">{CART}</div>
        <div className="message">Nic tu není</div>
      </div>
    </Box>
  );
};

export default Nothingishere;
