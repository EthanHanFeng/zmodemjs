import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
  },
  plugins: [
    resolve({
      module: true,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
  ],
};
