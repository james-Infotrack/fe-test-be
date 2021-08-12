"use strict";

module.exports.api = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        username: "infotrack",
        password: "hiring",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.titles = async (event) => {
  const x = JSON.parse(event.body);
  const headers = event.headers;
  console.log({ headers })
  try {
    if (
      !event.headers.username === "infotrack" ||
      !event.headers.password === "hiring"
    ) {
      return {
        statusCode: 401,
        body: JSON.stringify(
          {
            status: "Unauthorised, Incorrect headers",
            event,
          },
          null,
          2
        ),
      };
    } else if (!x.titleReference || !x.matter) {
      return {
        statusCode: 500,
        body: JSON.stringify(
          {
            error: "Title reference and matter are required",
            body: x,
            headers,
          },
          null,
          2
        ),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          "lot/plan": x.titleReference,
          firstOwner: "Government Prop",
          LGA: "Sydney",
          Price: "26.40",
          matter: x.matter,
        },
        null,
        2
      ),
    };
  } catch (e) {
    console.log(e, event);
  }
};
