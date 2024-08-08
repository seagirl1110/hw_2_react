function ShoppingList({ items }) {
  const renderList = (list) => (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  const message = <p>Shopping list is empty.</p>;

  return <>{items.length ? renderList(items) : message}</>;
}

export default ShoppingList;
