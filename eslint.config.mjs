import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  { ignores: ['_extract/**', '.next/**'] },
  {
    rules: {
      // Images are served as the export ships them (plain <img> with Framer's own
      // srcset and sizes) so the rendering stays identical; next/image would
      // change the markup and the crops.
      '@next/next/no-img-element': 'off',
      // Navigation is full page loads, like the exported site: the markup is
      // generated with plain anchors and the animation layer runs on load.
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
];
