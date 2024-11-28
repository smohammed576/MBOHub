import axios from 'axios';
window.axios = axios;
console.log(window.axios.defaults.headers);
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
