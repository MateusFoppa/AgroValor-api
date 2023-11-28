export const formatBRL = (value) => {

  return (value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}
