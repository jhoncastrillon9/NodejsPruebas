const store = require('./Store');

function AddUser(User, Message){
return new Promise ((resolve, reject)=>{
    if (!User.salary){
        console.error('{UserController} No hay usuario');
        reject('Los datos son incorrectos, Revise por favor')
        return false;
    }
    const fullUser={
        name:User.name,
        salary:User.salary,
        married:User.married,
        date: new Date()
    };

    store.add(fullUser);

    resolve(fullUser);
    

});




}

function AllUser(){    
    //
return new Promise((resolve, reject)=>{
resolve(store.list());
})

    store.list();
    }

module.exports = {
    AddUser,
    AllUser
};