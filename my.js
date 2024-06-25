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
