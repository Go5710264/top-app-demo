import Logotype from "../components/Logotype/Logotype";
import { Htag, Button, ButtonContainer, Icon } from "../components";

export default function MainPage(): JSX.Element {
  return (
    <section className="section">
      <div className="container-box">
        <Htag tag={'h5'} children={'Новинки'}/>
        <Htag tag={'h4'} children={'Смотри зарубежное кино'}/>
        <Htag tag={'h3'} children={'Топ недели'}/>
        <Logotype/>
        <ButtonContainer>
          <Button appearance='gradient'>7 дней за 0 ₽</Button>
          <Button appearance='gray'>Промокод</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button appearance='gradient'>Подробнее</Button>
          <Button appearance="gray">
            <Icon path='/bookmark.svg' alt='Добавить в избранное'/>
          </Button>
          <Button appearance="gray">
            <Icon path='/heart.svg' alt='Добавить в понравившиеся'/>
          </Button>
          <Button appearance="gray">
            <Icon path='/rightArrow.svg' alt='Отправить ссылку'/>
          </Button>
        </ButtonContainer>
      </div>
    </section>
  );
}
