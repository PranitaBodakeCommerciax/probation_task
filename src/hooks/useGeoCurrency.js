// /src/hooks/useGeoCurrency.js
import { useState, useEffect } from "react";

const useGeoCurrency = () => {
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    fetch("https://geolocation-db.com/json/")
      .then((res) => res.json())
      .then((data) => {
        const cc = String(data.country_code || "").toUpperCase();
        if (["IN", "PK", "BD", "NP"].includes(cc)) setCurrency("INR");
        else if (cc === "GB" || cc === "UK") setCurrency("GBP");
        else setCurrency("USD");
      })
      .catch(() => setCurrency("USD"));
  }, []);

  return currency;
};

export default useGeoCurrency;
