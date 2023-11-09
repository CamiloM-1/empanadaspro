
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { useModal } from "@/hooks/use-model-strore";
import { useRouter } from "next/navigation";
import { useState } from "react";


function EliminarProducto() {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === "deleteProduct";
  const { id, nombre } = data;

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    try {
      setIsLoading(true);

      if (id){
        await axios.delete(`/api/productos/${id}`);
      }
      onClose();
      router.refresh();
      router.push('/productos');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Eliminar producto
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Esta seguro que quiere eliminar el producto 
            <span className="text-indigo-500 font-semibold"> {nombre}</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button
              disabled={isLoading}
              onClick={onClose}
              variant="ghost"
            >
              Cancelar
            </Button>
            <Button
              disabled={isLoading}
              variant="secondary"
              onClick={onSubmit}
            >
              Confirmar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EliminarProducto