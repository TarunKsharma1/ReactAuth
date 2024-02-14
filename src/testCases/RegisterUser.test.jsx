import { RegisterAysnc } from "../Structure";

const RegisterRes = {
    "id": 4,
    "token": "QpwL5tke4Pnpja7X4"
}

describe("fetchAsync", () => {
    test("Registering api testing call", async () => {
      const response = await RegisterAysnc({
        url: "/api/register",
        method: "post",
        body: {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
      });
      expect(JSON.stringify(response)).toBe(JSON.stringify(RegisterRes));
    });
  });
  