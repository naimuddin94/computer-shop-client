import { InputFieldProps } from "@/types/types";

const InputField = ({
  label,
  inputType = "text",
  fieldName,
  placeholder,
  styles = "input input-bordered rounded",
}: InputFieldProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        name={fieldName}
        type={inputType}
        placeholder={placeholder}
        className={styles}
        required
      />
    </div>
  );
};

export default InputField;
