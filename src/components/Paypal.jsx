import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Paypal({ description, amount }) {
  const createOrder = (data, actions) => {
    console.log("SPARK HERE");
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: description,
          amount: {
            value: amount,
            currency_code: "INR",
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    console.log(order);
    console.log("APPPROVEd");
  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      onError={(err) => onError(err)}
    />
  );
}
export default Paypal;
