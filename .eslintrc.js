module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	settings: {
		react: {
			version: 'detect'
		}
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	plugins: [
		'react',
		'react-hooks',
		'@typescript-eslint',
		'simple-import-sort',
		'import',
		'prettier'
	],
	ignorePatterns: ['!.prettierrc.js', '!.graphqlrc.js'],
	rules: {
		'prettier/prettier': 'warn',
		'no-console': 'warn',
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					// Node.js builtins.
					[
						'^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'
					],
					// Packages. `react` related packages come first.
					['^react', '^@?\\w'],
					// Internal packages.
					[
						'^(components|hooks|layouts|lib|models|styles|__generated__)(?!.*\\u0000$)(/.*|$)'
					],
					// Side effect imports.
					['^\\u0000'],
					// Parent imports. Put `..` last.
					['^\\.\\.(?!/?$)', '^\\.\\./?$'],
					// Other relative imports. Put same-folder imports and `.` last.
					['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
					// Style imports.
					['^.+\\.s?css$'],
					// Type imports.
					['^.*\\u0000$']
				]
			}
		],
		'import/no-duplicates': 'warn',
		'react/jsx-uses-react': 'off',
		'react/no-children-prop': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_'
			}
		],
		'@typescript-eslint/no-var-requires': 'off'
	}
}
