import { createContext } from "react";
import { Outlet } from "react-router-dom";
import { QueryClinet, QueryClientProvider } from "react-query";
import PropTypes from "prop-types";
import { ApiService } from "../core/lib/ApiService.js";

export const ApiContext = createContext(null);
export const Api = ({ baseURL }) => {
  const queryClient = new QueryClinet(); //TODO:: config 설정 필요? (https://tanstack.com/query/v4/docs/react/reference/QueryClient)

  return (
    <>
      <ApiContext.Provider value={{ api: new ApiService(baseURL) }}>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </ApiContext.Provider>
    </>
  );
};

Api.propTypes = {
  baseURL: PropTypes.string,
};
