export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  };

  // check if its a clean amount
  // if (amount % 100 === 0) {
  //   options.minimumFractionDigits = 0;
  // }

  const formatter = Intl.NumberFormat('pt-br', options);

  // return formatter.format(amount / 100);
  return formatter.format(amount);
}
