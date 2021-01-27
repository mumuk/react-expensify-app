import React from "react";
import {shallow} from "enzyme"
import NotFoundPage from "../../components/404";

test("sgould render Not found page", ()=>{
  const wrapper = shallow(<NotFoundPage/>)
  expect(wrapper).toMatchSnapshot()
});
