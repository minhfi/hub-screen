require('dotenv').config()

const PORT = process.env.REACT_APP_PORT || 3000

module.exports = {
  apps: [
    {
      name: `NEYU:${PORT}`,
      script: 'index.js',
      watch: false,
      exec_mode: 'fork',
      merge_logs: true,
      log_file: './pm2logs/neyu_log.log',
      out_file: './pm2logs/neyu_out.log',
      error_file: './pm2logs/neyu_error.log',
      env: {
        PORT,
        NODE_ENV: 'staging'
      }
    }
  ]
}
