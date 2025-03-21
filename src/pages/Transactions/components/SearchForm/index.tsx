import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod'; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TransactionsContext } from "../../../../context/TransactionsContext";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const searchFormSchema = z.object({
    query:z.string(),
})


type SearchFormInputs = z.infer<typeof searchFormSchema>;
 
// eslint-disable-next-line react-hooks/rules-of-hooks


export function SearchForm() {

    const {fetchTransactions}= useContext(TransactionsContext)
    const { register, 
            handleSubmit,
            formState:{
                isSubmitting 
            }
        } = useForm<SearchFormInputs>({
        resolver:zodResolver(searchFormSchema)
    })
    async  function handleSearchTransactions(data:SearchFormInputs) {
       await fetchTransactions(data.query)

    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transacoes"
                {...register('query')} 
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}