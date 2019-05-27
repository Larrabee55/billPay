const crypto = require('crypto');

// Store in .env file
const secret = '2';


const hash = crypto.createHmac('sha256', secret)
    .update('pepe')
    .digest('hex');
console.log(hash);
