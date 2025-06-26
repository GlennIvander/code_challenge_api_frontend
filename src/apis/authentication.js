import { DOMAIN } from "./config";

export const registerApi = async (bodyObject) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObject),
  };

  try {
    const response = await fetch(`${DOMAIN}/users`, requestOptions);
    if (response.ok) {
      const result = await response.json();
      return [result, ""];
    }
    const errorMessage = await response.text();
    return ["", `Server side error ${errorMessage}`];
  } catch (error) {
    return ["", `Server down: ${error} `];
  }
};

export const loginApi = async (bodyObject) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObject),
  };

  try {
    const response = await fetch(`${DOMAIN}/users/sign_in`, requestOptions);
    if (response.ok) {
      const result = await response.json();
      return [result, ""];
    }
    const errorMessage = await response.text();
    return ["", `Server side error ${errorMessage}`];
  } catch (error) {
    return ["", `Server down: ${error} `];
  }
};
