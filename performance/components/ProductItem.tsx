/* eslint-disable react/display-name */
import { memo, useState } from "react";
import dynamic from 'next/dynamic';
import { AddProductToWhiteListProps } from "./AddProductToWhiteList";
import lodash from 'lodash'; 


const  AddProductToWhiteList = dynamic<AddProductToWhiteListProps>(() => {
 return import ('./AddProductToWhiteList').then(mod => mod.AddProductToWhiteList)
}, {
  loading: () => <span> Carregando</span>
})

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  };

  onAddToWhitelist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWhitelist }: ProductItemProps) {
  const [isAdding, setIsAdding] = useState(false);


  return (
   <div>
     {product.title} - <strong>{product.priceFormatted}</strong>

     <button onClick={() => setIsAdding(true)}>Adicionar aos favoritos</button>

    {isAdding && (
      <AddProductToWhiteList 
        onAddToWhiteList={() => onAddToWhitelist(product.id)} 
        onRequestClose={() => setIsAdding(false)} 
      />

    )}
   </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product)
})
