export function repairUrl(url) {
  let finalChar = url.length - 1;
  if (url[finalChar] === "/") {
    return url;
  } else {
    return url + "/";
  }
}

export const getSedeFromFileName = (file) => {
  let sede = file
    .slice(0, file.length - 5)
    .slice(-2)
    .toUpperCase();
  return sede;
};

export function checkValidParams(sharedParams) {
  for (const property in sharedParams) {
    if (sharedParams[property] === "") {
      return false;
    }
  }
  return true;
}

export function getDiff(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp.push(new Array(n + 1).fill(0));
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = m,
    j = n;
  const diff = [];
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && str1[i - 1] === str2[j - 1]) {
      diff.unshift({ type: "unchanged", value: str1[i - 1] });
      i--;
      j--;
    } else if (j === 0 || (i > 0 && dp[i][j - 1] <= dp[i - 1][j])) {
      diff.unshift({ type: "removed", value: str1[i - 1] });
      i--;
    } else {
      diff.unshift({ type: "added", value: str2[j - 1] });
      j--;
    }
  }

  return diff;
}
