
if (!window.history.__chaoxi_decorated) {
  window.history.__chaoxi_decorated = true;
  const originalPushState = window.history.pushState;
  window.history.pushState = function (state) {
    const result = originalPushState.apply(this, arguments);
    dispatchPopStateEvent(state)
    return result;
  }

  const originalReplaceState = window.history.replaceState;
  window.history.replaceState = function (state) {
    const result = originalReplaceState.apply(this, arguments);
    dispatchPopStateEvent(state)
    return result;
  }

  function dispatchPopStateEvent(state) {
    let evt = null;
    try {
      evt = new PopStateEvent('popstate', { state });
    } catch (err) {
      evt = document.createEvent('PopStateEvent');
      evt.initPopStateEvent('popstate', false, false, state);
    }
    window.dispatchEvent(evt)
  }
}