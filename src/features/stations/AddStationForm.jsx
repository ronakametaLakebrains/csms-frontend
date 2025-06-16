import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { createStation } from "../../services/apiStations";
import CustomButton from "../../ui/CustomButton";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import CustomStack from "../../ui/CustomStack";
import CustomHeading from "../../ui/CustomHeading";
import { useState } from "react";

const stateCityMap = {
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
  Karnataka: ["Bengaluru", "Mysuru", "Mangalore"],
};

function AddStationForm() {
  const { register, handleSubmit, watch, formState, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const selectedState = watch("state");

  const { mutate, isLoading } = useMutation({
    mutationFn: createStation,
    onSuccess: () => {
      alert("Station created successfully");
      queryClient.invalidateQueries(["stations"]);
      reset();
      navigate(-1);
    },
    onError: (error) => {
      console.error("Create station failed:", error);
      alert("Failed to create station");
    },
  });

  function onSubmit(data) {
    data.latitude = parseFloat(data.latitude);
    data.longitude = parseFloat(data.longitude);
    data.country = "India";
    mutate(data);
  }

  return (
    <>
      <CustomStack direction="row" spacing={2} alignItems="center">
        <KeyboardBackspaceIcon
          onClick={() => navigate(-1)}
          sx={{ cursor: "pointer" }}
        />
        <CustomHeading>Add Charging Station</CustomHeading>
      </CustomStack>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Station Name">
          <Input
            type="text"
            id="station_name"
            disabled={isLoading}
            {...register("station_name", {
              required: "Station name is required",
            })}
          />
        </FormRow>

        <FormRow label="Country">
          <Input value="India" disabled />
        </FormRow>

        <FormRow label="State">
          <select
            id="state"
            disabled={isLoading}
            {...register("state", { required: "State is required" })}
            style={{ padding: "0.5rem", width: "80%" }}
          >
            <option value="">-- Select State --</option>
            {Object.keys(stateCityMap).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </FormRow>

        <FormRow label="City">
          <select
            id="city"
            disabled={isLoading || !selectedState}
            {...register("city", { required: "City is required" })}
            style={{ padding: "0.5rem", width: "80%" }}
          >
            <option value="">-- Select City --</option>
            {selectedState &&
              stateCityMap[selectedState]?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </FormRow>

        <FormRow label="Postal Code">
          <Input
            type="text"
            id="postal_code"
            disabled={isLoading}
            {...register("postal_code", {
              required: "Postal code is required",
            })}
          />
        </FormRow>

        <FormRow label="On-Site Contact Details">
          <Input
            type="text"
            id="on_site_contact_details"
            disabled={isLoading}
            {...register("on_site_contact_details", {
              required: "Contact details required",
            })}
          />
        </FormRow>

        <FormRow label="Latitude">
          <Input
            type="number"
            step="any"
            id="latitude"
            disabled={isLoading}
            {...register("latitude", { required: "Latitude is required" })}
          />
        </FormRow>

        <FormRow label="Longitude">
          <Input
            type="number"
            step="any"
            id="longitude"
            disabled={isLoading}
            {...register("longitude", { required: "Longitude is required" })}
          />
        </FormRow>

        <FormRow label="Status">
          <Input
            type="text"
            id="status"
            defaultValue="active"
            disabled={isLoading}
            {...register("status", { required: "Status is required" })}
          />
        </FormRow>

        <FormRow label="Owner ID">
          <Input
            type="number"
            id="owner_id"
            disabled={isLoading}
            {...register("owner_id", { required: "Owner ID is required" })}
          />
        </FormRow>

        <CustomStack mt={2} direction="row" justifyContent="flex-end">
          <CustomButton type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Station"}
          </CustomButton>
        </CustomStack>
      </Form>
    </>
  );
}

export default AddStationForm;
