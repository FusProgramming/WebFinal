
const Express = require('express');
const Mongoose = require('mongoose');

const User = require('./models/user');
const Beer = require('./models/beer');
const Post = require('./models/registerpost');
const app = Express();

// Connect to the 'test' database. Ensure you have started the mongod process!
Mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
// When Mongoose has connected to your MongoDB, print out a log message
Mongoose.connection.once('open', () => console.log("Connected to database!"));

// We will use an Express Middleware called json. Middleware is called before any REST route gets your request.
// Middleware can reject requests prior to reaching your REST routes or append data to your route.
// The Express.json middleware provides easy to use JSON on POST requests.
app.use(Express.json());

// When a GET request comes in on this route, find all users in the database and return them with a 200 code
app.get('/api/user', async (request, response) => {

    console.log('A GET request came in asking for all users');

    const users = await User.find({});

    return response.send(users).status(200);
});

// When a POST request comes in on this route, create a new user and return success with a 200 code or failure with a 400 code
app.post('/api/users', async (request, response) => {
    console.log('A request came in with the body: ' + JSON.stringify(request.body));
    const { userName, firstName, lastName, emailAddress, password} = request.body;
    try {
        const existingUser = await User.findOne({ emailAddress: { $eq: emailAddress}});
        if(existingUser) {
            console.log(`A user with the email address '${emailAddress}' already exists, rejecting request with a 400`);
            return response.sendStatus(400);
        }

        await User.create({ userName: userName,
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            password: password
        });
        console.log(`A new user was created with name: '${userName}' and email address: '${emailAddress}'`);
        return response.sendStatus(200);
    } catch (error) {
        console.error('Something went wrong while creating a new user: ' + error.message);
        return response.sendStatus(400);
    }
});



//----------------------------------------------------------------------------------------------------------------------
app.get('/api/beer', async (request, response) => {

    console.log('A GET request came in asking for all users');

    const beers = await Beer.find({});

    return response.send(beers).status(200);
});

// When a POST request comes in on this route, create a new user and return success with a 200 code or failure with a 400 code
app.post('/api/beers', async (request, response) => {

    console.log('A request came in with the body: ' + JSON.stringify(request.body));

    const { storeName, beerName, beerType, address, city, state} = request.body;

    try {

        await Beer.create({
            storeName: storeName,
            beerName: beerName,
            beerType: beerType,
            address: address,
            city: city,
            state: state
        });

        console.log(`A new user was created with name: '${storeName}' and email address: '${beerName}'`);
        return response.sendStatus(200);

    } catch (error) {
        console.error('Something went wrong while creating a new user: ' + error.message);
        return response.sendStatus(400);
    }
});

app.delete('/api/beer', async (request, response) => {
    const { storeName, beerName, beerType, address, city, state} = request.body;

    try {

        console.log('Delete Request');
        const beers = await Beer.findOneAndDelete({});
        return response.send(beers).status(200);

    } catch (error) {
        console.error('Something went wrong while trying to delete: ' + error.message);
        return response.sendStatus(400);
    }
});



const port = 4100;
app.listen(port, () => console.log(`Server has started on localhost:${port}`))