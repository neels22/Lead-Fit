

import { PrismaClient} from "@prisma/client"


const prisma = new PrismaClient();

// this is how to insert into db using client that prisma provided 
async function InsertIntoUsers(email:string,firstname:string,lastname:string,password:string) {

    const res = await prisma.user.create({
        data:{
            email,
            password,
            firstname,
            lastname
        }
    })

    console.log(res)
    
}

// InsertIntoUsers("neel@gmail.com","asd","adsf","adsf")


interface Updateparams{
    firstname:string,
    lastname:string
}


async function updateUsername(username:string,{
    firstname,
    lastname
}:Updateparams) {
    
   const res = await prisma.user.update({
        where:{email:username},
        data:{
            firstname,
            lastname
        }
    })
    console.log(res)

}

updateUsername("neel@gmail.com",{
    firstname:"neellll",
    lastname:"sarode"
})