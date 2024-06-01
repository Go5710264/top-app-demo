import Logotype from "../components/Logotype/Logotype";
import { Htag, Button, Container, Icon, Ptag, Tag, Rating } from "../components";
import { TextContainer } from "../components/TextContainer/TextContainer";
import SearchString from "../components/SearchString/SearchString";
import { useState } from "react";
import { Layout, withLayout } from "../layout/Layout";

function mainPage(): JSX.Element {
  const [rating, setRating] = useState<number>(2);
  return (
    <>
      <div className="containerBox">
        <Container typeContainer="preview">
          
        </Container>
        <Htag tag={'h5'} children={'Новинки'}/>
        <Htag tag={'h4'} children={'Смотри зарубежное кино'}/>
        <Htag tag={'h3'} children={'Топ недели'}/>
        {/* <Button appearance='gray' icon={true}>Ввести промокод</Button> */}
        <Container typeContainer='buttons' columnGap="s">
          <Button appearance='gradient' fontSize="m" padding="m">Подробнее</Button>
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
          <Rating rating={rating} isEditable setRating={setRating}></Rating>
        </Container>
      </div>
    </>
  );
}

export default withLayout(mainPage);
