import React, { useState } from "react";
import "../style/cart.scss";
import menu1 from "../assets/images/menu1.png";
import menu2 from "../assets/images/menu2.png";
import menu3 from "../assets/images/menu3.png";
import nonveg from "../assets/images/nonveg.png";
import veg from "../assets/images/Veg.png";
import Navbar from "../components/Navbar";

export default function Cart() {
  const [totalPrice, setTotalPrice] = useState({
    item: 430,
    delivery: 50,
    advaceTotal: 500,
    advaceDelivary: 50,
    tax: 62,
  });
  const [cartData, setCartData] = useState([
    {
      name: "Chicken Salad",
      price: 230,
      count: 1,
      img:menu1
    },
    {
      name: "Cream of tartar",
      price: 200,
      count: 1,
      img:menu2,
    },
  ]);

  const [adCartData, setAdCartData] = useState([
    {
      name: "Chicken Salad",
      price: 230,
      count: 1,
      img:menu3
    },
  ]);

  const addItem = (price, index) => {
    let newItem = { ...totalPrice };
    newItem.item = newItem.item + price;
    const newCart = [...cartData];
    newCart[index].count = newCart[index].count + 1;
    setCartData(newCart);
    setTotalPrice(newItem);
  };

  const removeItem = (price, index) => {
      const newCart = [...cartData];
      if(newCart[index].count !== 1){
        newCart[index].count = newCart[index].count - 1;
      let newItem = { ...totalPrice };
    newItem.item = newItem.item - price;
    setCartData(newCart);
    setTotalPrice(newItem);
      }
  };

  const addAdvaceCartItem = (price, index) => {
    let newItem = { ...totalPrice };
    newItem.advaceTotal = newItem.advaceTotal + price;
    const newCart = [...adCartData];
    newCart[index].count = newCart[index].count + 1;
    setAdCartData(newCart);
    setTotalPrice(newItem);
  };

  const removeAdvaceCartItem = (price, index) => {
      const newCart = [...adCartData];
     if(newCart[index].count !== 1){
        newCart[index].count = newCart[index].count - 1;
        let newItem = { ...totalPrice };
        newItem.advaceTotal = newItem.advaceTotal - price;
        setAdCartData(newCart);
        setTotalPrice(newItem);
     }
  };

  return (
    <>
      <Navbar />
      <section className="cart-section bg-light">
        <div className="row d-lg-flex  justify-content-between pt-5 container cart-container m-auto">
          {/* cart summary  */}
          <div className="col-lg-6 summary">
            <div className="mx-4">
              <div className="d-flex align-items-center justify-content-between">
                <h4>Card summary</h4>
                <button className="btn px-4 fw-bold bg-white border">
                  Add More
                </button>
              </div>
              {/* menu items  */}
              {cartData.map((data, index) => (
                <div key={index} className="d-flex mt-5 bg-white p-3">
                  <div>
                    <img src={data.img} alt="" />
                  </div>
                  <div className="ms-2">
                    <div className="d-flex w-100  align-items-center justify-content-between">
                      <h6 className="my-0">
                        {data.name} <img className="ms-3" src={nonveg} alt="" />
                      </h6>
                      <h6 className="my-0">₹{data.price}</h6>
                    </div>
                    <div className="text-muted">
                      About dish Lorem ipsum dummy text lorem ipsum dummy text
                      lorem ipsum dummy text more
                    </div>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <div className="property">
                        <span>Sugar Free</span>
                        <span>Egg</span>
                      </div>
                      <div>
                        <button
                          onClick={() => removeItem(data.price, index)}
                          className="btn bg-white border mx-1"
                        >
                          -
                        </button>
                        <button className="btn btn-primary mx-1">
                          {" "}
                          {data.count}{" "}
                        </button>
                        <button
                          onClick={() => addItem(data.price, index)}
                          className="btn bg-white border mx-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="my-4">
                <h6>Advanced order for tommorrow</h6>
              </div>

              {adCartData.map((data, index) => (
                <div key={index} className="d-flex bg-white p-3">
                  <div>
                    <img src={data.img} alt="" />
                  </div>
                  <div className="ms-2">
                    <div className="d-flex w-100  align-items-center justify-content-between">
                      <h6 className="my-0">
                        {data.name} <img className="ms-3" src={nonveg} alt="" />
                      </h6>
                      <h6 className="my-0">₹{data.price}</h6>
                    </div>
                    <div className="text-muted">
                      About dish Lorem ipsum dummy text lorem ipsum dummy text
                      lorem ipsum dummy text more
                    </div>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <div className="property">
                        <span>Sugar Free</span>
                        <span>Egg</span>
                      </div>
                      <div>
                        <button
                          onClick={() => removeAdvaceCartItem(data.price, index)}
                          className="btn bg-white border mx-1"
                        >
                          -
                        </button>
                        <button className="btn btn-primary mx-1">
                          {" "}
                          {data.count}{" "}
                        </button>
                        <button
                          onClick={() => addAdvaceCartItem(data.price, index)}
                          className="btn bg-white border mx-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* price summary  */}
          <div className="col-lg-6 summary">
            <div className="mx-4">
              <div className="">
                <h4>Price summary</h4>
              </div>
              {/* menu items  */}

              <div className="mt-5 p-3">
                <h6>Available now</h6>
                <div className="d-flex w-100 mb-2  align-items-center justify-content-between">
                  <div className="my-0">Item Total</div>
                  <div className="my-0">₹{totalPrice.item.toFixed(2)}</div>
                </div>
                <div className="d-flex w-100 mb-2 align-items-center justify-content-between">
                  <div className="my-0">Delivery charges</div>
                  <div className="my-0">₹{totalPrice.delivery.toFixed(2)}</div>
                </div>
                <hr />
                <h6>Advanced order</h6>
                <div className="d-flex w-100 mb-2  align-items-center justify-content-between">
                  <div className="my-0">Item Total </div>
                  <div className="my-0">₹{totalPrice.advaceTotal.toFixed(2)}</div>
                </div>
                <div className="d-flex w-100 mb-2 align-items-center justify-content-between">
                  <div className="my-0">Delivery charges</div>
                  <div className="my-0">₹{totalPrice.advaceDelivary.toFixed(2)}</div>
                </div>
                <hr />
                <div className="d-flex w-100 mb-2 align-items-center justify-content-between">
                  <div className="my-0">
                    Tax
                    <br />
                    (estimated for india )
                  </div>
                  <div className="my-0">₹{totalPrice.tax.toFixed(2)}</div>
                </div>
                <hr />
                <div className="d-flex text-primary w-100 mb-2 align-items-center justify-content-between">
                  <h6 className="my-0">Grand Total</h6>
                  <h6 className="my-0">₹ {Object.values(totalPrice).reduce((pre, curr) => pre + curr, 0)} </h6>
                </div>
                <hr />
                <div className="d-flex text-primary w-100 mb-2 align-items-center justify-content-center mt-5">
                  <button className="btn btn-primary">Create order</button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex pt-5 justify-content-end">
            <div className="me-3">
              <img src={veg} alt="" /> <small>VEG</small>
            </div>
            <div>
              <img src={nonveg} alt="" /> <small>NON-VEG</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
