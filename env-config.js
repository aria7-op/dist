// Environment Configuration for Browser
// This file injects environment variables into the browser window object

(function() {
  // Environment variables for browser
  window.REACT_APP_API_ENCRYPTION_KEY = 'c95fe0b21339143a5e9bda7fd12415e8';
  window.REACT_APP_API_BASE_URL = 'https://khwanzay.school/api';
  window.REACT_APP_WS_BASE_URL = 'wss://khwanzay.school:4000';
  window.REACT_APP_API_TIMEOUT = '10000';
  window.REACT_APP_API_ANDROID_TIMEOUT = '30000';
  window.NODE_ENV = 'development';
})(); 