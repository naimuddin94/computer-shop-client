import { InputFieldProps } from "@/types/types";

const InputField = ({
  label,
  type = "text",
  name,
  placeholder,
  styles = "input input-bordered rounded",
}: InputFieldProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles}
        required
      />
    </div>
  );
};

export default InputField;
