'use client'

import axios from "axios";
import { Pedido, columns } from "./columns";
import { DataTable } from "./data-table"
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

async function getData( ): Promise<Pedido[]> {
  const response = await axios.get(`/api/pedidos/`);
  return response.data;
}

export default function Home() {
  const [data, setData] = useState<Pedido[]>([]);
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
      <div className="p-24 w-full">
        <h1 className="text-4xl text-center font-bold my-10">Pedidos Realizados</h1>
        <DataTable columns={columns} data={data}/>
      </div>
    </main>
  )
}
