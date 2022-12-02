import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const sanoq = ref(0);
  const juftToq = computed(() => {
    if (sanoq.value % 2 == 0) {
      return "Juft";
    } else {
      return "toq";
    }
  });
  function increment() {
    sanoq.value++;
  }
  function decrement() {
    sanoq.value--;
  }
  return { sanoq, juftToq, increment, decrement };
});
