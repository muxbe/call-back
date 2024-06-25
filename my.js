const a = (callBack) => {
  setTimeout(() => {
    console.log("its first funqtion");
    callBack();
  }, 5000);
};
const b = () => {
  console.log("its second funktion");
};
a(b);
let cars = ["mersedec", "bmw", "audi", "opel"];
cars.splice(0, 2, `subaru`);
console.log(cars);
let excar = cars.slice(1, 2);
console.log(excar);
