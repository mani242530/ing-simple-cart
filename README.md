# ing-simple-cart

#### simple ES6 shopping cart

This project utilizes the localStorage to create a shopping cart

## Demo

[Shopping Cart demo](https://github.com/mani242530/ing-simple-cart)

## Install:

Use npm or yarn to add it to your ES6 project:

```
npm install ing-simple-cart
```

```
yarn add ing-simple-cart
```

```javascript
import { add, total } from 'ing-simple-cart';

add({ productId: 1007404, title: 'Kneipp Home Fragrances Pakket', price: 26 });
add({ productId: 1006739, title: 'Philips Hue 20% kortingsvoucher', price: 10 }, 2);

console.log(total());
// output: 46
```

## Bundled version (ES5) via CDN:

```html
<script
  src="https://unpkg.com/ing-simple-cart@1.0.3/dist/ing-simple-cart.min.js"
  type="text/javascript"
></script>
```

```javascript
shoppingCart.add({ productId: 1007404, title: 'Kneipp Home Fragrances Pakket', price: 26 });
shoppingCart.add({ productId: 1006739, title: 'Philips Hue 20% kortingsvoucher', price: 10 }, 2);

console.log(shoppingCart.total());
// output: 46
```

## Documentation

#### add(product, [quantity:1])

Adds product to the cart. If the product already exists it increases the quantity with 1.
The product object structure is flexible, only "productId" and "title" and "price" are mandatory properties.

```javascript
const myproduct = { productId: 1226739, title: 'My first voucher', price: 75 };
add(myproduct, 2);
```

#### get(productId)

Get product from the cart by productId

```javascript
get(1226739);
//  {productId: 1226739, title: "My first voucher", price: 75,  quantity: 1}
```

#### exists(productId)

Checks if the product already exists in the cart

```javascript
exists(1226739);
// true or false
```

#### list()

Get the content of the cart as an array of products.

```javascript
list();
// [{productId: 1226739, title: "My first voucher", price: 75,  quantity: 1}, {productId: 1007404, title: "Kneipp Home Fragrances Pakket", price: 26, quantity: 1}]
```

#### products()

Get the content of the product as an array of products.

```javascript
products();
// [{productId: 1226739, title: "My first voucher", price: 75,  quantity: 1}, {productId: 1007404, title: "Kneipp Home Fragrances Pakket", price: 26, quantity: 1}]
```

#### remove(productId)

Removes the product from the cart

```javascript
remove(1006739);
```

#### update(productId, property, value)

Updates the product's property with a certain value.

```javascript
update(1226739, 'My first voucher', 75);
```

#### quantity(productId, diff)

Increase / decrease product's quantity with a positive or negative value.

```javascript
quantity(1226739, -2); // will decrease the quantity of product [productId:1226739] with 2.
```

#### total([reducer])

By default returns with the total price:

```javascript
total();
// 220
```

or you can pass a custom reducer function to have full control over the calculation.

#### destroy()

Deletes the cart array from the browser's localStorage.

```javascript
destroy();
```

## License

This plugin is available under Apache 2.0 license.
