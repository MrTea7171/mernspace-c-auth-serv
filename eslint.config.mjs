// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['*.mjs', '*.ts'],
                },
                tsconfigRootDir: import.meta.dirname,
            },
        },

        rules: {
            // 'no-console': 'error',
            'dot-notation': 'error',
            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: false,
                },
            ],
        },
    },
    {
        ignores: ['node_modules', 'dist', 'jest.config.js'],
    },
);
