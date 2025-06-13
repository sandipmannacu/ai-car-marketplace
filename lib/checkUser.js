import { currentUser,auth } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const userData = await auth();
  console.log("User Data:", userData);
  const userId = userData?.userId;
  if (!userId) {
    return null;
  }

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: userId,
      },
    });

    if (loggedInUser) {
      return loggedInUser;
    }

    const name = `${loggedInUser.firstName} ${loggedInUser.lastName}`;
    const newUser = await db.user.create({
      data: {
        clerkUserId: userId,
        name,
        imageUrl: loggedInUser.imageUrl,
        email: loggedInUser.emailAddresses[0].emailAddress,
      },
    });
    return newUser;
  } catch (error) {
    console.log(error.message);
  }
};
