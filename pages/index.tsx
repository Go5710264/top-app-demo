import Logotype from "../components/Logotype/Logotype";
import { Htag, Button, Container, Icon, Ptag, Tag, Rating } from "../components";
import { TextContainer } from "../components/TextContainer/TextContainer";
import SearchString from "../components/SearchString/SearchString";

export default function MainPage(): JSX.Element {
  return (
    <section className="section">
      <div className="container-box">
        <Container typeContainer='header'>
          <Logotype/>
          <Container typeContainer='input' mobileHide = {true}>
            <SearchString bgColor="Main/Dimming-gray"/>
            <Icon svg='IconLoupe' alt='Поиск'></Icon>
          </Container>
          <Container typeContainer='buttons'>
            <Button appearance='gradient' className="first-button">7 дней за 0 ₽</Button>
            <Button appearance='gray'>Промокод</Button>
            <Button appearance='transparent' fontSize='m'>Вход</Button>
          </Container>
        </Container>
        <Htag tag={'h5'} children={'Новинки'}/>
        <Htag tag={'h4'} children={'Смотри зарубежное кино'}/>
        <Htag tag={'h3'} children={'Топ недели'}/>
        {/* <Button appearance='gray' icon={true}>Ввести промокод</Button> */}
        <Container typeContainer='buttons'>
          <Button appearance='gradient'>Подробнее</Button>
          <Button appearance="gray" icon={true}>
            <Icon svg="IconBookmark" alt='Добавить в избранное'/>
          </Button>
          <Button appearance="gray" icon={true}>
            <Icon svg="IconHeart" alt='Добавить в понравившиеся'/>
          </Button>
          <Button appearance="gray" icon={true}>
            <Icon svg="IconArrowRight" alt='Отправить ссылку'/>
          </Button>
        </Container>
        <TextContainer>
          <Ptag appearance="description-main">Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.</Ptag>
        </TextContainer>
        <TextContainer>
          <Ptag appearance="description-series">Прекрасная планета Пандорра по-прежнему похожа на рай, где нашел себе приют бывший солдат Салли. Подрастают дети его нового народа, они играют на морских рифах и в подводном царстве. Кроме подростков на’ви на Пандорре растет и земной ребенок Джек Чемпион. Воскресают те, кто умер в былых сражениях: героиня Сигурни Уивер и зловещий полковник. Наконец, и земные корпорации снова предъявляют свои права на богатства Пандорры. Независимость фантастического первобытного рая придется отстаивать всем, кто его населяет.</Ptag>
        </TextContainer>
        <Tag size="s" bgColor="Main/Blue">7,9</Tag>
        <Tag size="s" bgColor="Main/Blue">8,9</Tag>
        <Tag size="s" bgColor="Main/Blue">9,0</Tag>
        <Tag size="m" >Субтитры</Tag>
        <Tag size="m" >Дубляж</Tag>
        <Tag size="m" >FULL HD</Tag>
        <Tag size="l" bgColor="Main/Dimming-gray" border="Main/White30" >Новый сезон</Tag>
        <Tag size="l" bgColor="Main/Dimming-gray" border="Main/White30" >Премьера</Tag>
        <Tag size="l" bgColor="Main/Dimming-gray" border="Main/White30" >43:54</Tag>
        <Container typeContainer="rating">
          <Rating rating={4}></Rating>
        </Container>
      </div>
    </section>
  );
}
