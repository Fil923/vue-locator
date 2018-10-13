import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/Footer.vue";

describe("Footer.vue", () => {
  it("renders a container p with authors", () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.text()).toMatch("Proudly made by Fil923 & SLMNBJ");
  });
});
