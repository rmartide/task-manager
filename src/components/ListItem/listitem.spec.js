import { render, configure } from "@testing-library/vue";
import { ListItem } from "@/components";
import Vue from "vue";
import VueMaterial from "vue-material";
Vue.use(VueMaterial);

import "@testing-library/jest-dom";

configure({ testIdAttribute: "data-spec" });

describe("ListItem.vue", () => {
	it("component renders", () => {
		const { getByTestId } = render(ListItem);

		getByTestId("listItemName");
	});
});
