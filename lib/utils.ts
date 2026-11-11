export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPriceAed(amount: number): string {
  return `AED ${amount.toLocaleString("en-AE")}`;
}
