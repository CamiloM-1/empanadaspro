'use client'

import { useEffect, useState } from "react"
import { Product, columns } from "./columns"
import { DataTable } from "./data-table"
import axios from "axios"
import { useRouter } from "next/navigation"

async function getData(): Promise<Product[]> {
  const response = await axios.get('/api/productos');
  return response.data;
}

export default function ProductsPage() {
  const [data, setData] = useState<Product[]>([]);
  const router = useRouter()

  useEffect(() => {
    async function fetchData() {
      const products = await getData();
      setData(products);
    }
    if (data !== data){
      router.refresh();
    }
    fetchData();
  }, [data, router]);


  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className='text-white font-bold text-4xl'>Productos</h1>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  )
}
