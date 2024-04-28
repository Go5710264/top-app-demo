import Logotype from "../components/Logotype/Logotype";
import { Htag, Button, ButtonContainer, Icon } from "../components";
import { TextContainer } from "../components/TextContainer/TextContainer";
import { Ptag } from "../components/Ptag/Ptag";

export default function MainPage(): JSX.Element {
  return (
    <section className="section">
      <div className="container-box">
        <Htag tag={'h5'} children={'Новинки'}/>
        <Htag tag={'h4'} children={'Смотри зарубежное кино'}/>
        <Htag tag={'h3'} children={'Топ недели'}/>
        <Logotype/>
        <ButtonContainer>
          <Button appearance='gradient' className="first-button">7 дней за 0 ₽</Button>
          <Button appearance='gray'>Промокод</Button>
          <Button appearance='gray' icon="souvenir">Ввести промокод</Button>
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
        <TextContainer>
          <Ptag appearance="description-main">Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.</Ptag>
        </TextContainer>
        <TextContainer>
          <Ptag appearance="description-series">Прекрасная планета Пандорра по-прежнему похожа на рай, где нашел себе приют бывший солдат Салли. Подрастают дети его нового народа, они играют на морских рифах и в подводном царстве. Кроме подростков на’ви на Пандорре растет и земной ребенок Джек Чемпион. Воскресают те, кто умер в былых сражениях: героиня Сигурни Уивер и зловещий полковник. Наконец, и земные корпорации снова предъявляют свои права на богатства Пандорры. Независимость фантастического первобытного рая придется отстаивать всем, кто его населяет.</Ptag>
        </TextContainer>
      </div>
    </section>
  );
}
