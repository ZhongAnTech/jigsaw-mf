/* eslint-disable */
const clearTemplate = function clearTemplate() {
  let template = document.getElementById("tailor_template");
  if (!template) return;
  let link = template.querySelectorAll("link");
  let styles = template.querySelectorAll("style");
  let head = document.getElementsByTagName("head")[0];
  for (var i = 0; i < link.length; i++) {
    head.appendChild(link[i]);
  }
  for (var b = 0; b < styles.length; i++) {
    head.appendChild(styles[b]);
  }
  template.parentElement.removeChild(template);
};
export default clearTemplate;
