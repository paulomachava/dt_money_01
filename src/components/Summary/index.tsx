import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary(){
    return(
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color="#00b373"/>
                </header>
                <strong>
                    17.500,09 Mzn  
                </strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Saidas</span>
                    <ArrowCircleDown size={32} color="#f75a68 "/>
                </header>
                <strong>
                    17.500,09 Mzn  
                </strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#00b373"/>
                </header>
                <strong>
                    17.500,09 Mzn  
                </strong>
            </SummaryCard>
        </SummaryContainer>
    )
}