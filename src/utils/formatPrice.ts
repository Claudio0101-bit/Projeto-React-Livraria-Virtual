

export function formatPrice(value: number | undefined): string | undefined {

  return value?.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}