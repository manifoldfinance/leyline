module.exports = {
  apps: [
    {
      name: "router-prom-target",
      script: "npm",
      args: "run start-target",
      cron_restart: "0 * * * *" // Restart every hour.
    },
    {
      name: "router-prom-proxy",
      script: "npm",
      args: "run start-proxy"
    }
  ]
};