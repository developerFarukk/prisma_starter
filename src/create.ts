



import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async () => {

    // insert tavble data
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is contant title 2",
    //         content: "this is contant",
    //         authorName: "MD OMAR FARUK",
    //         author: "ami"
    //     }
    // });
    // console.log(result);

    // get all table data
    const getAllFromDB = await prisma.post.findMany();
    console.log(getAllFromDB);


}

main();
