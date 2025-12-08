import { reactive, computed } from "vue";

const state = reactive({
  isVisible: false,
  message: "",
  timeout: null,
});

const isVisible = computed(() => state.isVisible);
const message = computed(() => state.message);

const hideToast = () => {
  state.isVisible = false;
  if (state.timeout) {
    clearTimeout(state.timeout);
    state.timeout = null;
  }
};

const showToast = (msg, duration = 3000) => {
  if (state.isVisible) {
    hideToast();
    setTimeout(() => {
      state.message = msg;
      state.isVisible = true;
      state.timeout = setTimeout(hideToast, duration);
    }, 100);
  } else {
    state.message = msg;
    state.isVisible = true;
    state.timeout = setTimeout(hideToast, duration);
  }
};

export const useToastStore = () => ({
  isVisible,
  message,
  showToast,
  hideToast,
});
