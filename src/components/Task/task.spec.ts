import { render, configure } from '@testing-library/vue';
import Task from "@/components/Task.vue";

configure({ testIdAttribute: 'data-spec' });

describe("Task.vue", () => {
  it("component renders", () => {
    const { getByTestId } = render(Task);

    getByTestId('component');
  });
});