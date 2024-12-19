import { ChangeEventHandler } from "react";
import "./textField.scss";
interface TextFieldProps {
	value: string;
	onChange: (e: ChangeEventHandler<HTMLInputElement>) => void;
	placholder: string;
	name: string;
	errorMessages: string | null;
}

export const TextField: React.FC<TextFieldProps> = ({
	name,
	errorMessages,
	...props
}) => {
	return (
		<>
			<input type="text" className="textField" {...props} />
			{errorMessages && <p>{errorMessages}</p>}
		</>
	);
};
