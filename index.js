require('alexa-home-server').start({
  subdomain: 'dusi',

  onTunnelStart: function (tunnel) {
    console.log('Tunnel URL: %s', tunnel.url);
  },

  onTunnelError: function (err) {
   console.error('Tunnel Error: %s', err.message);
 },

  verify: true,
  debug: false,
  server_root: __dirname,
  port: 4000
});
