const express = require("express");
const app = require("../index");
const request = require("supertest");

describe("GET /blog/getall", function () {
  it("fetches all blog details", function (done) {
    request(app)
      .get("/blog/getall")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});

describe("GET /seminar/getall", function () {
  it("fetches all blog details", function (done) {
    request(app)
      .get("/seminar/getall")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
describe("POST /save/blog", function () {
  it("saves blog details Internal Server error", function (done) {
    request(app)
      .post("/save/blog")
      .set("Accept", "application/json")
      .expect(500, done);
  });
});
describe("POST /save/blog", function () {
  it("saves blog details successfully", function (done) {
    request(app)
      .post("/save/blog")
      .send({
        blogHeading: "Test blog",
        content: "Test Blog Content",
        createdDate: 1660897226900,
      })
      .expect(200, done);
  });
});
describe("POST /save/seminar", function () {
  it("saves seminar details Internal Server error", function (done) {
    request(app)
      .post("/save/seminar")
      .set("Accept", "application/json")
      .expect(500, done);
  });
});
describe("POST /save/seminar", function () {
  it("saves seminar details successfully", function (done) {
    request(app)
      .post("/save/seminar")
      .send({
        seminarHeading: "Test blog",
        content: "Test Seminar Content",
        createdDate: 1660897226900,
      })
      .expect(200, done);
  });
});

describe("PUT /seminar/publish/f0e9eed4-f625-4b05-abc0-6ff0f0435d60", function () {
  it("update seminar details success", function (done) {
    request(app)
      .put("/seminar/publish/f0e9eed4-f625-4b05-abc0-6ff0f0435d60")
      .expect(200, done);
  });
});
describe("PUT /seminar/publish/fwrongSeminarId", function () {
  it("update seminar details with invalid seminarId error", function (done) {
    request(app).put("/seminar/publish").expect(404, done);
  });
});
