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
    return NextResponse.json({ error: "someghing" });
  }
}

export async function DELETE(req: Request) {
  try {
    const { todo } = await req.json();

    await prisma.todos.delete({ where: { id: todo } });
    // const todo = await prisma.todos.create({
    //   data: { todo: task, userId: userId },
    // });
    return NextResponse.json({ message: "Deleted todo" });
  } catch (e) {
    return NextResponse.json({ error: "someghing" });
  }
}

export async function PUT(req: Request) {
  try {
    const { todoId, completed } = await req.json();

    await prisma.todos.update({
      where: { id: todoId },
      data: {
        isComplete: completed,
      },
    });
    return NextResponse.json({ message: "Editied todo" });
  } catch (e) {
    return NextResponse.json({ error: "someghing" });
  }
}
