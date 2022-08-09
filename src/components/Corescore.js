import { useState, useContext } from "react";
import React from "react";
import Login from "./Login";
import Info from "./Info";
import Map from "../assets/Map.png";
import MapRender from "./MapRender";

export const FormManagerContext = React.createContext(null);

const Corescore = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  return (
    <FormManagerContext.Provider
      value={{
        formData,
        setFormData,
        isLoading,
        setIsLoading,
        page,
        setPage,
      }}
    >
      <div className="flex justify-center align-middle h-screen">
        <div className="w-3/4 lg:w-1/2 h-3/4 flex flex-row gap-5 lg:gap-10 self-center rounded-md text-white bg-neutral-900 drop-shadow-xl shadow-neutral-900">
          <img
            src={Map}
            className="w-1/12 sm:w-1/4 lg:w-1/3 object-cover rounded-l-md"
          />
          <PageManager />
        </div>
      </div>
    </FormManagerContext.Provider>
  );
};

function PageManager() {
  const { isLoading, page } = useContext(FormManagerContext);
  //   if (isLoading) {
  //     return <Loading />;
  //   }

  switch (page) {
    case 1:
      return <Login />;
    case 2:
      return <Info />;
    case 3:
      return <MapRender />;
    default:
      //   return <Loading />;
      return <div>hello</div>;
  }
}

export default Corescore;
