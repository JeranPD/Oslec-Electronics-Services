import { useAppContext } from "../context/appContext.js";
import { useEffect } from "react";
import Customer from "./Customer";
import Wrapper from "../assets/wrappers/CustomersContainer";
import React, { useRef } from "react";
import "../assets/css/AllCustomers.css";
const LatesCustomer = () => {
  const {
    getCustomers,
    customers,
  } = useAppContext();
  const componentRef = useRef();

  
  useEffect(() => {
    getCustomers();
  }, []);
  let isTrue;
  return (
    <Wrapper>
      <h5>
        Latest Customer
      </h5>
      <div className="customer" ref={componentRef}>
        {customers.map((customer) => {
          if(customer.status === "completed"){
            isTrue = true
          } else if(customer.status !== "completed"){
            isTrue = false
          }
          return <Customer key={customer._id} {...customer} isTrue={isTrue}/>;
        })}
      </div>
      
    </Wrapper>
  );
};

export default LatesCustomer;
