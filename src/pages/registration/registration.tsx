import React from "react";
import {
	Button,
	Container,
	ErrorLabel,
	Form,
	Input,
} from "./registration.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { IField } from "./registration.types";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../../store/reducers/auth/action-creators";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../router";
import { Link } from "../login/login.styled";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import { LoaderLine } from "../../components/loader/loader-line/loader-line";

export const Registration = () => {
	const dispatch = useDispatch();
	const { isLoading } = useTypesSelector((state) => state.auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IField>({
		mode: "onChange",
		defaultValues: { email: "", password: "", name: "" },
	});

	const handleOnSubmit: SubmitHandler<IField> = (data) => {
		dispatch(
			AuthActionCreators.registration(data.email, data.password, data.name)
		);
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
				<Input
					error={!!errors.name!}
					type="text"
					{...register("name", {
						required: { message: "This field is required", value: true },
					})}
					placeholder="name"
				/>
				{errors.name && <ErrorLabel>{errors.name.message}</ErrorLabel>}
				{isLoading ? (
					<LoaderLine />
				) : (
					<>
						<Button>Create</Button>
						<Link>
							<NavLink to={`/${RouteNames.LOGIN}`}>login</NavLink>
						</Link>
					</>
				)}
			</Form>
		</Container>
	);
};
