let aux = 0;
const OrderPlate = [(plateName = ""), (Price = 0)];
const OrderDrink = [(drinkName = ""), (Price = 0)];
const OrderDessert = [(dessertName = ""), (Price = 0)];

const replacePrice = (Price) =>
  parseFloat(Price.replace(/[^0-9,]/g, "").replace(/,/g, "."));
function toggleSelectedPlate(plate) {
  const el = document.querySelector(".plates .selected");
  if (el !== null) {
    if (el !== plate) {
      el.classList.remove("selected");
      aux++;
    }
  }
  plate.classList.toggle("selected");
  OrderPlate.plateName = plate.querySelector(".plate-name").innerHTML;
  OrderPlate.platePrice = replacePrice(
    plate.querySelector(".plate-price").innerHTML
  );

  toggleConfirm();
}

function toggleSelectedDrink(drink) {
  const el = document.querySelector(".drinks .selected");
  if (el !== null) {
    if (el !== drink) {
      el.classList.remove("selected");
      aux++;
    }
  }
  drink.classList.toggle("selected");
  OrderDrink.drinkName = drink.querySelector(".drink-name").innerHTML;
  OrderDrink.drinkPrice = replcePrice(
    drink.querySelector(".drink-price").innerHTML
  );

  toggleConfirm();
}

function toggleSelectedDessert(dessert) {
  const el = document.querySelector(".desserts .selected");
  if (el !== null) {
    if (el !== dessert) {
      el.classList.remove("selected");
      aux++;
    }
  }
  dessert.classList.toggle("selected");
  OrderDessert.dessertName = dessert.querySelector(".dessert-name").innerHTML;
  OrderDessert.dessertPrice = ReplcePrice(
    dessert.querySelector(".dessert-price").innerHTML
  );

  toggleConfirm();
}

function toggleConfirm() {
  if (aux == 3) {
    const el = document.querySelector("button");
    el.innerHTML = "Fechar Pedido";
    el.classList.toggle("confirm");
  }
}

function MakeOrder() {
  const TotalPrice =
    OrderPlate.platePrice + OrderDrink.drinkPrice + OrderDessert.dessertPrice;
  const order = `
  Olá, gostaria de fazer o pedido:
- Prato: ${OrderPlate.plateName}
- Bebida: ${OrderDrink.drinkName}
- Sobremesa: ${OrderDessert.dessertName}
Total: R$ ${TotalPrice}
  `;
  SendOrder(order);
}
function SendOrder(order) {
  const Menssage = "https://wa.me/9999999999?text=$(order)";
  window.open(Menssage), "_blank";
}
