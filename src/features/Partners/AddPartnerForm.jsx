import { useForm } from "react-hook-form";
import React from "react";
import CustomButton from "../../ui/CustomButton";
import { useNavigate } from "react-router-dom";
import Input from "../../ui/Input";
import FormRow from "../../ui/FormRow";
import { Box, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomHeading from "../../ui/CustomHeading";
import { createOwner } from "../../services/apiOwners";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const AddPartner = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: createOwner,
    onSuccess: () => {
      alert("Partner created successfully");
      reset(); // clear the form
      queryClient.invalidateQueries(["owners"]); // adjust to correct key
      navigate(-1);
    },
    onError: (error) => {
      alert("Failed to create partner");
      console.error(error);
    },
  }); 

  const onSubmit = (data) => {
    const payload = {
      organisation_name: data.organisation_name,
      email: data.email,
      mobile_no: data.mobile_no,
      address: data.address,
      account_no: data.account_no,
      ifsc_code: data.ifsc_code,
      company_category: data.company_category,
      gst_no: data.gst_no,
      revenue_type: data.revenue_type,
    };

    mutate(payload);
  };

  return (
    <>
      {/* Header */}
      <Grid container justifyContent="space-between" alignItems="center">
        <CustomHeading>Add Partner</CustomHeading>
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
        <CustomHeading size="small">General Details</CustomHeading>
        <FormRow>
          <Box sx={{ display: "flex", gap: 20, flex: 1, ml: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" mb={0.5}>
                Organisation Name:
              </Typography>
              <Input
                type="text"
                {...register("organisation_name", {
                  required: "Please enter organisation name",
                })}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" mb={0.5}>
                Mobile No:
              </Typography>
              <Input
                type="text"
                {...register("mobile_no", {
                  required: "Please enter mobile number",
                })}
              />
            </Box>
          </Box>
        </FormRow>

        <FormRow>
          <Box sx={{ display: "flex", gap: 20, flex: 1, ml: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" mb={0.5}>
                Email ID:
              </Typography>
              <Input
                type="email"
                {...register("email", {
                  required: "Please enter email",
                })}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" mb={0.5}>
                Address:
              </Typography>
              <Input
                type="text"
                {...register("address", {
                  required: "Please enter address",
                })}
              />
            </Box>
          </Box>
        </FormRow>

        <CustomHeading size="small">Company Details</CustomHeading>
        <FormRow>
          <Box sx={{ display: "flex", gap: 20, flex: 1, ml: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" mb={0.5}>
                Category:
              </Typography>
              <Input
                type="text"
                {...register("company_category", {
                  required: "Please enter company category",
                })}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" mb={0.5}>
                GST No:
              </Typography>
              <Input
                type="text"
                {...register("gst_no", {
                  required: "Please enter GST number",
                })}
              />
            </Box>
          </Box>
        </FormRow>

        <FormRow>
          <Box sx={{ display: "flex", gap: 20, flex: 1, ml: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" mb={0.5}>
                Revenue Type:
              </Typography>
              <Input
                type="text"
                {...register("revenue_type", {
                  required: "Please enter revenue type",
                })}
              />
            </Box>
          </Box>
        </FormRow>

        <CustomHeading size="small">Bank Details</CustomHeading>
        <FormRow>
          <Box sx={{ display: "flex", gap: 20, flex: 1, ml: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" mb={0.5}>
                Account Number:
              </Typography>
              <Input
                type="text"
                {...register("account_no", {
                  required: "Please enter account number",
                })}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" mb={0.5}>
                IFSC Code:
              </Typography>
              <Input
                type="text"
                {...register("ifsc_code", {
                  required: "Please enter IFSC code",
                })}
              />
            </Box>
          </Box>
        </FormRow>
      </form>
    </>
  );
};

export default AddPartner;
