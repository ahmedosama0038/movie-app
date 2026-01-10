import ErrorMessage from "../../Error/ErrorMessage";

export default function FormInput({
  id,
  label,
  placeholder,
  name,
  onBlur,
  onChange,
  value,
  touched,
  errors,
   type,
   startIcon
}) {
  return (
    <div className="form-group mb-3">
      <label htmlFor={id} className="form-label">
        <i className={ startIcon}></i>{label}
      </label>
      <input
        type={ type}
        className="form-control signup-input"
        id={id}
    name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors && touched ? (
        <ErrorMessage message={errors} />
      ) : (
        ""
      )}
    </div>
  );
}
