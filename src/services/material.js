import Vue from "vue";
import { MdToolbar, MdButton, MdIcon, MdCard, MdRipple, MdLayout } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

const components = [MdToolbar, MdButton, MdIcon, MdCard, MdRipple, MdLayout];

components.forEach((component) => Vue.use(component));
