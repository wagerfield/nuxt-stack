import { mount } from "@vue/test-utils"
import Button from "./button.vue"

it("renders snapshot", () => {
  const wrapper = mount(Button)
  expect(wrapper).toMatchSnapshot()
})
