import {
  createApp,
  ref,
  computed,
} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

createApp({
  setup() {
    const amount = ref("");
    const dollarValue = 1.0688534;
    const yenValue = 161.52519;

    const convertToDollars = computed(() => {
      return +amount.value * dollarValue;
    });

    const convertToYen = computed(() => {
      return +amount.value * yenValue;
    }

    )

    return {
      amount,
      dollarValue,
      yenValue,
      convertToDollars,
      convertToYen
    };
  },
}).mount("#app");
