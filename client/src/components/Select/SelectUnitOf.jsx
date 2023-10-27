import PropTypes from 'prop-types';

export default function SelectUnitOf({ value, onChange }) {

  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-sans rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    >
      <option label='Unidade de medida'></option>
      <option value="Kg">Kg</option>
      <option value="Lt">Lt</option>
    </select>
  );
}
SelectUnitOf.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
