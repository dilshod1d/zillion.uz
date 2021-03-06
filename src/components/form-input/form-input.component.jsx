import './form-input.styles.scss';
const FormInput = ({ handleChange, label, ...restProps }) => {
  return (
    <div className='group'>
      <input
        type='text'
        className='form-input'
        onChange={handleChange}
        {...restProps}
      />
      {label ? (
        <label
          className={`${
            restProps.value?.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
