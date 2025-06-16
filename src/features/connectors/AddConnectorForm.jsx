import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CustomButton from "../../ui/CustomButton";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import CustomStack from "../../ui/CustomStack";
import CustomHeading from "../../ui/CustomHeading";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createConnector } from "../../services/apiConnector";

function AddConnectorForm({ charger_id }) {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createConnector,
    onSuccess: () => {
      alert("Connector created successfully");
      queryClient.invalidateQueries(["connectors"]);
      reset();
      navigate(-1); // navigate back
    },
    onError: (error) => {
      console.error("Create connector failed:", error);
      alert("Failed to create connector");
    },
  });

  function onSubmit(data) {
    const finalData = {
      ...data,
      charger_id, // Inject the charger_id if passed as prop
    };
    mutate(finalData);
  }

  return (
    <>
      <CustomStack direction="row" spacing={2} alignItems="center" mb={2}>
        <KeyboardBackspaceIcon
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <CustomHeading>Add Connector</CustomHeading>
      </CustomStack>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Connector Name" error={errors?.connector_name?.message}>
          <Input
            type="text"
            id="connector_name"
            disabled={isLoading}
            {...register("connector_name", {
              required: "Please enter the connector name",
            })}
          />
        </FormRow>

        <FormRow label="MAC Address" error={errors?.mac_address?.message}>
          <Input
            type="text"
            id="mac_address"
            disabled={isLoading}
            {...register("mac_address", {
              required: "Please enter MAC address",
            })}
          />
        </FormRow>

        <FormRow label="Connector Type" error={errors?.connector_type?.message}>
          <Input
            type="text"
            id="connector_type"
            disabled={isLoading}
            {...register("connector_type", {
              required: "Please enter connector type",
            })}
          />
        </FormRow>

        <CustomButton type="submit" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Connector"}
        </CustomButton>
      </Form>
    </>
  );
}

export default AddConnectorForm;
