import React from "react";
import {Provider} from 'react-redux'
import Enzyme, { shallow, mount } from "enzyme";
import ItemsGallery from "./ItemsGallery.js";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
 describe("ItemsGallery component", () => {
   test("renders", () => {
     const setup = (props={}) => {
        const wrapper = shallow(<ItemsGallery {...props} />);
        expect(wrapper.exists()).toBe(true);
     }
   });
 });
