import fakeRestDataProvider from "ra-data-fakerest";
import data from "./gen.json";

export const genDataProvider = fakeRestDataProvider(
  data,
  process.env.NODE_ENV !== "test",
  300,
);
