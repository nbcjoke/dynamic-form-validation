export const Select = ({ control, options }) => {
  return (
    <select {...control}>
      <option value="">Please choose an option</option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option?.value ?? option}>
            {option?.label ?? option}
          </option>
        );
      })}
    </select>
  );
};
