import './App.css';
import Greeting from './components/Greeting';
import OrderStatus from './components/OrderStatus';
import ShoppingList from './components/ShoppingList';

function App() {
  const products = ['Apple', 'Milk', 'Chocolate', 'Banana', 'Cake'];
  const orders = [
    { orderId: 123, status: 'в пути' },
    { orderId: 345, status: 'обработан' },
    { orderId: 26, status: 'доставлен' },
  ];

  return (
    <>
      <Greeting name="Alex" />
      <ShoppingList items={products} />

      {orders.map((item) => (
        <OrderStatus
          orderId={item.orderId}
          status={item.status}
          key={item.orderId}
        />
      ))}
    </>
  );
}

export default App;
