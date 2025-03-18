import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearcForm(){
    return(
       <SearchFormContainer>
        <input type="text" placeholder="Busque por transacoes" />
        <button type="submit">
            <MagnifyingGlass size={20}/>
            Buscar
            </button>
       </SearchFormContainer>
    )
}