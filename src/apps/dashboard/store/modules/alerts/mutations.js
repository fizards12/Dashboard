export function setLoading(state, loading) {
  state.loading = loading;
}

export function toggleLoading(state) {
  state.loading = !state.loading;
}

export function clearToast(state) {
  state.toast = null;
}

export function hideToast(state) {
  state.toastVisible = false;
}

export function showToast(state, toast) {
  state.toastVisible = true;
  state.toast = {
    message: toast?.message,
    type: toast?.type,
    duration: toast?.duration,
  };
}
