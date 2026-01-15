
  // 1. Najdeme naše menu podle ID
  const menuElement = document.getElementById('menuTlacitko');

  // 2. Přidáme posluchač kliknutí
  menuElement.addEventListener('click', function(event) {
    // Zabráníme, aby se kliknutí "propadlo" někam jinam
    event.stopPropagation();
    
    // Přepneme třídu 'otevreno' (zapne/vypne)
    this.classList.toggle('otevreno');
  });

  // 3. Vychytávka: Zavření menu, když klikneš kamkoliv jinam na stránku
  document.addEventListener('click', function() {
    menuElement.classList.remove('otevreno');
  });