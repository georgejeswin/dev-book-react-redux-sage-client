const key: string = "jwt";

const storageEngine = {
  set: (key: string, value: any) => {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  },
  unset: (key: string) => {
    localStorage.removeItem(key);
  },
  get: (key: string) => {
    return localStorage.getItem(key);
  },
  clear: () => localStorage.clear(),
  isLogin: () => {
    if (localStorage.getItem(key)) return true;
  },
};

export default storageEngine;
