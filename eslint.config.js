import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwindcss from 'eslint-plugin-tailwindcss';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default tseslint.config(
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'build/**',
            '.next/**',
            'coverage/**',
            '*.config.js',
        ],
    },

    js.configs.recommended,

    ...tseslint.configs.recommendedTypeChecked,

    {
        files: ['**/*.{js,jsx,ts,tsx,mjs,mts}'],

        plugins: {
            react,
            'react-hooks': reactHooks,
            'jsx-a11y': jsxA11y,
            import: importPlugin,
            prettier,
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
            tailwindcss,
        },

        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2022,
            },
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.mts'],
                },
            },
        },

        rules: {
            'prettier/prettier': [
                'error',
                {
                    semi: true,
                    trailingComma: 'es5',
                    singleQuote: true,
                    printWidth: 80,
                    tabWidth: 4,
                    useTabs: false,
                    endOfLine: 'auto',
                    bracketSpacing: true,
                    arrowParens: 'avoid',
                    plugins: ['prettier-plugin-tailwindcss'],
                },
            ],

            // Imports
            'import/extensions': 'off',
            'import/prefer-default-export': 'off',
            'import/no-unresolved': 'off',
            'import/order': 'off',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',

            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: true,
                    optionalDependencies: false,
                    peerDependencies: false,
                    bundledDependencies: false,
                },
            ],

            // Unused imports / vars
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],

            // TypeScript
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/default-param-last': 'off',
            '@typescript-eslint/no-throw-literal': 'off',

            // General
            'no-restricted-syntax': [
                'error',
                'ForInStatement',
                'LabeledStatement',
                'WithStatement',
            ],
            'no-param-reassign': 'off',
            'no-underscore-dangle': 'off',
            'no-nested-ternary': 'off',
            'no-plusplus': 'off',

            // React
            'react/react-in-jsx-scope': 'off',
            'react/function-component-definition': 'off',
            'react/destructuring-assignment': 'off',
            'react/require-default-props': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/button-has-type': [
                'error',
                {
                    reset: true,
                },
            ],

            // A11y
            'jsx-a11y/no-noninteractive-element-interactions': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',

            // Tailwind
            'tailwindcss/no-custom-classname': 'off',
            "@typescript-eslint/no-explicit-any": "off",
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off'
        },
    }
);