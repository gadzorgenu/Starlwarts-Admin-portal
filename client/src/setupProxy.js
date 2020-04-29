const express = require('express');
import axios from 'axios';
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = (app) =>{
    app.use(
      '/auth/google',
      createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
      })
    );
    axios.use(
      '/api/*',
      createProxyMiddleware({
        target: 'http://localhost:5000'
      })
    );
  };