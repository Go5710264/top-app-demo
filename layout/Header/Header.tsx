import { HeaderProps } from "./Header.props"
import styles from "./Header.module.scss"
import cn from 'classnames';
import { Logotype, SearchString, Container, Icon, Button } from "../../components";

export const Header = ({...props}:HeaderProps) => {
    return(
        // <header className='containerBox' {...props}>
        <Container className="containerBox" typeContainer='header' {...props}>
          <Logotype/>
          <Container typeContainer='input' mobileHide = {true}>
            <SearchString bgColor="Main/Dimming-gray"/>
            <Icon svg='IconLoupe' alt='Поиск'></Icon>
          </Container>
          <Container typeContainer='buttons' columnGap="m">
            <Button appearance='gradient' padding='s'>7 дней за 0 ₽</Button>
            <Button appearance='gray' padding='s'>Промокод</Button>
            <Button appearance='transparent' fontSize='l' >Войти</Button>
          </Container>
        </Container>
        // </header>
    )
}