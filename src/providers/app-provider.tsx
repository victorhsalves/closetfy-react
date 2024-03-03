import { ApolloProvider } from "@apollo/client";
import React, { ReactNode } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import api from "../config/api";
import { RecoilRoot } from "recoil";

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          Loading...
        </div>
      }
    >
      <RecoilRoot>
        <ApolloProvider client={api}>
          <Router>{children}</Router>
        </ApolloProvider>
      </RecoilRoot>
    </React.Suspense>
  );
};
