interface ProductType {
  id: string;
  name: string;
  weight: string;
  MRP: number;
  discount: number;
  price: number;
  quantity: number;
}
interface OfferType {
  name: string;
  saving: number;
}

export const calculateBill = (cartItems: ProductType[]) => {
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const offers: OfferType[] = [];
  let totalSavings: number = 0;

  const cheese = cartItems.find(
    (item) => item.name.toLocaleLowerCase() === "cheese",
  );
  if (cheese && cheese.quantity > 1) {
    const saving = Math.floor(cheese.quantity / 2) * cheese.price;
    totalSavings += saving;
    offers.push({ name: "cheese", saving: saving });
  }

  const bread = cartItems.find(
    (item) => item.name.toLocaleLowerCase() === "bread",
  );
  const soup = cartItems.find(
    (item) => item.name.toLocaleLowerCase() === "soup",
  );
  if (bread && soup) {
    const saving = Math.floor(bread.price / 2) * bread.quantity;
    totalSavings += saving;
    offers.push({ name: "bread", saving: saving });
  }

  const butter = cartItems.find(
    (item) => item.name.toLocaleLowerCase() === "butter",
  );
  if (butter) {
    const saving = Math.floor(butter.price / 3) * butter.quantity;
    totalSavings += saving;
    offers.push({ name: "butter", saving: saving });
  }

  return {
    subTotal,
    totalSavings,
    offers,
    totalAmount: subTotal - totalSavings,
  };
};
