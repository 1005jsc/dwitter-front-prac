import React, {useState} from 'react';

const Sample2 = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [items, setItems] = useState([
    {id: 1, text: 'Item 1'},
    {id: 2, text: 'Item 2'},
    {id: 3, text: 'Item 3'},
  ]);

  const handleDragStart = (event, item) => {
    setDraggedItem(item);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleDrop = (event, targetItem) => {
    console.log('여기야여기');
    const updatedItems = items.map(item => {
      if (item.id === targetItem.id) {
        return draggedItem;
      }
      if (item.id === draggedItem.id) {
        return targetItem;
      }
      return item;
    });

    setItems(updatedItems);
  };

  const handleDragOver = event => {
    event.preventDefault(); // Prevent the default behavior to enable onDrop
  };

  return (
    <div>
      <h1>Drag and Drop Example</h1>
      <div className="items-container">
        {items.map(item => (
          <div
            key={item.id}
            className={`item ${draggedItem === item ? 'dragging' : ''}`}
            draggable
            onDragStart={e => handleDragStart(e, item)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver} // Prevent the default behavior
            onDrop={e => handleDrop(e, item)}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sample2;
