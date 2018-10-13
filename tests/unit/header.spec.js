import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders a container p with authors", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.text()).toMatch("A simple store locator made with vue");
  });
});
