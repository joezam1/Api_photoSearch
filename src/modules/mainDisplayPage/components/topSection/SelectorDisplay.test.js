import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import SelectorDisplay from "./SelectorDisplay.js";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
describe("Search component", () => {
  test("renders", () => {
    const wrapper = shallow(<SelectorDisplay />);

    expect(wrapper.exists()).toBe(true);
  });
});
