import React from "react";
import "../styles/Orders.scss";
import icon from "../../public/icons/flechita.svg";

function Orders() {
  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">My orders</h1>

        <div className="Orders-content">
          <div className="Orders-order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={icon} alt="arrow" />
          </div>

          <div className="Orders-order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={icon} alt="arrow" />
          </div>

          <div className="Orders-order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={icon} alt="arrow" />
          </div>

          <div className="Orders-order">
            <p>
              <span>03.25.21</span>
              <span>6 articles</span>
            </p>
            <p>$560.00</p>
            <img src={icon} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
