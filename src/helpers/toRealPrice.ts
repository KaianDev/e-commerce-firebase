export const toRealPrice = (price: number) =>
  price.toLocaleString('pt-br', { currency: 'brl', style: 'currency' })
