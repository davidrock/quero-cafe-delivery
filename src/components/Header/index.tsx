import { ActionsContainer, Button, HeaderContainer, Localization } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header () {
  return (
    <HeaderContainer>
      <img src={logo} alt=''/>
      <ActionsContainer>
        <Localization>
          <MapPin  weight="fill" />
          Vitória - ES
        </Localization>
        <Button>
          <ShoppingCart size={22} weight="fill"/>
        </Button>
      </ActionsContainer>
    </HeaderContainer>
  )
}