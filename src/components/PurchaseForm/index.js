import ItemCart from "components/NavBar/CartMenu/ItemCart";

export const PurchaseForm = ({
  formValue,
  setFormValue,
  carrito,
  totalPrice,
}) => {
  const renderItems = carrito.map((producto) => (
    <ItemCart dataProducto={producto} displayMode="none"></ItemCart>
  ));

  return (
    <>
      <h3>Finish my purchase</h3>
      <div className="buyerData-form-container">
        <h4>
          <span>1</span>Personal information
        </h4>
        <div className="form-container">
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            value={formValue.name}
            onChange={(e) =>
              setFormValue({ ...formValue, name: e.target.value })
            }
          />
          <input
            type="text"
            id="surname"
            placeholder="Surname"
            name="name"
            value={formValue.surname}
            onChange={(e) =>
              setFormValue({ ...formValue, surname: e.target.value })
            }
          />
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            name="email"
            value={formValue.email}
            onChange={(e) =>
              setFormValue({ ...formValue, email: e.target.value })
            }
          />
          <input
            type="email"
            id="repeatemail"
            placeholder="Repeat your e-mail"
            name="repeatemail"
            value={formValue.repeatemail}
            onChange={(e) =>
              setFormValue({ ...formValue, repeatemail: e.target.value })
            }
          />
          <input
            type="text"
            id="adress"
            placeholder="Adress"
            name="adress"
            value={formValue.adress}
            onChange={(e) =>
              setFormValue({ ...formValue, adress: e.target.value })
            }
          />
        </div>
      </div>
      <div className="paymentData-form-container">
        <h4>
          <span>2</span>Payment Method
        </h4>
        <select
          required
          name="payment"
          id="payment"
          value={formValue.payment}
          onChange={(e) =>
            setFormValue({ ...formValue, payment: e.target.value })
          }
        >
          <option value="" disabled>
            Select your payment method
          </option>
          <option value="cash">Cash</option>
          <option value="credit">Credit card</option>
          <option value="debit">Debit Card</option>
        </select>
      </div>
      <div className="cartData-container">
        <h4>
          <span>3</span>Summary of purchase
        </h4>
        <div className="itemsCart-container">{renderItems}</div>
        <p>
          <b>Total: </b>$
          <span className="total">{!carrito.length ? 0 : totalPrice}</span>
        </p>
      </div>
    </>
  );
};
