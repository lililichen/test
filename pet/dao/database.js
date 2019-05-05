//
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/msg';  // 其中 test 为连接的数据库名称,改成需要使用的 
mongoose.connect(dbURI, {useNewUrlParser: true});
mongoose.connection.on('connected', function() {  
    console.log('Mongoose connected to ' + dbURI);
});
//