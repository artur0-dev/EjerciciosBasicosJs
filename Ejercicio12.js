const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    let limpio= [];
    for (let i = 0; i < duplicates.length; i++) {
        if (!limpio.includes(list[i])) {
            limpio.push(list[i]);
        }
    }
    return limpio;
  }
  console.log(removeDuplicates(duplicates));