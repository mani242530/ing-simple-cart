import { user, products, list, save, clear, listen } from './utils/localstorage'
import pkg from './package.json';
import '@lion/input/lion-input.js';
import '@lion/button/lion-button.js';
import '@lion/radio-group/lion-radio.js';
import '@lion/radio-group/lion-radio-group.js';
import '@lion/form/lion-form.js';

console.log(`running version ${pkg.version}`);

const get = (id) => list().find((product) => product.productId === id)

const exists = (id) => !!get(id)

const add = (product, quantity) => isValid(product) ? exists(product.productId) ? update(product.productId, 'quantity', get(product.productId).quantity + (quantity || 1)) : save(list().concat({ ...product, quantity: quantity || 1 })) : null;

const remove = (id) => save(list().filter((product) => product.productId !== id))

const quantity = (id, diff) => exists(id) && get(id).quantity + diff > 0 ? update(id, 'quantity', get(id).quantity + diff) : remove(id);

const update = (id, field, value) => save(list().map((product) => product.productId === id ? ({ ...product, [field]: value }) : product))

const total = (cb) => list().reduce((sum, product) => isCallback(cb) ? cb(sum, product) : (sum += subtotal(product)), 0);

const destroy = () => clear()

const onChange = (cb) => isCallback(cb) ? listen(cb) : console.log(typeof cb)

const isValid = (product) => product.productId && product.price

const subtotal = (product) => isCalcable(product) ? (product.price * product.quantity) : 0

const isCalcable = (product) => (product && product.price && product.quantity)

const isCallback = (cb) => cb && typeof cb === "function"

const cartCount = () => list().length;

export { user, products, list, get, add, remove, update, quantity, total, destroy, exists, subtotal, onChange, cartCount };

