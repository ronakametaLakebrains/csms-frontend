import { useForm } from "react-hook-form";
import React, { useState } from "react";
import CustomButton from "../../ui/CustomButton";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Switch,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createTariff } from "../../services/apiTariffs";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddTariff = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: createTariff,
    onSuccess: () => {
      queryClient.invalidateQueries(["tariffs"]);
      reset();
      navigate(-1);
    },
    onError: (error) => {
      console.error("Create tariff failed:", error);
      alert("Failed to create tariff");
    },
  });

  const onSubmit = (data) => {
    const payload = {
      tariff_name: data.tariffName,
      basis: data.priceBasedOn,
      charges: parseFloat(data.price),
    };

    mutate(payload);
  };

  const isConnectionFeeEnabled = watch("connectionFeeSwitch");
  const isReservationFeeEnabled = watch("reservationFeeSwitch");

  return (
    <Box sx={{ p: 4 }}>
      {/* Header */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold" sx={{ fontSize: "2rem" }}>
          Add Tariff
        </Typography>
        <Box>
          <CustomButton
            variant="outlined"
            color="error"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{ mr: 2, width: 100, fontSize: "1rem", textTransform: "none" }}
          >
            Back
          </CustomButton>
          <CustomButton
            variant="contained"
            color="primary"
            sx={{ width: 100, fontSize: "1rem" }}
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </CustomButton>
        </Box>
      </Grid>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {/* Tariff Name */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Tariff"
              variant="outlined"
              {...register("tariffName", {
                required: "Tariff name is required",
              })}
              error={!!errors.tariffName}
              helperText={errors.tariffName?.message}
            />
          </Grid>

          {/* Price Based On */}
          <Grid item xs={12} sm={4}>
            <TextField
              select
              fullWidth
              label="Price Based On"
              variant="outlined"
              {...register("priceBasedOn", {
                required: "This field is required",
              })}
              error={!!errors.priceBasedOn}
              helperText={errors.priceBasedOn?.message}
            >
              <MenuItem value="per_kWh">per kWh</MenuItem>
              <MenuItem value="per_hour">per hour</MenuItem>
              <MenuItem value="per_flat">per flat</MenuItem>
            </TextField>
          </Grid>

          {/* Price */}
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Price (₹)"
              variant="outlined"
              type="number"
              {...register("price", { required: "Price is required" })}
              error={!!errors.price}
              helperText={errors.price?.message}
            />
          </Grid>

          {/* Default Switch */}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch {...register("isDefault")} />}
              label="Set As Default"
            />
          </Grid>

          {/* Fees Section Title */}
          <Grid item xs={12}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ fontSize: "1.4rem" }}
            >
              Fees
            </Typography>
          </Grid>

          {/* Connection Fee */}
          <Grid item xs={12} sm={4}>
            <FormControlLabel
              control={<Switch {...register("connectionFeeSwitch")} />}
              label="Set Connection Fee"
            />
            <TextField
              fullWidth
              type="number"
              variant="outlined"
              label="Connection Fee"
              sx={{ mt: 1 }}
              disabled={!isConnectionFeeEnabled}
              {...register("connectionFee")}
              error={!!errors.connectionFee}
              helperText={
                isConnectionFeeEnabled ? errors.connectionFee?.message : ""
              }
            />
          </Grid>

          {/* Reservation Fee */}
          <Grid item xs={12} sm={4}>
            <FormControlLabel
              control={<Switch {...register("reservationFeeSwitch")} />}
              label="Set Reservation Fee"
            />
            <TextField
              fullWidth
              type="number"
              variant="outlined"
              label="Reservation Fee"
              sx={{ mt: 1 }}
              disabled={!isReservationFeeEnabled}
              {...register("reservationFee")}
              error={!!errors.reservationFee}
              helperText={
                isReservationFeeEnabled ? errors.reservationFee?.message : ""
              }
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddTariff;
