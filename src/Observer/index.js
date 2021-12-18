const Mall = require("./Mall");
const Shopper = require("./Shopper");
const Store = require("./Store");

const runExample = () => {

  const  catsAndThings = new Store("Cats & Things");
  const  insAndOuts = new Store("Ins and Outs");

  const first = new Shopper('Mary');
  const second = new Shopper('Hendrix');
  const third = new Shopper('Jimmi');
  const fourth = new Shopper('Jane');
  
  const valleyMall = new Mall('Valley Mall');

  const catsAndThingsSubscriber = { first, second, fourth, valleyMall };
  const insAndOutsSubscriber = { third, valleyMall };

  for (const subscriber in catsAndThingsSubscriber) {
    catsAndThings.subscribe(catsAndThingsSubscriber[subscriber]);
  }

  for (const subscriber in insAndOutsSubscriber) {
    insAndOuts.subscribe(insAndOutsSubscriber[subscriber]);
  }

  catsAndThings.sale(20);
  insAndOuts.sale(50);

  valleyMall.stores.forEach(store => {
    console.log(
      `${valleyMall.name} has ${store.storeName} store that offers ${store.discount}% off!`
    );
  })
}

module.exports = { runExample };