import { Fragment } from "react";
import Parcel from "single-spa-react/parcel";

export const App = () => (
  <Fragment>
    <Parcel config={() => System.import("@ds/layout")} />
    <h1>Welcome, Home!</h1>
  </Fragment>
);
