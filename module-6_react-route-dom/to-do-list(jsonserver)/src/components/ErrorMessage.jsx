export const ErrorMessage = ({ error }) => {
	return (
		<div className="error-message" aria-live="assertive">
			{error.message}
		</div>
	);
};
