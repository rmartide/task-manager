import { shallowMount } from "@vue/test-utils";
import Task from "@/components/Task.vue";
/* 
describe("Task.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Task, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
 */


describe("Task.vue", () => {
  it("component renders", () => {
    expect(1).toEqual(2);
  });
});