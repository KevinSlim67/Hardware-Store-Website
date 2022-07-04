import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavBar from "../components/navbar/navbar";
import ProductSpecs from "../components/product_buy.jsx/product_specs";
import SupportTicketForm from "../components/support_ticket.jsx/support_ticket_form";
import { url } from "../url";

function SupportTicketPage() {
  //gets id that is in the url
  const { id } = useParams();

  const prodURL = `${url}/products`;
  const [data, setData] = useState(null);

  //useEffect prevents the GET request from happening infinitely
  //this GET request will return all fields of the given ID
  useEffect(() => {
    axios.get(`${prodURL}/${id}`).then((response) => {
      setData(response.data);
    });
  }, [id]);


  return (
    <div className="page">
      <NavBar selected="Support" />
      <div className="flex justify-center w-full">
        {data !== null /* prevents rendering while the data hasn't been fetched yet */ && (
          <div className="support-ticket-page flex justify-center w-[78.125rem] mt-16 mb-16">
            <ProductSpecs data={data} className="w-1/2 product-spec" />
            <SupportTicketForm data={data} className="w-1/2 support-ticket" />
          </div>
        )}
      </div>
    </div>
  );
}

export default SupportTicketPage;
