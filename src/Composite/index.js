/**The Composite pattern allows us to organize your objects in 
 * a way that treats single items and group of these items uniformly. 
 * It's useful to perform same operation on an individual element 
 * as we would a group of elements. 
 **/
const CatalogGroup = require("./CatalogGroup");
const CatalogItem = require("./CatalogItem");

const runExample = () => {

  const shoes = {
    boots: { name: 'Leather Boots', price: 79.99 },
    sneakers: { name: 'Kicks', price: 39.99 },
    flipFlops: {name: 'California wook boots', price: 19.99 }
  }

  const food = {
    milkshake: { name: 'Ovomaltine Milkshake', price: 5.99 },
    burger: { name: 'Cheese Bacon Burger', price: 10.99 }
  }

  const shoesComposites = Object.keys(shoes).map(
    key => new CatalogItem(shoes[key].name, shoes[key].price)
  );
    
  const foodComposites = Object.keys(food).map(
    key => new CatalogItem(food[key].name, food[key].price)
  );
      
  const goOutKeyChain = new CatalogItem('Key Chain of go out with friends', .99);

  const shoesGropup = new CatalogGroup('Shoes and such', shoesComposites); 

  const foodGroup = new CatalogGroup('Food for while you try on clothes', foodComposites);

  const goOutCatalog = new CatalogGroup(
    'Clothes and Foods to when go out with friends',
    [goOutKeyChain, shoesGropup, foodGroup]
  );
    
  console.log(`Total- $${goOutCatalog.total}`);
  goOutCatalog.print();
      
}

module.exports = { runExample };