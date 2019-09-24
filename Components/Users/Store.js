const listUsers =[];

function AddUser(user){
    listUsers.push(user);
    console.log(listUsers);
}

function GetUsers(){
    return listUsers;
}




module.exports ={
    add:AddUser,
    list: GetUsers
}