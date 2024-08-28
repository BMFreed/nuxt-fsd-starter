module.exports = {
  rules: {
    'jsdoc/require-jsdoc': [
      'error',
      {
        contexts: [
          'TSPropertySignature',
          'TSMethodSignature',
          'TSTypeAliasDeclaration',
          'TSInterfaceDeclaration',
          'TSEnumDeclaration',
          'MethodDefinition',
          'ClassDeclaration',
          'ArrowFunctionExpression',
          'ObjectExpression',
          'PropertyDefinition',
        ],
        publicOnly: true,
        checkConstructors: false,
      },
    ],
    'jsdoc/require-param': 'off',
    'jsdoc/require-returns': 'off',
  },
}
