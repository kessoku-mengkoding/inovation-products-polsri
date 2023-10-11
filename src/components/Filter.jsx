import { useState } from "react";
import PropTypes from "prop-types";
import { ButtonSecondaryS } from "./Button";

const Filter = ({ applyFilter }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterChange = (filter) => {
    if (selectedFilter === filter) {
      // If the same filter is clicked again, close it
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filter);
    }
    applyFilter(filter);
  };

  const isFilterOpen = (filter) => selectedFilter === filter;

  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <div
          className={`cursor-pointer w-full p-2 border border-gray-300  ${
            isFilterOpen("Brand")
              ? "bg-gray-50 rounded-t-[4px]"
              : "bg-white rounded-[4px]"
          }`}
          onClick={() => handleFilterChange("Brand")}
        >
          Brand
        </div>
        {isFilterOpen("Brand") && (
          <div className="bg-white border px-2 py-4 flex flex-col gap-2">
            <ButtonSecondaryS>X1 Series</ButtonSecondaryS>
            <ButtonSecondaryS>X2 Series</ButtonSecondaryS>
            <ButtonSecondaryS>A1 Series</ButtonSecondaryS>
          </div>
        )}
      </div>
    <div>
    <div
          className={`cursor-pointer w-full p-2 border border-gray-300  ${
            isFilterOpen("Harga")
              ? "bg-gray-50 rounded-t-[4px]"
              : "bg-white rounded-[4px]"
          }`}
          onClick={() => handleFilterChange("Harga")}
        >
          Harga
        </div>
        {isFilterOpen("Harga") && (
          <div className="bg-white border px-2 py-4 flex flex-col gap-2">
            <ButtonSecondaryS>
              &lt; Rp 200k
            </ButtonSecondaryS>
            <ButtonSecondaryS>
              Rp 200k - Rp 500k
            </ButtonSecondaryS>
            <ButtonSecondaryS>
              &gt; Rp 500k
            </ButtonSecondaryS>
          </div>
        )}
    </div>
    <div>
    <div
          className={`cursor-pointer w-full p-2 border border-gray-300  ${
            isFilterOpen("Promo")
              ? "bg-gray-50 rounded-t-[4px]"
              : "bg-white rounded-[4px]"
          }`}
          onClick={() => handleFilterChange("Promo")}
        >
          Promo
        </div>
        {isFilterOpen("Promo") && (
          <div className="bg-white border px-2 py-4 flex flex-col gap-2">
            <ButtonSecondaryS>
              Diskon 15%
            </ButtonSecondaryS>
            <ButtonSecondaryS>
              Kupon 10.10
            </ButtonSecondaryS>
            <ButtonSecondaryS>
              Cashback 50%
            </ButtonSecondaryS>
          </div>
        )}
    </div>
    <div>
    <div
          className={`cursor-pointer w-full p-2 border border-gray-300  ${
            isFilterOpen("Rating")
              ? "bg-gray-50 rounded-t-[4px]"
              : "bg-white rounded-[4px]"
          }`}
          onClick={() => handleFilterChange("Rating")}
        >
          Rating
        </div>
        {isFilterOpen("Rating") && (
          <div className="bg-white border px-2 py-4 flex flex-col gap-2">
            <ButtonSecondaryS>
              4 Keatas
            </ButtonSecondaryS>
          </div>
        )}
    </div>
    </div>
  );
};

Filter.propTypes = {
  applyFilter: PropTypes.func.isRequired,
};

export default Filter;
