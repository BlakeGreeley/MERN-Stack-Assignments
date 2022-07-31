const { faker } = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8000;

app.listen(port, () => {
    console.log('Something is up and running on the port ${PORT}')
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))


const createUser = () => {
    return {
        _id: faker.datatype.uuid(),
        first_name: faker.name.firstName(),
        last_name:faker.name.lastName(),
        email: faker.internet.email(),
        password:faker.internet.password(), 
        phone_number:faker.phone.number()
    }
};

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.name.findName(),
        address: {
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zip:faker.address.zipCode(),
            country:faker.address.country()
        }
    }
};

app.get('/users/new', (req, res) => {

    const user = createUser()
    res.json(user)
});

app.get('/companies/new', (req, res) => {
    console.log(req.url, req.method)
    const company = createCompany()
    res.json(company)
});

app.get('/user/company', (req, res) => {
    console.log(req.url, req.method)
    const company = createCompany()
    const user = createUser()
    res.json( company )
    res.json ( user )
});



