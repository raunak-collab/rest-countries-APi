import { useEffect, useState } from "react";
import "./CountryDetail.css";
import { Link, useParams, useLocation, useOutletContext } from "react-router";
import CountryDetailShimmer from "./CountryDetailShimmer";




// CLtr + shift + l to select all the occurences of the word and edit them together
export default function CountryDetail() {

    const [data, setdata] = useState(null)
    const [notfound, setnotFound] = useState(false)
    const params = useParams()
    const countryName = params.country;
    const { state } = useLocation()
    const [dark, setdark] = useOutletContext()

    function updateData(data) {
        setdata({
            population: data.population,
            subregion: data.subregion,
            region: data.region,
            capital: data.capital,
            flag: data.flag,
            name: data.name,
            topLevelDomain: data.topLevelDomain,
            nativeName: data.nativename ? Object.values(data.nativename)[0].common : data.name,
            currencies: data.currencies ? Object.values(data.currencies).map((val) => val.name).join(",") : "",
            languages: data.languages ? Object.values(data.languages).join(",") : "",
            borders: data.borders,
        });
    }

    useEffect(() => {
        if (!state) {
            setTimeout(() => {
                async function fetchData() {
                    try {
                        const response = await fetch(`http://localhost:3000/api/countries/${countryName}`);
                        const Cdata = await response.json();
                        updateData(Cdata);

                    } catch (err) {
                        setnotFound(true)
                        console.log(err)
                    }
                }
                fetchData();
            }, 2000);
        }
        else {
            updateData(state)
        }

    }, [countryName])



    if (notfound) {
        return <div style={{ height: '200px', display: 'flex', justifyContent: "center", alignItems: 'center', fontSize: '1.20rem' }}>
            <h2>Country not found!</h2>
        </div>
    }

    return (data === null ? <CountryDetailShimmer /> : <main className={`${dark ? 'dark' : ''}`}>
        <div className="country-details-container">
            <span className="back-button" onClick={() => history.back()}>
                <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
            </span>
            <div className="country-details">
                <img src={data.flag} alt={`${countryName} flag`} />
                <div className="details-text-container">
                    <h1>{data.name}</h1>
                    <div className="details-text">
                        <p><b>Native Name: </b><span className="native-name">{data.nativeName}</span></p>
                        <p><b>Population: </b><span className="population">{data.population}</span></p>
                        <p><b>Region: </b><span className="region">{data.region}</span></p>
                        <p><b>Sub Region: </b><span className="sub-region">{data.subregion}</span></p>
                        <p><b>Capital: </b><span className="capital">{data.capital}</span></p>
                        <p>
                            <b>Top Level Domain: </b><span className="top-level-domain">{data.topLevelDomain}</span>
                        </p>
                        <p><b>Currencies: </b><span className="currencies">{data.currencies}</span></p>
                        <p><b>Languages: </b><span className="languages">{data.languages}</span></p>
                    </div>
                    {data.borders.length !== 0 && <div className="border-countries"><b>Border Countries:</b>&nbsp;
                        {data.borders.map((border) => {
                            return <Link key={border} >{border}</Link>
                        }
                        )}
                    </div>}
                </div>
            </div>
        </div>
    </main>
    )
}
