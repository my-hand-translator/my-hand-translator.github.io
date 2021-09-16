import { Link } from "react-router-dom";
import { styled } from "../config/stitches.config";

const Button = styled(Link, {
  display: "flex",
  minWidth: "150px",
  padding: "20px 40px",
  margin: "10px",
  borderRadius: "4px",
  background: "$lightApricot",
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: 600,
  textDecoration: "none",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all .2s ease",
  "&:hover": {
    background: "$apricot",
  },
});

export default Button;
