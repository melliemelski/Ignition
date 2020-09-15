import React from "react";
import { render } from "@testing-library/react";
import Mels from "./Mels";

describe("Mels tests", () => {
  it("should render", () => {
    expect(render(<Mels />)).toBeTruthy();
  });
});
