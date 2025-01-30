import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const isLoggedIn = () => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    if (!Cookies.get("user") || Cookies.get("user") === null) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, []);
  return logged;
};
