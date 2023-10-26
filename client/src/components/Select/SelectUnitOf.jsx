import PropTypes from 'prop-types';

export default function SelectUnitOf({ value, onChange }) {

  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-sans rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    >
      <option value="">Unidade de medida</option>
      <option value="Kg">Kg</option>
      <option value="Lt">Lt</option>
      <option value="g">g</option>
      <option value="ml">ml</option>
      <option value="Tn">Tn</option>
      <option value="Sc/60kg">Sc/60kg</option>
      <option value="Sc/50kg">Sc/50kg</option>
      <option value="Sc/40kg">Sc/40kg</option>
      <option value="Sc/25kg">Sc/25kg</option>
      <option value="Bins/350kg">Bins/350kg</option>
      <option value="Bins/400kg">Bins/400kg</option>
      <option value="Caixa/40kg">Caixa/40kg</option>
      <option value="Caixa/25kg">Caixa/25kg</option>
      <option value="Caixa/20kg">Caixa/20kg</option>
    </select>
  );
}
SelectUnitOf.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
