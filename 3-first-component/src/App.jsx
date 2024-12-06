import './App.css';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import { DangerButton, SucessButton } from './components/Button';
import DynamicComponent from './components/DynamicComponent';
import Fruit from './components/Fruit';
import RandomNumber from './components/RandomNumber';
import Title from './components/TitleProps';
import FruitList from './components/FruitProps';
import ButtonComponet from './components/ButtonProps';

function App() {
  // const [count, setCount] = useState(0)
  const fruits = ['Apple', 'Apple', 'Banana', 'Orange', 'Grapes'];

  const count = [111, 222, 333, 4, 5, 6, 7, 8, 9];

  const clickMeHandler = () => {
    console.log('ClickMeHandler Clicked');

  };

  const DeleteHandler = () => {
    console.log('DeleteHandler Clicked');

  };

  const SendHandler = () => {
    console.log('SendHandler Clicked');

  };

  return (
    <>

      <FruitList LIST={fruits} />
      <FruitList />
      <FruitList LIST={count} />


      <ButtonComponet type='success' btxText='click me' handler={clickMeHandler} />
      <ButtonComponet type='danger' handler={DeleteHandler} btxText='Delete' />
      <ButtonComponet btxText='send' handler={SendHandler} />

      {/* Title component */}
      <Title textObject=" Hello I'm Passing through Props" />
      <Title textObject=" This is Akanksha Gupta" />

      <Title textObject=" Become Brutal!!" />





      {/* Uncomment these lines when needed */}     {/* <Heading /> */}

      {/* Use RandomNumber component twice */}
      {/* <RandomNumber />
      <RandomNumber /> */}

      {/* Use of Paragraph component */}
      {/* <Paragraph /> */}

      {/* Use of Button components */}
      {/* <DangerButton />
      <SucessButton /> */}

      {/* Use of DynamicComponent */}
      {/* <DynamicComponent /> */}

      {/* Use of Fruit component */}
      {/* <Fruit /> */}
    </>
  );
}

export default App;
