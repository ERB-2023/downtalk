const URL = "http://localhost:4000";

const fetchRequest = (
  url: string,
  method: string,
  params?: object
): Promise<any> => {
  const headers: {
    "Content-Type": string;
    platform: string;
    // Authorization?: string | null;
  } = {
    "Content-Type": "application/json; charset=utf-8",
    platform: "downtalk",
  };

  if (localStorage.getItem("token")) {
    headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
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
  // TODO: any 수정 필요
  const res = fetchRequest(URL + "/auth", "POST", params);
  return res;
};

export const getUserByEmailOrNickname = (searchKey: string) => {
  const res = fetchRequest(URL + `/users?searchKey=${searchKey}`, "GET");
  return res;
};
