import axios from "axios";

const options = {
  url: BASE_URL,
  params: {
    relatedToVideoId: "7ghhRHRP6t4",
    part: "id,snippet",
    type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "25c90601efmsh3335fc609958ac3p1a168ejsn7b749883dd45",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};