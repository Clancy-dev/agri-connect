"use server"


import { CategoryProps } from "@/components/Forms/CategoryForm";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function createNewCategory(data:CategoryProps){
 try {
  const createdNewCategory = await db.category.create({
    data
  })
 revalidatePath("/")

  return createdNewCategory
  
 } catch (error) {
  console.log(error)
 }
}



