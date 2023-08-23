
  const agregarBtn = document.getElementById('agregar');
  const limpiarBtn = document.getElementById('limpiar');
  const contenedor = document.getElementById('contenedor');
  const itemInput = document.getElementById('item');
  
  // Cargar elementos desde el Local Storage al cargar la página
  const storedItems = JSON.parse(localStorage.getItem('items')) || [];
  storedItems.forEach(itemText => {
    const item = document.createElement('li');
    item.className = 'list-group-item';
    item.textContent = itemText;
    contenedor.appendChild(item);
  });
  
  agregarBtn.addEventListener('click', () => {
    const newItemText = itemInput.value.trim();
    if (newItemText !== '') {
      const newItem = document.createElement('li');
      newItem.className = 'list-group-item';
      newItem.textContent = newItemText;
      contenedor.appendChild(newItem);
      
      // Agregar el nuevo ítem al Local Storage
      storedItems.push(newItemText);
      localStorage.setItem('items', JSON.stringify(storedItems));
      
      itemInput.value = ''; // Limpiar el campo
    }
  });
  
  limpiarBtn.addEventListener('click', () => {
    // Limpiar el Local Storage
    localStorage.removeItem('items');
    
    // Limpiar la vista
    contenedor.innerHTML = '';
  });