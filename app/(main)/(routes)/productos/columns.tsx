"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useModal } from "@/hooks/use-model-strore"

export type Product = {
  id: number
  nombre: string
  precio: number
}

export const ProductActionsCell: React.FC<{ id: number, nombre: string, precio: number }> = ({ id, nombre, precio }) => 
{
  const { onOpen } = useModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
        </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => onOpen('editProduct', { id, nombre, precio })}
          className="cursor-pointer"
        >
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen('deleteProduct', { id, nombre, precio })}
          className="cursor-pointer"
        >
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "nombre",
    header: "Nombre",
  },
  {
    accessorKey: "precio",
    header: "Precio",
  },
  {
    id: "actions",
    header: "Opciones",
    cell: ({ row }) => {
      const product = row.original
      return (
        <ProductActionsCell id={product.id} nombre={product.nombre} precio={product.precio} />
      )
    },
  },
]
