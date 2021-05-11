let database = [];

for(let i = 0; i < Infinity; i++) {
    let userReply = prompt('Введите команду');
    let check = userReply.split(', ');

    if(userReply == 'stop' | userReply == 'стоп') {
        break;
    }

    if(check[0] == 'add'){
        database.push(check[1]);
    }else if(check[0] == 'del'){
        for(let x = 0; x < database.length; x++) {
            check[1] == database[x] ? database.splice(x, 1) : '';
        }
    }

    console.log(database);
}