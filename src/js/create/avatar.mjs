PUT/auction/profiles/<name>/media

This endpoint allows for profile avatar images to be set or changed.

    Please note that profile avatar property must be a fully formed URL that links to a live and publicly accessible image. The API will check the provided URL and if it cannot be accessed publicly you will receive a 400 error respon


    {
        "avatar": "https://url.com/image.jpg" // Required
      }



      Request

{
  "name": "string",
  "email": "user@example.com",
  "avatar": "https://url.com/image.jpg",
  "credits": 0,
  "wins": ["string"],
  "_count": {
    "listings": 0
  }
}