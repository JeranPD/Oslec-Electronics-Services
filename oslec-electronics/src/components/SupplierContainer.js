import { useAppContext } from "../context/appContext.js";
import { useEffect } from "react";
import Loading from "./Loading";
import Wrapper from "../assets/wrappers/CustomersContainer";
import React, { useRef } from "react";
import "../assets/css/AllCustomers.css";
import moment from "moment";
import { Link } from "react-router-dom";
import SupplierRecordsContainer from "./SupplierRecordsContainer.js";

const SupplierContainer = () => {
  const {
    getSupplier,
    suppliers,
    isLoading,
    numofSupplierPages,
    totalSupplier,
    searchSupplier,
    searchSupplierStatus,
    sortSupplier,
    setEditSupplier,
    deleteSupplier,
    pageSupplier
  } = useAppContext();
  const componentRef = useRef();

  useEffect(() => {
    getSupplier();
  }, [pageSupplier, searchSupplier, searchSupplierStatus, sortSupplier]);

 
  if (isLoading) {
    return <Loading center />;
  }

  if (suppliers.length === 0) {
    return (
      <Wrapper>
        <h2>No Supplier Display</h2>
      </Wrapper>
    );
  }

  let isTrue;

  return (
    <Wrapper>
      <h5>
        {totalSupplier} Supplier{suppliers.length > 1 && "s"} found
      </h5>
      <div className="table-body" ref={componentRef}  style={{overflowX : 'auto', fontSize: '14px'}}>
            <table className="table table-striped table-bordered table-responsive">
              <thead style={{ fontSize: 13 }}>
                <tr>
                  <th>COMPANY NAME</th>
                  <th>NAME</th>
                  <th>ADDRESS</th>
                  <th>CONTACT</th>
                  <th>EMAIL</th>
                  <th>PRODUCT ORDER</th>
                  <th>QUANTITY</th>
                  <th>PRODUCT STATUS</th>
                  <th>RECEIVED AT</th>
                  <th>PRICE</th>
                  <th>ORDER DATE</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: 13 }}>
              {suppliers.map((supplier, index) => {
                  if(supplier.productStatus === "recieved"){
                    isTrue = true
                  } else if(supplier.productStatus !== "recieved"){
                    isTrue = false
                  }
                  return (
                      <tr key={index}>
                        <td>{supplier.companyName}</td>
                        <td>{supplier.name}</td>
                        <td>{supplier.Address}</td>
                        <td>{supplier.contact}</td>
                        <td>{supplier.email}</td>
                        <td>{supplier.productOrder}</td>
                        <td>{supplier.quantity}</td>
                        <td>{supplier.productStatus}</td>
                        <td>{supplier.receivedAt}</td>
                        <td>{supplier.priced}</td>
                        <td>{moment(supplier.createdAt).format("MM/DD/YYYY")}</td>
                        <td>
                            <Link
                                to="/dashboard/add-supplier"
                                className="btn supplier-btn edit-btn"
                                onClick={() => setEditSupplier(supplier._id)}
                                >
                                Edit
                            </Link>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn supplier-btn delete-btn"
                                onClick={() => deleteSupplier(supplier._id)}
                                disabled={isTrue ? true : false}
                                >
                                Delete
                            </button>
                        </td>
                      </tr>
                    );
                
                })}
            </tbody>
            </table>
      </div>
    
      <div className="footer-section">
        
        {numofSupplierPages >= 1 && <SupplierRecordsContainer />}
      </div>
    </Wrapper>
  );
};

export default SupplierContainer;
