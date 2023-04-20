export class FormInputDto {
	type!: string;
	name!: string;
	placeholder!: string;
	label!: string;
	value!: string;
	onChange?: (e: any) => void;
	required?: any;
	minlength?: string;
	maxlength?: string;
}
