import { List, ListRowRenderer } from 'react-virtualized';
import { ProductItem } from "./ProductItem";


interface SearchResultsProps {
  results: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }[];
  totalPrice: number;
  onAddToWhitelist: (id: number) => void;
}

export default function SearchResults({ results, onAddToWhitelist, totalPrice }: SearchResultsProps) {

  const  rowRender: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem         
        product={results[index]} 
        onAddToWhitelist={onAddToWhitelist}  />   
      </div>
    );
    
  }

  return (
   <div>

    <h2>{totalPrice}</h2>

    <List  
      height={300}
      rowHeight={30}
      width={900}
      overscanRowCount={5}
      rowCount={results?.length}
      rowRenderer={rowRender}
    />

    
   </div>
  )
}
