const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

// mongooes.connect("mongodb+srv://akbarimanali1032:123456789@cluster.lfwbxx5.mongodb.net/JWTtoken?", {
//     useNewUrlParser: true,
// }).then(() => {
//     console.log('DB Connection....done');
// }).catch((error) => {
//     console.log(error);
// })
// OFFLINE data 
mongooes.connect("mongodb://127.0.0.1:27017/JWTtoken", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('okkk---->');
}).catch((error) => {
    console.log(error);
})