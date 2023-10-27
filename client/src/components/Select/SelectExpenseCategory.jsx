import { categoriesOfExpense } from '../../services/repository/CategoryExpense';
import PropTypes from 'prop-types';

export default function SelectCategoryExpense({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-sans rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    >
      <option label="Selecione a categoria de despesa"></option>
      {
        categoriesOfExpense.map((data) =>
          <option key={data.id} value={data.name}>{data.name}</option>
        )
      }
    </select >
  );
}
SelectCategoryExpense.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
