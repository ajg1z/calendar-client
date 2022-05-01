import React from "react";
import { Button, Container, ErrorLabel, Form, Input } from "./login.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { IField } from "./login.types";
import styled from "styled-components";

export const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IField>({
    mode: "onChange",
    defaultValues: { email: "1", password: "1" },
  });
  const handleOnSubmit: SubmitHandler<IField> = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <Input
          error={!!errors.email!}
          type="email"
          {...register("email", {
            required: { message: "This field is required", value: true },
          })}
          placeholder="login"
        />
        {errors.email && <ErrorLabel>{errors.email.message}</ErrorLabel>}
        <Input
          error={!!errors.password!}
          type="password"
          {...register("password", {
            required: { message: "This field is required", value: true },
          })}
          placeholder="password"
        />
        {errors.password && <ErrorLabel>{errors.password.message}</ErrorLabel>}
        <Button>Join</Button>
      </Form>
    </Container>
  );
};
