

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const main = async () => {
const result = await prisma.post.create({
    data: {
        title: "This is contant title",
        content: "this is contant",
        authorName: "MD OMAR FARUK",
        author: "ami"
    }
})

}

main();
