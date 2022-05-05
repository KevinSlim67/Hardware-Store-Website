import React, { useReducer } from "react";

const defaultBorderClasses =
  "border-[1px] border-primary-400 border-opacity-20";

function Product(props) {
  const initialState = {
    borderClasses: defaultBorderClasses,
    isSelected: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_SELECTION":
        //updates isSelected from true to false, or false to true
        return {
          isSelected: !state.isSelected,
          borderClasses: state.borderClasses,
        };

      case "UPDATE_BORDER":
        //updates the border from default border to info border, or the other way around
        //depending on the value of isSelected
        if (state.isSelected) {
          return {
            borderClasses:
              "border-[1px] border-info border-opacity-100 selected-shadow scale-[1.02]",
            isSelected: state.isSelected,
          };
        } else {
          return {
            borderClasses: defaultBorderClasses,
            isSelected: state.isSelected,
          };
        }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      id={`category-${props.category}`}
      className={`support-product flex flex-col justify-center items-center bg-primary-100 m-5 w-[15rem] rounded-[30px]
     hover:cursor-pointer hover:bg-primary-200 ${state.borderClasses}`}
      onClick={() => {
        //highlights the div and unhighlights on click
        dispatch({ type: "UPDATE_SELECTION" });
        dispatch({ type: "UPDATE_BORDER" });
      }}
    >
      <img
        src="assets\images\products\hero_image.png"
        className="object-contain p-4"
      />
      <div className="support-product-caption w-full text-center bg-primary-400 text-primary-800
       rounded-bl-[30px] rounded-br-[30px] p-2">
        {props.category}
      </div>
    </div>
  );
}

export default Product;
