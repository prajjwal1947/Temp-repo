const os=require('os');
// console.log(os);

//information about user
const user=os.userInfo();
console.log(user);

//method returns ths system updates in secnods
console.log(`system uptimes ${os.uptime()} seconds`);

const curOs={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}
console.log(curOs);