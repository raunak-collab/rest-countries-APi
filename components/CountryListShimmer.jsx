import React from 'react'
import { Link } from 'react-router'

export default function CountryListShimmer() {

  const Mapped = Array.from({ length: 12 }).map((el, i) => {
    return <Link key={i} style={{ height: '300px' }} className="country-card" >
    </Link>;
  }
  )

  console.log(Mapped);


  return (
    <div className='countries-container'>
      {Mapped}
    </div>
  )
}
