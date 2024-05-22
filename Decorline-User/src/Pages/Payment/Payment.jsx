import React from "react";
import Cookies from 'js-cookie';
import axios from "axios";

function Payment() {
  const token = Cookies.get('token');

  async function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      const response = await axios.post("https://go-decor.vercel.app/api/v1/order/new", {}, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!response || !response.data || !response.data.data) {
        alert("Server error. Are you online?");
        return;
      }

      const { orderInfo, razorPayment } = response.data.data;

      const options = {
        key: "rzp_test_YxowEUIK2xZcQi", // Enter the Key ID generated from the Dashboard
        amount: `${orderInfo.totalPrice * 100}`, // Amount is in currency subunits
        currency: "INR",
        name: "Soumya Corp.",
        description: "Test Transaction",
        order_id: razorPayment?.razorpayOrderId,
        handler: async function (response) {
          const data = {
            dbOrderID: orderInfo.orderId,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: razorPayment?.razorpayOrderId,
            razorpay_signature: response.razorpay_signature,
          };

          try {
            const result = await axios.post("https://go-decor.vercel.app/api/v1/order/verify", data, {
              headers: { 'Authorization': `Bearer ${token}` }
            });
            console.log({ result });
            // alert(result.data.msg);
          } catch (error) {
            console.error('Error verifying order:', error);
            // Handle verification error
          }
        },
        prefill: {
          name: "Soumya Dey",
          email: "SoumyaDey@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Soumya Dey Corporate Office",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error creating order:', error);
      // Handle order creation error
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Buy React now!</p>
        <button className="App-link" onClick={displayRazorpay}>
          Pay ₹500
        </button>
      </header>
    </div>
  );
}

export default Payment;
