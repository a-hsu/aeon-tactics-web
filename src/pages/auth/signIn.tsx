import { useEffect, useState } from "react";
import FormInput from "../../components/Input/FormInput";
import { FormInputDto } from "../../libs/Dto/authDto";
import AuthLayout from "./AuthLayout";

const serverUrl = process.env.SERVER_URL || "";
const signIn = () => {
	const [signinFormData, setSigninFormData] = useState({
		username: "",
		password: "",
	});
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {});

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
		console.log("username: ", username);
		console.log("password: ", password);
	};
	return (
		<AuthLayout>
			<div className="flex flex-col space-y-4 m-2">
				<div className="flex flex-row">
					<h1 className="font-bold text-xl">Sign In</h1>
					<div className="h-2 w-2 rounded-full bg-violet-700 self-end mb-1 ml-1"></div>
				</div>
				<form
					className="flex flex-col w-72 space-y-2"
					method="post"
					name="signin"
					onSubmit={handleSubmit}
				>
					<FormInput {...usernameInput} />
					<FormInput {...passwordInput} />
					<button
						className="text-center rounded border-2 w-20 p-1"
						type="submit"
					>
						Submit
					</button>
				</form>
			</div>
		</AuthLayout>
	);
};
export default signIn;
