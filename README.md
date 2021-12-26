[Live Demo 🌍](https://ld-price-calculation.netlify.app/)
A customer basket that allows a customer to add products and provides a total cost of the basket including applicable discounts.

## Project structure

```bash
src
 ┣ components
 ┃ ┣ cart
 ┃ ┃ ┣ cartCard.jsx
 ┃ ┃ ┗ cartStatement.jsx
 ┃ ┣ layout
 ┃ ┃ ┣ container.jsx
 ┃ ┃ ┗ fluidGrid.jsx
 ┃ ┗ product
 ┃ ┃ ┗ productCard.jsx
 ┣ features
 ┃ ┣ cart
 ┃ ┃ ┣ cartPane.jsx
 ┃ ┃ ┗ cartSlice.js
 ┃ ┗ product
 ┃ ┃ ┣ productPane.jsx
 ┃ ┃ ┗ productSlice.js
 ┣ utils
 ┃ ┣ constants
 ┃ ┃ ┗ dataMock.js
 ┃ ┗ helpers
 ┃ ┃ ┗ discountCalculation.js
 ┣ App.jsx
 ┣ globalStyle.js
 ┣ main.jsx
 ┗ store.js
```

## How to run the app

After cloning the repo. Using your preferred package manager (I use `Yarn`).

To install dependencies:

    git clone https://github.com/momosetti/a-spaceship-to-another-dimension
    cd a-spaceship-to-another-dimension
    yarn / npm install

For starting the dev server:

    yarn dev

For building:

    yarn build

For serving static files (after build the project):

    yarn perview

## Tech Stack used

- SPA library: React.js.
- State management (Redux.js, utility: Redux ToolKit).

- Build tool: [Vite.js](https://vitejs.dev/)

- Style: Styled-components.

- Source control version: GIT

- Linting & Formatting: Eslint and Prettier (local Prettier Vscode configuration).

# API

### Functions

<dl>
<dt><a href="#milkDiscountCalculation">milkDiscountCalculation</a> ⇒ <code>Object</code></dt>    
<dd><p>Function to calculate the milk discount and billed price after applying the offer rule.</p>
</dd>
<dt><a href="#beardDiscountCalculation">beardDiscountCalculation</a> ⇒ <code>Object</code></dt>
<dd><p>Calculate the related discount and total price depend on another item (in our case, the butter is the item) quantity.</p>  
</dd>
<dt><a href="#calculateStatememnt">calculateStatememnt</a> ⇒</dt>
<dd><p>Calculate the statement on the basket.</p>
</dd>
</dl>

<a name="milkDiscountCalculation"></a>

## milkDiscountCalculation ⇒ <code>Object</code>

Function to calculate the milk discount and billed price after applying the offer rule.

**Returns**: <code>Object</code> - Object contains the discountPrice and the billed price depends to the item quantity.

| Param        | Type                | Description                    |
| ------------ | ------------------- | ------------------------------ |
| ItemQuantity | <code>number</code> | quantity item from the basket. |
| unitPrice    | <code>number</code> | product unit price.            |

<a name="beardDiscountCalculation"></a>

## beardDiscountCalculation ⇒ <code>Object</code>

Calculate the related discount and total price depend on another item (in our case, the butter is the item) quantity

**Returns**: <code>Object</code> - return an object with discountPrice and paidTotalPrice keys.

| Param              | Type                | Description                          |
| ------------------ | ------------------- | ------------------------------------ |
| butterItemQuantity | <code>number</code> | butter items quantity on the basket. |
| beardItemQuantity  | <code>number</code> | beard items quantity on the basket.  |
| unitPrice          | <code>number</code> | unit price of the beard product.     |

<a name="calculateStatememnt"></a>

## calculateStatememnt ⇒<code>Object</code>

Calculate the statement on the basket.

**Returns**: Object with subTotal, discount, and total keys.

| Param      | Type                              | Description                          |
| ---------- | --------------------------------- | ------------------------------------ |
| itemsArray | <code>Array.&lt;Object&gt;</code> | array of object added to the basket. |
