import React from "react";
import {
	Button,
	Container,
	ErrorLabel,
	Form,
	Input,
	Link,
} from "./login.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { IField } from "./login.types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../router";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import { LoaderLine } from "../../components/loader/loader-line/loader-line";

export const Login = () => {
	const dispatch = useDispatch();
	const { isLoading } = useTypesSelector((state) => state.auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IField>({
		mode: "onChange",
		defaultValues: { email: "", password: "" },
	});
	const handleOnSubmit: SubmitHandler<IField> = (data) => {
		dispatch(AuthActionCreators.login(data.email, data.password));
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
				{isLoading ? (
					<LoaderLine />
				) : (
					<>
						<Button>Join</Button>

						<Link>
							<NavLink to={`/${RouteNames.REGISTR}`}>register</NavLink>
						</Link>
					</>
				)}
			</Form>
		</Container>
	);
};
