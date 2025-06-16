import React from "react";
import { Card, CardContent, Grid, Typography, Divider } from "@mui/material";
import PowerIcon from "@mui/icons-material/Power";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChargerCard = ({Type1,Type2,Type3,Number1,Number2,Number3,}) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, width: '300px' }}>
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          fontWeight="bold"
          sx={{ marginBottom: 2 }}
        >
          {Type1}
        </Typography>
        <Typography
          variant="h4"
          textAlign="center"
          color="primary"
          fontWeight="bold"
          sx={{ marginBottom: 3 }}
        >
          {Number1}
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Grid container spacing={2}>
          <Grid item xs={6} textAlign="center">
            <CheckCircleIcon color="success" fontSize="large" />
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
              {Type2}
            </Typography>
            <Typography variant="h6" color="success">
           {Number2}
            </Typography>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <ErrorOutlineIcon color="error" fontSize="large" />
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 1 }}>
            {Type3}
            </Typography>
            <Typography variant="h6" color="error">
            {Number3}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ChargerCard;
