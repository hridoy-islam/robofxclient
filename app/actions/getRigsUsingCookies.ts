import Axios from "@/utils/axios";
import { cookies } from "next/headers";

import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";

export default async function getRigsUsingCookies(pageNumber: Number) {
  const nextCookies = cookies();
  const token = nextCookies.get("jwt");
  const jwt = token?.value;
  let decoded;
  if (jwt) {
    decoded = jwtDecode(jwt) as DecodedToken;
  }

  try {
    const res = await Axios.get(`/rigs`, {
      params: {
        userid: decoded?._id,
        isDeleted: false,
        page: pageNumber,
      },
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("");
  }
}
