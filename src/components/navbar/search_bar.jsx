import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { url } from "../../url";

function SearchBar() {
  let focus = "focus:outline-2 focus:outline focus:outline-primary-200"; //tailwind classes

  const [searched, setSearched] = useState(null);
  const [products, setProducts] = useState(null);

  const handleChange = (e) => {
    const word = e.target.value;
    if (word.length !== 0) setSearched(e.target.value);
    else setSearched(null);
  };

  const prodURL = `${url}/products`;
  //useEffect prevents the GET request from happening infinitely
  useEffect(() => {
    if (searched !== null) {
      axios
        .get(`${prodURL}/match`, {
          params: { searched: searched },
        })
        .then((response) => {
          setProducts(response.data);
        });
    }
  }, [searched, prodURL]);

  return (
    <div className="h-full relative">
      <input
        className={`search-bar min-w-0 h-full bg-secondary rounded pr-4 pl-4 text-primary-900 justify-self-end ${focus}`}
        onChange={handleChange}
        placeholder="Search"
      />

      {searched !== null &&
        products !== null && (
            <ul className="search-list absolute bg-primary-200 text-primary-800 bg-opacity-80 rounded-[10px] z-[-1] w-full">
              {products.map((p) => (
                <li key={p._id} className="search-item">
                  <a href={`/product/${p._id}`}>
                    <div className="flex items-center">
                      <div className="h-14 w-14 flex items-center justify-center object-contain mr-2">
                        <img
                          src={p.image}
                          alt={p.description}
                          className="max-w-[90%] max-h-[90%]"
                        />
                      </div>
                      {p.description}
                    </div>
                  </a>
                  <hr className="border-primary-400" />
                </li>
              ))}
            </ul>
          )}
    </div>
  );
}

export default SearchBar;
