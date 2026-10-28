import React from "react";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const { pathname } = useLocation();

  React.useEffect (() => {
    if(pathname === '/') {
      setTitle('Resumo')
      document.title = 'Fintech | Resumo'
    } else if (pathname === '/vendas') {
      setTitle('Vendas')
      document.title = 'Fintech | Vendas'
    }
  }, [pathname])

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
