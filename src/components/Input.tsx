import InputError from "./InputError";

type Option = {
  label: string;
  value: string;
};

type InputProps = {
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  placeholder?: string;
  type?: string;
  options?: Option[];
  error?: string;
  style?: React.CSSProperties;
};

const Input = ({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  options,
  error,
  style,
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    onChange(e.target.value, e.target.name);
  };

  return (
    <div className="form-field">
      {options ? (
        <select
          name={name}
          value={value}
          onChange={handleChange}
          className={error ? "invalid" : ""}
          style={style}
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={error ? "invalid" : ""}
          style={style}
        />
      )}

      <InputError message={error} />
    </div>
  );
};

export default Input;
