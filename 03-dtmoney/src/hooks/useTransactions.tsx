import { createContext, useEffect, useState, ReactNode, useContext } from 'react'
import { api } from '../services/api';

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionsInput = Omit<TransactionProps, 'id' | 'createdAt'>
// type TransactionsInput = Pick<TransactionProps, 'title' | 'amount' | 'type' | 'category'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transactions: TransactionsInput) => Promise<void>;
}

 const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);


export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [ transactions, setTransactions] =useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionsInput) {
   const response = await api.post('/transactions', {
     ...transactionInput, 
     createdAt: new Date(),
   });    

   const newTransaction = response.data.transactions;



   setTransactions([...transactions, newTransaction]);
  }


  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}

