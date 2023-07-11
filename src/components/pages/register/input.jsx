function Input({
  label,
  id,
  type,
  name,
  errors = {},
  placeholder = "",
  validation = {},
  register = () => null,
  ...props
}) {
  return (
    <>
      <div className="form-floating my-3 px-3">
        <input
          type={type}
          name={name}
          className={`form-control rounded-0 border-bottom ${
            errors[name] && "is-invalid"
          }`}
          placeholder={placeholder}
          {...register(name, validation)}
          {...props}
        />
        <label for={id}>{label}</label>
        {errors[name] && (
          <span className="text-danger">{errors[name]?.message}</span>
        )}
      </div>
    </>
  );
}
export default Input;
