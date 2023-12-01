import { categoriesOfProduction } from '../../services/repository/CategoryProduction';
import PropTypes from 'prop-types';

export default function SelectProductionCategory({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      required
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-sans rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    >
      <option label="Selecione a categoria de produção"></option>
      {
        categoriesOfProduction.map((data) =>
          <option key={data.id} value={data.name}>{data.name}</option>
        )
      }
    </select >
  );
}
SelectProductionCategory.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
