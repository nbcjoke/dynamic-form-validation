import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home/home";
import { CreateEntity } from "../pages/createEntity/createEntity";
import { ChangeEntity } from "../pages/changeEntity/changeEntity";

import { ROUTE_NAMES } from "./routeNames";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<Home />} />
      <Route path={ROUTE_NAMES.CREATE_ENTITY} element={<CreateEntity />} />
      <Route path={ROUTE_NAMES.CHANGE_ENTITY} element={<ChangeEntity />} />
    </Routes>
  );
};
