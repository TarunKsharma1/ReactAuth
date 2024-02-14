import { loginAsync } from "../Structure";

const LoginRes = {
    "token": "QpwL5tke4Pnpja7X4"
}

describe("fetchAsync", () => {
    test("Testing  login api call", async () => {
      const response = await loginAsync({
        url: "/api/login",
        method: "post",
        body: {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
      });
      expect(JSON.stringify(response)).toBe(JSON.stringify(LoginRes));
    });
  });
  