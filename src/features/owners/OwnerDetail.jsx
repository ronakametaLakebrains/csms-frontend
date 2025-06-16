import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { getOwnerById } from "../../services/apiOwners";

const OwnerDetail = ({  onSave, Id }) => {
  const {
    isLoading,
    data: owner,
    error,
  } = useQuery({
    queryKey: ["owner"],
    queryFn: () => getOwnerById(Id),
  });

  console.log(owner, "////");
  console.log(Id, "##");

  const {
    register,
    handleSubmit,
    reset, // Reset function to update form dynamically
    formState: { errors },
  } = useForm();

  // Update form when `owners` data changes
  useEffect(() => {
    if (owner) {
      reset({
        id: owner?.id || "",
        ownerName: owner?.name || "",
        ownerId: owner?.id || "",
        location: owner?.address.city || "",
        company: owner?.company || "ChargeX",
        email: owner?.email || "", // Fixed email case
        mobileNumber: owner?.mobile || "",
        accountNumber: owner?.bankDetails.accountNumber || "",
      });
    }
  }, [owner, reset]);

  const onSubmit = (data) => {
    onSave(data);
  };

  if (isLoading) return <Spinner />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Name Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label>Owner Name:</label>
          <input
            disabled
            type="text"
            {...register("ownerName", { required: "Name is required" })}
            style={{
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          {errors.ownerName && (
            <p style={{ color: "red" }}>{errors.ownerName.message}</p>
          )}
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          {/* Owner ID Field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Owner Id:</label>
            <input
              disabled
              type="text"
              {...register("ownerId", { required: "Owner ID is required" })}
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            {errors.ownerId && (
              <p style={{ color: "red" }}>{errors.ownerId.message}</p>
            )}
          </div>

          {/* Company Field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Company:</label>
            <input
              disabled
              type="text"
              {...register("company", { required: "Location is required" })}
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            {errors.location && (
              <p style={{ color: "red" }}>{errors.location.message}</p>
            )}
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* Location Field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Location:</label>
            <input
              disabled
              type="text"
              {...register("location", { required: "Location is required" })}
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            {errors.location && (
              <p style={{ color: "red" }}>{errors.location.message}</p>
            )}
          </div>

          {/* Mobile No Field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Mobile No:</label>
            <input
              disabled
              type="text"
              {...register("mobileNumber", {
                required: "Mobile number is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Enter a valid 10-digit mobile number",
                },
              })}
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            {errors.mobileNumber && (
              <p style={{ color: "red" }}>{errors.mobileNumber.message}</p>
            )}
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* Email Field */}
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Email:</label>
            <input
              disabled
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid email address",
                },
              })}
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label>Account No:</label>
            <input
              disabled
              type="text"
              {...register("accountNumber", {
                required: "account number is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Enter a valid account number",
                },
              })}
              style={{
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Block/Unblock Dropdown */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            marginTop: "5px",
          }}
        ></div>
      </div>
    </form>
  );
};

export default OwnerDetail;
