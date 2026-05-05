import React, { useEffect, useState } from 'react'
import countriesData from '../countriesData'
import CountryCard from './CountryCard'
import CountryListShimmer from './CountryListShimmer'

export default function CountriesList({ search, region }) {

  const [data, setdata] = useState([])

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3000/api/countries')
        const countryData = await response.json();
        setdata(countryData);
      }
      fetchData()
    }, 1500);
  }, [])


  const finalData = data.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase());

    let matchesRegion = true;

    if (region) {
      matchesRegion = c.region.toLowerCase() === region.toLowerCase();
    }

    return matchesSearch && matchesRegion;
  });

  return (data.length === 0 ? <CountryListShimmer /> : <div className="countries-container">
    {finalData.map((country) => {
      return (
        <CountryCard
          key={country._id}
          name={country.name}
          flag={country.flag}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
          data={country}
        />
      )
    })}
  </div>
  )

}
