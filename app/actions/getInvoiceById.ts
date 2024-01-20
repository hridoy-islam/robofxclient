import Axios from "@/utils/axios";
import { DecodedToken } from "@/utils/interfaces";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export default async function getInvoiceById() {
  const nextCookies = cookies();
  const tokenData = nextCookies.get("jwt");
  const token = tokenData?.value;

  let decoded;

  if (token) {
    decoded = jwtDecode(token) as DecodedToken;
  }

  try {
    const res = await Axios.get(`/invoices?_id=${decoded?.id}}`);
    return res.data;
  } catch (error) {
    console.error("");
  }
}