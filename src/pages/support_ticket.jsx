import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavBar from "../components/navbar/navbar";
import ProductSpecs from "../components/product_buy.jsx/product_specs";
import SupportTicketForm from "../components/support_ticket.jsx/support_ticket_form";

function SupportTicketPage() {
  //gets id that is in the url
  const { id } = useParams();

  const [data, setData] = useState(null);

  const url = "http://localhost:5000/products";
  //useEffect prevents the GET request from happening infinitely
  //this GET request will return all fields of the given ID
  useEffect(() => {
    axios.get(`${url}/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);


  return (
    <div className="page">
      <NavBar selected="Support" />
      <div className="flex justify-center w-full">
        {data !== null /* prevents rendering while the data hasn't been fetched yet */ && (
          <div className="flex justify-center w-[78.125rem] mt-16 mb-16">
            <ProductSpecs data={data} className="w-1/2" />
            <SupportTicketForm data={data} className="w-1/2" />
          </div>
        )}
      </div>
    </div>
  );
}

export default SupportTicketPage;
