export function checkQueryParams(param) {
  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has(param)) {
    return true;
  }
  return false;
}

export function removeLoader() {
  let loader = document.getElementById('dots-loader');
  if (loader) {
    loader.remove();
  }
}
