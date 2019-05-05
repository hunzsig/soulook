
const Cookie = {
  set: (name, value, expireDays) => {
    const date = new Date();
    expireDays = expireDays || 0;
    date.setDate(date.getDate() + expireDays);
    document.cookie = `${name}=${encodeURIComponent(value)}${expireDays > 0 ? ';expires=' + date.toGMTString() : ''};path=/`;
  },
  get: (name) => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = document.cookie.match(reg);
    if (arr) {
      return decodeURIComponent(arr[2]);
    }
    return '';
  },
  clear: (name) => {
    Cookie.set(name, '', -1);
  },
};

export default Cookie;
