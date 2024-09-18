export const defaultIgnoreList = [
  // Version control
  '.git/**',
  '.hg/**',
  '.hgignore',
  '.svn/**',

  // Dependency directories
  'node_modules/**',
  '**/node_modules/**',
  'bower_components/**',
  '**/bower_components/**',
  'jspm_packages/**',
  '**/jspm_packages/**',
  'vendor/**',
  '.bundle/**',
  '.gradle/**',
  'target/**',

  // Logs
  'logs/**',
  '**/*.log',
  'npm-debug.log*',
  'yarn-debug.log*',
  'yarn-error.log*',

  // Runtime data
  'pids/**',
  '*.pid',
  '*.seed',
  '*.pid.lock',

  // Directory for instrumented libs generated by jscoverage/JSCover
  'lib-cov/**',

  // Coverage directory used by tools like istanbul
  'coverage/**',

  // nyc test coverage
  '.nyc_output/**',

  // Grunt intermediate storage
  '.grunt/**',

  // node-waf configuration
  '.lock-wscript',

  // Compiled binary addons
  'build/Release/**',

  // TypeScript v1 declaration files
  'typings/**',

  // Optional npm cache directory
  '.npm/**',

  // Optional eslint cache
  '.eslintcache',

  // Optional REPL history
  '.node_repl_history',

  // Output of 'npm pack'
  '*.tgz',

  // Yarn files
  '.yarn/**',

  // Yarn Integrity file
  '.yarn-integrity',

  // dotenv environment variables file
  '.env',

  // next.js build output
  '.next/**',

  // nuxt.js build output
  '.nuxt/**',

  // vuepress build output
  '.vuepress/dist/**',

  // Serverless directories
  '.serverless/**',

  // FuseBox cache
  '.fusebox/**',

  // DynamoDB Local files
  '.dynamodb/**',

  // TypeScript output
  'dist/**',

  // OS generated files
  '**/.DS_Store',
  '**/Thumbs.db',

  // Editor directories and files
  '.idea/**',
  '.vscode/**',
  '**/*.swp',
  '**/*.swo',
  '**/*.swn',
  '**/*.bak',

  // Package manager locks
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',

  // Build outputs
  'build/**',
  'out/**',

  // Temporary files
  'tmp/**',
  'temp/**',

  // repopack output
  'repopack-output.txt',

  // Essential Python-related entries
  '**/__pycache__/**',
  '**/*.py[cod]',
  'venv/**',
  '.venv/**',
  '.pytest_cache/**',
  '.mypy_cache/**',
  '.ipynb_checkpoints/**',
  'Pipfile.lock',
  'poetry.lock',
];
