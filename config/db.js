/* not beting used*/
const mongoose = require('mongoose')

const url = `mongodb://kduffy:xgZBWqOSJxJYpbnD@cluster0-shard-00-00.tzgkf.mongodb.net:27017,cluster0-shard-00-01.tzgkf.mongodb.net:27017,cluster0-shard-00-02.tzgkf.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-3ln9ki-shard-0&authSource=admin&retryWrites=true&w=majority`;


const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
