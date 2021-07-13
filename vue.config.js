module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    host: "localhost", /// frontend hostname or ip
    disableHostCheck: true,
    port: 8080, // frontend port
    https: false, // no ssl
    proxy: { // proxy everything from frontend http://localhost:8080/api/** to backend at 
      // that is why all api path on backend should begin with /api
      "/api":{ target: "http://127.0.0.1:8081"}, 
    },
    headers: {
      // typical headers settings
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization,"
    },
  },
  
};
