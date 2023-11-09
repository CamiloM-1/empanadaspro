import { db } from "@/lib/db";
import { Producto } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
) {
  try {
    const pedidos = await db.pedido.findMany()
    return NextResponse.json(pedidos);
  } catch (error) {
    console.log('Get pedidos', error);
    return new NextResponse('Internal error', { status: 500} );
  }
}