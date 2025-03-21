import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../libs/Axios";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}
 
interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions:(query?:string)=>Promise<void>
}


interface TransactionProviderProps {
    children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?:string) {
 const response = await  api.get('transactions',{
    params:{
        q:query,

    }
 })


        setTransactions(response.data)
    }

    useEffect(() => {
        fetchTransactions();

    }, [])


    return (
        < TransactionsContext.Provider value={{ 
            transactions,
            fetchTransactions
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}