import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearcForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

export function Transactions(){
    return(
       <div>
          <Header/>
          <Summary/>
        <TransactionContainer>
            <SearcForm/>
            <TransactionTable>
            <tbody>
                <tr>
                    <td width="50%">Desenvolvimento de site</td>
                    <td><PriceHighlight variant="income">12 Mzn</PriceHighlight></td>
                    <td>Venda</td>
                    <td>13 de maio 2021</td>
                </tr>
              
                <tr>
                    <td width="50%">pao de queijo</td>
                    <td><PriceHighlight variant="outcome">-12 Mzn</PriceHighlight></td>
                    <td>Venda</td>
                    <td>13 de maio 2021</td>
                    
                </tr>
            </tbody>
            </TransactionTable>
        </TransactionContainer>
      
        </div>
       
    )
}