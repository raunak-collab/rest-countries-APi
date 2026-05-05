import React from 'react'
import { Link } from 'react-router'
import "./CountryDetail.css";

export default function CountryDetailShimmer() {

  const Mapped = Array.from({ length: 8 }).map((el, i) => {
    return <div key={i} style={{ backgroundColor: 'whitesmoke', width: '130px', height: '38px' }}></div>;
  }
  )


  return (
    <div className="country-details-container">
      <span className="back-button" onClick={() => history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="country-details">
        <div style={{ backgroundColor: 'whitesmoke', width: '480px', height: "320px" }} />
        <div className="details-text-container">
          <h1 style={{ backgroundColor: 'whitesmoke', width: '150px', height: '52px' }}></h1>
          <div className="details-text">
            {Mapped}
          </div>
        
        </div>
      </div>
    </div>
  )
}
