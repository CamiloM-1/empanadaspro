'use client'

import { useEffect, useState } from 'react'
import AgregarProducto from '@/components/productos/agregar-producto'
import EditarProducto from '@/components/productos/editar-producto'
import EliminarProducto from '@/components/productos/delete-product'

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect (() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <AgregarProducto />
      <EditarProducto/>
      <EliminarProducto />
    </>
  )
}

export default ModalProvider