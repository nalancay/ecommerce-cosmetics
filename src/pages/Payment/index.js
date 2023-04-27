import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { ContextCart } from "context/cartContext";
import ButtonText from "components/Buttons/ButtonText";
import ButtonPrimary from "components/Buttons/ButtonPrimary";
import ButtonDisabledPrimary from "components/Buttons/ButtonDisabledPrimary";
import { useNavigate } from "react-router-dom";
import {
  isPaymentSelected,
  isTextFieldEqual,
  isValidData,
  isValidEmail,
} from "./Payment.utils";
import { PurchaseForm } from "components/PurchaseForm";
import { useProductCart } from "hooks/useProductCart";

const Payment = () => {
  const [isValidForm, setIsValidForm] = useState(false);
  const { cart, setCart } = useContext(ContextCart);
  const { totalPrice } = useProductCart();
  const navigate = useNavigate();

  const date_time = new Date(Date.now()).toLocaleString("sv-SE", {
    hour12: false,
  });

  const [formValue, setFormValue] = useState({
    name: "",
    surname: "",
    email: "",
    repeatemail: "",
    adress: "",
    payment: "",
  });

  function finishPurchase() {
    const order = {
      buyerData: formValue,
      price: totalPrice,
      purchaseDate: date_time,
      orderItems: cart,
    };

    setFormValue({
      name: "",
      surname: "",
      email: "",
      repeatemail: "",
      adress: "",
      payment: "",
    });
    setCart([]);
  }

  useEffect(() => {
    const isValidForm =
      isValidData(formValue) &&
      isValidEmail(formValue.email) &&
      isTextFieldEqual(formValue.email, formValue.repeatemail) &&
      isPaymentSelected(formValue.payment);

    setIsValidForm(isValidForm);
  }, [formValue]);

  return (
    <div className="payment-container">
      <ButtonText
        textButton="go back to the store"
        pathLink="/store"
        icon="fa-solid fa-arrow-left"
      />
      <div className="payment-resume-container">
        <PurchaseForm
          formValue={formValue}
          setFormValue={setFormValue}
          carrito={cart}
          totalPrice={totalPrice}
        />
      </div>
      {!isValidForm ? (
        <ButtonDisabledPrimary
          textButton="Finish purchase"
          icon="fa-solid fa-cart-shopping"
        ></ButtonDisabledPrimary>
      ) : (
        <ButtonPrimary
          textButton="Finish purchase"
          icon="fa-solid fa-cart-shopping"
          onClick={finishPurchase}
        ></ButtonPrimary>
      )}
    </div>
  );
};
export default Payment;
