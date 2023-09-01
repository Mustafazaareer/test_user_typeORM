import { DataSource } from "typeorm";
import { User } from "./entity/User.js";

const dataSource = new DataSource({
    type:'mysql',
    host:"localhost",
    password:"passMustafa",
    database:"training",
    username:'root',
    logging:true,
    entities:[User],
    synchronize:true,

})

dataSource.initialize().then(()=>{
    console.log(`Success To Connected To DataBase!`)

}).catch(error=>{
    console.error(`Failed To Connect To DB: ${error}`)
})

export default dataSource;