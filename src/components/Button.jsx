import { styled } from "../config/stitches.config";

const Button = styled("a", {
  display: "flex",
  minWidth: "150px",
  padding: "20px 40px",
  margin: "10px",
  borderRadius: "4px",
  background: "$quinary",
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: 600,
  textDecoration: "none",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all .2s ease",
  "&:hover": {
    background: "$quaternary",
  },
});

export default Button;
