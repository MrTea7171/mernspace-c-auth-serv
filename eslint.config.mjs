// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: { allowDefaultProject: ['*.mjs'] },
                tsconfigRootDir: import.meta.dirname,
            },
        },

        rules: {
            // 'no-console': 'error',
            'dot-notation': 'error',
        },
    },
    {
        ignores: ['node_modules', 'dist'],
    },
);
