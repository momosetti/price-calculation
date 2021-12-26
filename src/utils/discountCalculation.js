/**
 * Function to calculate the milk discount and billed price after applying the offer rule
 * @param {number} ItemQuantity quantity item from the basket
 * @param {number} unitPrice product unit price
 * @returns {Object} Object contains the discountPrice and the billed price depend to the item quantity
 */
export const milkDiscountCalculation = (ItemQuantity, unitPrice) => {
  let i = ItemQuantity;
  let j = 0;
  while (i >= 4) {
    i = i - 4;
    j++;
  }
  return {
    discountPrice: j * unitPrice,
    paidTotalPrice: (ItemQuantity - j) * unitPrice,
  };
};

/**
 * Calculate the related discount and total price depend on another item (in our case, the butter is the item) quantity
 * @param {number} butterItemQuantity butter items number on the basket
 * @param {number} beardItemQuantity beard items number on the basket
 * @param {number} unitPrice unit price of the beard product
 * @returns {Object} return an object with discountPrice and paidTotalPrice keys.
 */
export const beardDiscountCalculation = (
  butterItemQuantity,
  beardItemQuantity,
  unitPrice
) => {
  // beard discount depends on the butter quantity
  const discountedItemNumber = Math.floor(butterItemQuantity / 2);
  if (discountedItemNumber >= beardItemQuantity) {
    // all beard price will be discounted
    return {
      discountPrice: (unitPrice / 2) * beardItemQuantity,
      paidTotalPrice: (unitPrice / 2) * beardItemQuantity,
    };
  } else {
    return {
      discountPrice: (discountedItemNumber * unitPrice) / 2,
      paidTotalPrice:
        (beardItemQuantity - discountedItemNumber) * unitPrice +
        (discountedItemNumber * unitPrice) / 2,
    };
  }
};

/**
 * Calculate the statement on the basket
 * @param {Object[]} itemArray array of object added to the basket
 * @returns Object with subTotal, discount, and total keys
 */
export const calculateStatememnt = (itemArray) => {
  let subTotal = 0;
  let discount = 0;
  let total = 0;
  itemArray.forEach((item) => {
    subTotal = subTotal + item.price * item.quantity;
    discount = discount + item.discount;
    total = subTotal - discount;
  });
  return { subTotal, discount, total };
};
