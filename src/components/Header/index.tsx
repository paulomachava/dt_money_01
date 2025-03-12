import { HeaderContainer, HeaderContent, NewTransacionButton } from "./styles";
import logoImg from '../../assets/logo.svg'

export function Header(){
    return(
       <HeaderContainer>
           <HeaderContent>
            
            <img src={logoImg} alt="" />
            
            <NewTransacionButton>Nova transacao</NewTransacionButton>
           </HeaderContent>

       </HeaderContainer>
    )
}