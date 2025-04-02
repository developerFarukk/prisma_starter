

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {

    // Delete single data
    // const singleDelete = await prisma.post.delete({
    //     where: {
    //         id: 14
    //     }
    // });

    // console.log(singleDelete);
    
// filter by delete many
// const deletefilterMany = await prisma.post.deleteMany({
//     where: {
//         published: false
//     }
// })

// console.log(deletefilterMany);


    // Delete all data
    const deleteMany = await prisma.post.deleteMany({})

    console.log(deleteMany);
};

deleteData();