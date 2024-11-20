const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList,name) {
    for (let i = 0; i < nameList.length; i++) {
        if(names[i].includes(name)){
            return {Boolean:true,position: i};
        }
    }
    return false;
  }
  console.log(nameFinder(names,'Logan'));
  console.log(nameFinder(names,'Peter'));
  console.log(nameFinder(names,'Paco'));