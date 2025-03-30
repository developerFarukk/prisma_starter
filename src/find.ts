



import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async () => {

    // get all table data
    const getAllFromDB = await prisma.post.findMany();

    // find first
    const findFirst = await prisma.post.findFirst({
        where: {
            id: 2
        }
    });

    // find first error
    const findfirstss = await prisma.post.findFirstOrThrow({
        where: {
            published: false
        }
    });

    // find unique
    const findUnique = await prisma.post.findUnique({
        where: {
            id: 2
        },
        select: {
            title: true,
            // content: true,
            // authorName: true
        }
    })


    // find unique and find unique or throw error
    const findUniquet = await prisma.post.findUniqueOrThrow({
        where: {
            id: 9
        },
        select: {
            title: true,
            // content: true,
            // authorName: true
        }
    })

    console.log(findUniquet);
    


}

main();
