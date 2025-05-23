

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const updates = async () => {

    // Update single data
    // const singleUpdate = await prisma.post.update({
    //     where: {
    //         id: 7
    //     },
    //     data: {
    //         title: "Title 5",
    //         content: "Content 5",
    //         authorName: "Author 5",
    //         author: "author 5"
    //     }
    // });

    // console.log(singleUpdate);
    


    // update many
    // const updateMany = await prisma.post.updateMany({
    //     where: {
    //         title: "title 2"
    //     },
    //     data: {
    //         published: true
    //     }
    // })

    // console.log(updateMany)


    // update or create data
    const upsertData = await prisma.post.upsert({
        where: {
            id: 16
        },
        update: {
            authorName: "Faruk",
            title: "Title 16",
            content: "content 16"
        },
        create: {
            title: "Title 15",
            content: "content 2",
            author: "Faruk"
        }
    });

    console.log(upsertData)
};

updates();