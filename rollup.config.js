import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default {
	input: './index.js',
	output: {
		file: './dist/ing-simple-cart.min.js',
		name: 'shoppingCart',
		format: 'iife',
		compact: true,
		sourcemap: true,
	},
	plugins: [
		babel({
			babelHelpers: 'runtime',
			skipPreflightCheck: true
		}),
		resolve(),
		commonjs(),
		json()
	]
}