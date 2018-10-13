import { shallowMount } from "@vue/test-utils";
import Sidebar from "@/components/Sidebar.vue";

describe("Sidebar.vue", () => {
  it("renders a container p with authors", () => {
    const wrapper = shallowMount(Sidebar);
    expect(wrapper.text()).toMatch("Store List");
  });
});
