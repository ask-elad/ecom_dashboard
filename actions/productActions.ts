"use server";

import dbConnect from "../lib/mongodb"; 

import Product from "../models/Product"; 

import { revalidatePath } from "next/cache";

export async function createProduct(data: any) {
  try {
    await dbConnect();
    await Product.create(data);
    revalidatePath("/products");
    return { success: true };
  } catch (error: any) {
    console.error("Database Error:", error);
    return { success: false, error: error.message };
  }
}
export async function deleteProduct(id: string) {
  try {
    await dbConnect();
    await Product.findByIdAndDelete(id);
    revalidatePath("/products"); 
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}