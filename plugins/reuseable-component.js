import Vue from 'vue'
//components registered here are global, user dont need to import them
//whereever they are needed but just call the component name

import AppButton from "../components/global/AppButton.vue";
import Loading from "@/components/global/Loading.vue";
import LazyImage from "@/components/global/LazyImage";
import AppTooltip from "@/components/global/AppTooltip";
import AppSelectInput from "@/components/global/AppSelectInput";
import AppDropdown from "@/components/global/AppDropdown";
import AppPagination from "@/components/global/AppPagination";


Vue.component("LoadingSpinners", Loading)
Vue.component("AppButton", AppButton)
Vue.component("LazyImage", LazyImage)
Vue.component("AppTooltip", AppTooltip)
Vue.component("AppSelectInput", AppSelectInput)
Vue.component("AppDropdown", AppDropdown)
Vue.component("AppPagination", AppPagination)
