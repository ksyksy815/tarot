import { getTodaysFortune } from "@/lib/actions/fortune.action";
import { handleError } from "@/lib/utils";
import { NextRequest } from "next/server";

export async function GET({ url }: NextRequest) {
  const query = url.split("?")[1];
  const params = new URLSearchParams(query);

  try {
    console.log("Server 1. GET todaysFortune params: ", params);
    const cardName = params.get("cardName");

    if (!cardName) {
      throw new Error("Card is not selected");
    }

    const todaysFortune = await getTodaysFortune(cardName);

    return new Response(JSON.stringify(todaysFortune));
  } catch (error: any) {
    handleError(error, "Failed to get Today's Fortune");
  }
}
