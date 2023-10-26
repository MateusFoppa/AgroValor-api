import PropTypes from 'prop-types';

export default function SelectCategoryExpense({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-sans rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    >
      <optgroup label="Selecione a Categoria de Despesa"></optgroup>
      <option value="Insumos">Insumos</option>
      <option value="Defensivos">Defensivos</option>
      <option value="Mão de Obra">Mão de Obra</option>
      <option value="Serviço Terceirizado">Serviço Terceirizado</option>
      <option value="Veterinária">Veterinária</option>
      <option value="Manutenção de Equipamentos">Manutenção de Equipamentos</option>
      <option value="Infraestrutura">Infraestrutura</option>
      <option value="Alimentação Animal">Alimentação Animal</option>
      <option value="Despesas com Animais">Despesas com Animais</option>
      <option value="Manutenção de Pastagens">Manutenção de Pastagens</option>
      <option value="Despesas Administrativas">Despesas Administrativas</option>
      <option value="Transporte">Transporte</option>
      <option value="Armazenamento e Logística">Armazenamento e Logística</option>
      <option value="Educação e Treinamento">Educação e Treinamento</option>
      <option value="Pesquisa e Desenvolvimento">Pesquisa e Desenvolvimento</option>
      <option value="Marketing e Vendas">Marketing e Vendas</option>
      <option value="Outras Despesas">Outras Despesas</option>
    </select >
  );
}
SelectCategoryExpense.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
