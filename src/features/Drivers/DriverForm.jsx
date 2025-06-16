import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CustomButton from "../../ui/CustomButton";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import CustomStack from "../../ui/CustomStack";
import CustomHeading from "../../ui/CustomHeading";
import DropdownFilter from "../../ui/CustomFilter";

// Email regex: /\S+@\S+\.\S+/

function DriverForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  console.log(errors);

  const navigate = useNavigate();

  function onSubmit() {
    alert("Connector Created");
  }

  return (
    <>
      {/* <CustomStack spacing={2}></CustomStack> */}
      {/* <CustomStack direction="row" spacing={2}>
        <CustomHeading>Add Charger</CustomHeading>
      </CustomStack> */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Driver Name">
          <Input
            type="text"
            id="ownername"
            //   disabled={isLoading}
            {...register("ownerName", {
              required: "Please enter the owner name ",
            })}
          />
        </FormRow>

        <FormRow label="RFID">
          <Input
            type="text"
            id="ownerId"
            //   disabled={isLoading}
            {...register("ownerId", {
              required: "Please enter Owner ID",
            })}
          />
        </FormRow>

        <FormRow label="Mobile Number">
          <Input
            type="text"
            id="chargerId"
            //   disabled={isLoading}
            {...register("chargerId", {
              required: "Please enter Charger ID",
            })}
          />
        </FormRow>
        <FormRow label="Email address">
          <Input
            type="text"
            id="chargerId"
            //   disabled={isLoading}
            {...register("chargerId", {
              required: "Please enter Charger ID",
            })}
          />
        </FormRow>
        <FormRow label="Email address">
        <DropdownFilter options={[{ value: "Station-1", label: "Station-1" },{ value: "Station-2", label: "Station-2" },]} 
        />
        </FormRow>
      </Form>
    </>
  );
}

export default DriverForm;
