import { FormInputDto } from "../../pages/auth/Dto/authDto";

const FormInput = (formData: FormInputDto) => {
	// const FormInput = ({
	// 	type,
	// 	name,
	// 	placeholder,
	// 	label,
	// 	value,
	// 	onChange,
	// }: FormInputDto) => {
	const { name, label, ...formDataInput } = formData;

	return (
		<>
			<div className="flex justify-between">
				<label className="my-auto" htmlFor={formData.name}>
					{formData.label}
				</label>
				<input
					className="m-0 p-1 rounded border-solid border-2 border-gray-500 bg-transparent"
					{...formDataInput}
				/>
			</div>
		</>
	);
};
export default FormInput;
