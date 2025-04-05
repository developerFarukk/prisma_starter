
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
    const createUser = prisma.user.create({
        data: {
            username: "semol",
            email: "semi@om.com"
        }
    });


    const updateUser = prisma.user.update({
        where: {
            id: 1
        },
        data: {
            age: 22
        }
    });

    const [userData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ]);

    console.log(userData, updateData);
};

batchTransaction();