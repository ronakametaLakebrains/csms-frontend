      import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

/**
 * 1) Styled MUI Card
 */
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "12px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  width: 250, // Adjust as needed
  height: 80,
  margin: theme.spacing(1),
  overflow: "visible", // So the card doesn't cut off the icon circle if it extends
}));

/**
 * 2) A styled wrapper for the icon circle
 */
const IconWrapper = styled("div")(({ theme, bgColor }) => ({
  width: 40,
  height: 40,
  borderRadius: "50%",
  backgroundColor: bgColor || theme.palette.grey[200],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(2),
}));

/**
 * 3) InfoCard component
 */
const InfoCard = ({ icon, label, value, bgColor }) => {
  return (
    <StyledCard>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          padding: (theme) => theme.spacing(1),
          paddingLeft : (theme) => theme.spacing(2),
        }}
      >
        {icon &&
        <IconWrapper bgColor={bgColor}>{icon}</IconWrapper>
}
        <Box>
          <Typography variant="body2" color="text.secondary">
            {label}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 500 }}>
            {value}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default InfoCard;
