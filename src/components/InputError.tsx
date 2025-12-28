type InputErrorProps = {
  message?: string;
};

const InputError = ({ message }: InputErrorProps) => {
  return <span className="expense-error">{message || "\u00A0"}</span>;
};

export default InputError;
