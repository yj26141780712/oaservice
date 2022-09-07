module.exports = {
  apps: [
    {
      name: 'oaservice',
      script: 'dist/main.js',
      watch: false,
      ignore_watch: ['logs', 'template', 'dist/fileupload'],
      env: {
        NODE_ENV: 'dev',
      },
      env_pro: {
        NODE_ENV: 'pro',
      }
    },
  ],
}
