import React from "react";
import {Provider} from 'react-redux'
import Enzyme, { shallow, mount } from "enzyme";
import SearchBox from "./SearchBox.js";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
 describe("SearchBox component", () => {
   test("renders", () => {
     const setup = (props={}) => {
        const wrapper = shallow(<SearchBox {...props} />);

        expect(wrapper.exists()).toBe(true);
     }
   });
 });
