const fetchRequest = (
  url: string,
  method: string,
  params: any
): Promise<any> => {
  var headers = {
    "Content-Type": "application/json; charset=utf-8",
    platform: "downtalk",
  };

  if (localStorage.getItem("token")) {
    headers["Authorization"] = localStorage.getItem("token");
  }

  if (params) {
    return fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(params),
    });
  } else {
    return fetch(url, {
      method: method,
      headers: headers,
    });
  }
};

export const loginByGoogle = (params: any) => {
  const res = fetchRequest("http://localhost:4000" + "/auth", "POST", params);
  return res;
};
