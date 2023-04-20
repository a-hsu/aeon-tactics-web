import {
	FormCancelButton,
	FormSubmitButton,
} from "@/components/Buttons/FormSubmitButton";
import FormInput from "@/components/Input/FormInput";
import { useState } from "react";
import AuthLayout from "./AuthLayout";
import { FormInputDto } from "./Dto/authDto";
const signUp = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [confirmEmail, setConfirmEmail] = useState("");

	const emailInput: FormInputDto = {
		type: "email",
		name: "email",
		placeholder: "Ex. aeon@gmail.com",
		label: "Email",
		value: email,
		onChange: (e: any) => setEmail(e.target.value),
		required: true,
	};
	const confirmEmailInput: FormInputDto = {
		type: "email",
		name: "email",
		placeholder: "Confirm your email",
		label: "Confirm Email",
		value: confirmEmail,
		onChange: (e: any) => setConfirmEmail(e.target.value),
		required: true,
	};
	const usernameInput: FormInputDto = {
		type: "text",
		name: "username",
		placeholder: "Ex. TacticalAeon",
		label: "Username",
		value: username,
		onChange: (e: any) => setUsername(e.target.value),
		required: true,
	};
	const passwordInput: FormInputDto = {
		type: "text",
		name: "password",
		placeholder: "Ex. pass123",
		label: "Password",
		value: password,
		onChange: (e: any) => setPassword(e.target.value),
		required: true,
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("clicked submit");
		console.log("email: ", email);
		console.log("confirmEmail: ", confirmEmail);
		console.log("username: ", username);
		console.log("password: ", password);
	};
	const handleReset = (e: any) => {
		e.preventDefault();
		console.log("reset");
		setEmail("");
		setConfirmEmail("");
		setUsername("");
		setPassword("");
		console.log("email: ", email);
		console.log("confirmEmail: ", confirmEmail);
		console.log("username: ", username);
		console.log("password: ", password);
	};
	return (
		<AuthLayout>
			<div className="flex flex-col space-y-4 m-2">
				<div className="flex flex-row">
					<h1 className="font-bold text-xl">Create Account</h1>
					<div className="h-2 w-2 rounded-full bg-violet-700 self-end mb-1 ml-1"></div>
				</div>

				<form
					className="flex flex-col w-72 space-y-2"
					method="post"
					name="signup"
					onSubmit={handleSubmit}
					onReset={handleReset}
				>
					<FormInput {...emailInput} />
					<FormInput {...confirmEmailInput} />
					<FormInput {...usernameInput} />
					<FormInput {...passwordInput} />
					<div className="self-end">
						<FormCancelButton />
						<FormSubmitButton />
					</div>
				</form>
			</div>
		</AuthLayout>
	);
};
export default signUp;
