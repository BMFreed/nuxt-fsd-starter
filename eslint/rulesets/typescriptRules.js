module.exports = {
  '@typescript-eslint/explicit-function-return-type': [
    'error',
    { allowExpressions: true },
  ],
  '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/method-signature-style': ['error', 'method'],
  '@typescript-eslint/no-unsafe-enum-comparison': 'off',
  'etc/no-misused-generics': 'off',
  '@typescript-eslint/no-empty-interface': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'explicit',
      overrides: {
        constructors: 'off',
      },
    },
  ],
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/no-magic-numbers': [
    'error',
    { ignore: [1, 0, -1], ignoreEnums: true, ignoreTypeIndexes: true },
  ],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    { assertionStyle: 'as' },
  ],
  //Много ложных срабатываний
  '@typescript-eslint/unbound-method': 'off',
  '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/prefer-function-type': 'off',
  '@typescript-eslint/prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: true,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: true,
      enforceForDeclarationWithTypeAnnotation: true,
    },
  ],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'default',
      format: ['strictCamelCase', 'StrictPascalCase'],
      filter: {
        regex: '(syncVModel|baseURL)',
        match: false,
      },
    },
    {
      selector: ['enum', 'class'],
      format: ['StrictPascalCase'],
    },
    {
      selector: ['enumMember'],
      format: ['UPPER_CASE'],
    },
    {
      selector: ['interface'],
      format: ['StrictPascalCase'],
      prefix: ['I'],
    },
    {
      selector: ['typeAlias'],
      format: ['StrictPascalCase'],
      prefix: ['T'],
    },
    {
      selector: ['typeParameter'],
      format: ['StrictPascalCase'],
    },
    {
      selector: ['objectLiteralProperty'],
      format: null,
      modifiers: ['requiresQuotes'],
    },
    {
      selector: 'import',
      format: ['PascalCase', 'strictCamelCase'],
    },
    {
      selector: 'parameter',
      format: ['camelCase'],
      modifiers: ['unused'],
      leadingUnderscore: 'allow',
    },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { fixStyle: 'inline-type-imports' },
  ],
}
