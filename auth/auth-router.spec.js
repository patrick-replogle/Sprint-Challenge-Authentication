const supertest = require("supertest");

const db = require("../database/dbConfig.js");
const server = require("../api/server.js");

let token;

beforeEach(async () => {
  await db.seed.run();
});

afterAll(async () => {
  await db.destroy();
});

describe("environment", () => {
  it("should set environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("register endpoint", () => {
  test("should return a status 201 ok", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({ username: "user3", password: "password" });
    expect(res.status).toBe(201);
  });

  test("response type should be json", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({ username: "user4", password: "password" });
    expect(res.type).toBe("application/json");
  });

  test("should return a username", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({ username: "user5", password: "password" });
    expect(res.body.new_user.username).toBe("user5");
  });
});

describe("login endpoint", () => {
  test("should return a status 200", async () => {
    const res = await supertest(server)
      .post("/api/auth/login")
      .send({ username: "user1", password: "password" });
    token = res.body.token;
    expect(res.status).toBe(200);
  });

  test("should return json", async () => {
    const res = await supertest(server)
      .post("/api/auth/login")
      .send({ username: "user1", password: "password" });
    expect(res.type).toBe("application/json");
  });

  test("should return a welcome message", async () => {
    const res = await supertest(server)
      .post("/api/auth/login")
      .send({ username: "user1", password: "password" });
    expect(res.body.message).toBe("Welcome user1!");
  });
});

describe("get jokes endpoint", () => {
  test("should return a 200 status", async () => {
    const res = await supertest(server)
      .get("/api/jokes")
      .set("Authorization", `${token}`);
    expect(res.status).toBe(200);
  });

  test("should return json", async () => {
    const res = await supertest(server)
      .get("/api/jokes")
      .set("Authorization", `${token}`);
    expect(res.type).toBe("application/json");
  });
});
