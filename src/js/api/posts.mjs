import { API_BASE_URL } from "./apiBase.mjs";
import { auth } from "./autherization.mjs"

export async function fetchPosts() {
    try {
      const response = await fetch(`${API_BASE_URL}/auction/listings`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQ0OCwibmFtZSI6Im1pa2tpNzgiLCJlbWFpbCI6Im1pa2s3OEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6Imh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS81L3Vuc3BsYXNoLWtpdHN1bmUtNC5qcGc_aXhsaWI9cmItMC4zLjUmcT04MCZmbT1qcGcmY3JvcD1lbnRyb3B5JmNzPXRpbnlzcmdiJnc9NDAwJmZpdD1tYXgmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZzPWRkMDYwZmUyMDliNGE1NjczM2ExZGNjOWI1YWVhNTNhIiwiY3JlZGl0cyI6MTAwMCwid2lucyI6W10sImlhdCI6MTY4MjkzNTY5MH0.T_ryPPlRZhcL3CvRYUCV7m9YOFzjRAWAH7Kl9pNnGes"
        }
      });
      const posts = await response.json();

      console.log(posts)
      return posts;
    } catch (error) {
      console.error(error);
    }
  }
  



