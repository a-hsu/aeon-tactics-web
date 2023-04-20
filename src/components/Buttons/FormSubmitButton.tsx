export const FormSubmitButton = () => {
	return (
		<button
			className="text-center rounded  bg-violet-500 text-white w-28 p-2"
			type="submit"
		>
			SUBMIT
		</button>
	);
};
export const FormCancelButton = () => {
	return (
		<button
			className="text-center rounded bg-transparent border-2 border-solid border-violet-500 text-black w-24 p-1"
			type="reset"
		>
			CANCEL
		</button>
	);
};
