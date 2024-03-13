export function repairUrl(url) {
  let finalChar = url.length - 1;
  if (url[finalChar] === "/") {
    return url;
  } else {
    return url + "/";
  }
}

export function checkValidParams(sharedParams, tt) {
  for (const property in sharedParams) {
    if (sharedParams[property] === "") {
      return false;
    }
  }
  return true;
}
