export default {
    'env': {
      'browser': true,
      'es2021': true,
      'node': true
    },
    'extends': 'eslint:recommended',
    'overrides': [],
    'ignorePatterns': ["dist"],
    'parserOptions': {
      'ecmaVersion': 'latest',
      'sourceType': 'module'
    },
    'rules': {}
  }