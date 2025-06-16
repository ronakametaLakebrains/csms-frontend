import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const RoundButton = styled(Button)(({ theme }) => ({
  borderRadius: "50%",
  minWidth: "40px",
  height: "40px",
  padding: 0,
  textAlign: "center",
  fontSize: "20px",
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default RoundButton;
