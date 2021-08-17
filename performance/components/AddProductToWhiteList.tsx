export interface AddProductToWhiteListProps {
  onAddToWhiteList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWhiteList({
  onAddToWhiteList,
  onRequestClose
}: AddProductToWhiteListProps) {

  return (
    <>
      <span>Deseja adicionar a WhiteList ?</span>
      <button onClick={onAddToWhiteList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </>
  )
}