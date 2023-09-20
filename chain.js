// data access.
const data = [{id: 1, name: 'shamim', address:'rampura'}];

// console.log(data.address);  
// output is undefined.

// console.log(data);
 // output full object.

 console.log(data[0].address); // output only address.


 const products = {
    count:5000,
    data: [
        {id: 1, name: 'lenovo laptop', price:12300},
        {id: 2, name: 'macbook', price:122300},
    ]
 }

 // Second product price.
 console.log(products.data[1].price);


 const user = {
    id: 50001,
    name: 'shamim',
    address:{
        street: {
            first: '404/1 uttar shahjahanpur',
            second: 'dip sikha school er goli',
            third: 'babu vai er bari'
        },
        city: 'Dhaka'
    }
 }

//  console.log(user.address.street.second);


 const user2 = {
    id: 1000,
    name: 'sikdar',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
 }

 console.log(user.address.street.second);
 console.log(user2.address.street?.second);
