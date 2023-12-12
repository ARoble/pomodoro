import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  try {
    const todos = await prisma.todos.findMany();
    return NextResponse.json({ todos });
  } catch (e) {
    return NextResponse.json({ error: "error" });
  }
}

export async function POST(req: Request) {
  try {
    const { task, userId } = await req.json();

    const todo = await prisma.todos.create({
      data: { todo: task, userId: userId },
    });
    return NextResponse.json(todo);
  } catch (e) {
    console.log(e);

    return NextResponse.json({ error: "someghing" });
  }
}
