export function handleCardNUmberSpacing(cardNumber: string) {
  const trimedNumber = cardNumber.replaceAll(" ", "");
  let numberWithSpaces;
  if (cardNumber.length > 14) {
    numberWithSpaces = trimedNumber.replace(
      /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
      "$1 $2 $3 $4",
    );
  } else if (cardNumber.length > 9) {
    numberWithSpaces = trimedNumber.replace(
      /(\d{4})(\d{4})(\d{0,4})/,
      "$1 $2 $3",
    );
  } else if (cardNumber.length > 4) {
    numberWithSpaces = trimedNumber.replace(/(\d{4})(\d{0,4})/, "$1 $2");
  } else {
    numberWithSpaces = trimedNumber;
  }
  return numberWithSpaces;
}
