import { useRoutes, RouteObject, useNavigate } from "react-router-dom";
import { Home } from "../modules";
import { authState } from "../state/auth";
import Login from "../modules/auth/Login";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export const AppRoutes = () => {
  const router = useNavigate();
  const auth = useRecoilValue(authState);
  useEffect(() => {
    console.log("authState", authState)
    if (!auth.isLoggedIn) {
      router("/login");
    }
  }, [authState]);
  const commonRoutes: RouteObject[] = [
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
  ];
  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
