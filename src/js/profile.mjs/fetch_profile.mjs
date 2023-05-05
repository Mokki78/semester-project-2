import { headers } from "../api/constants/headers.mjs";
import { API_BASE_URL } from "../api/constants/apiBase.mjs";


export async function profileData() {
    try {
        const response = await fetch(`${API_BASE_URL}/auction/profiles/` + id , headers, => {
            method: "GET",
            Application: JSON.parse({ name, credit, avatar, counts, bids, listings }),
            headers: headers:
                Authorization: `Bearer: ${ accessToken }
            }

        })
    }
}

GET /auction/profiles/<name>

This endpoint returns a single registered profile.

Response
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