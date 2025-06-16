import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { createCharger } from "../../services/apiChargers";
import CustomButton from "../../ui/CustomButton";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import CustomStack from "../../ui/CustomStack";
import CustomHeading from "../../ui/CustomHeading";

function AddChargerForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createCharger,
    onSuccess: () => {
      alert("Charger created successfully");
      queryClient.invalidateQueries(["chargers"]); // Invalidate to refetch charger list
      reset();
      navigate(-1); // Optional: go back to previous page
    },
    onError: (error) => {
      console.error("Create charger failed:", error);
      alert("Failed to create charger");
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <>
      <CustomStack direction="row" spacing={2} alignItems="center">
        <KeyboardBackspaceIcon
          onClick={() => navigate(-1)}
          sx={{ cursor: "pointer" }}
        />
        <CustomHeading>Add Charger</CustomHeading>
      </CustomStack>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Model">
          <Input
            type="text"
            id="model"
            disabled={isLoading}
            {...register("model", { required: "Model is required" })}
          />
        </FormRow>

        <FormRow label="Name">
          <Input
            type="text"
            id="name"
            disabled={isLoading}
            {...register("name", { required: "Name is required" })}
          />
        </FormRow>

        <FormRow label="Manufacturer">
          <Input
            type="text"
            id="manufacturer"
            disabled={isLoading}
            {...register("manufacturer", {
              required: "Manufacturer is required",
            })}
          />
        </FormRow>

        <FormRow label="Serial Number">
          <Input
            type="text"
            id="serial_number"
            disabled={isLoading}
            {...register("serial_number", {
              required: "Serial number is required",
            })}
          />
        </FormRow>

        <FormRow label="Power Capacity (kW)">
          <Input
            type="number"
            id="power_capacity"
            disabled={isLoading}
            {...register("power_capacity", {
              required: "Power capacity is required",
              min: { value: 1, message: "Must be at least 1 kW" },
            })}
          />
        </FormRow>

        <FormRow label="Firmware Version">
          <Input
            type="text"
            id="firmware_version"
            disabled={isLoading}
            {...register("firmware_version", {
              required: "Firmware version is required",
            })}
          />
        </FormRow>

        <FormRow label="Owner ID">
          <Input
            type="text"
            id="owner_id"
            disabled={isLoading}
            {...register("owner_id", { required: "Owner ID is required" })}
          />
        </FormRow>

        <FormRow label="Charging Station ID">
          <Input
            type="text"
            id="charging_station_id"
            disabled={isLoading}
            {...register("charging_station_id", {
              required: "Charging Station ID is required",
            })}
          />
        </FormRow>

        <CustomStack mt={2} direction="row" justifyContent="flex-end">
          <CustomButton type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Create Charger"}
          </CustomButton>
        </CustomStack>
      </Form>
    </>
  );
}

export default AddChargerForm;
