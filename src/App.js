import './App.css';
import Greeting from './components/Greeting';
import ShoppingList from './components/ShoppingList';

function App() {
  const products = ['Apple', 'Milk', 'Chocolate', 'Banana', 'Cake'];

  return (
    <>
      <Greeting name="Alex" />
      <ShoppingList items={products} />
    </>
  );
}

export default App;
