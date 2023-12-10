export const getFormattedCurrency = (
  currency = 'ARG',
  amount = 0,
  maxDigits = 0
) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: maxDigits,
  }).format(amount);
};
