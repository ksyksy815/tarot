import { getChoicesResult } from "@/lib/actions/fortune.action";
import { handleError } from "@/lib/utils";
import { NextRequest } from "next/server";

export async function GET({ url }: NextRequest) {
  const query = url.split("?")[1];
  const params = new URLSearchParams(query);

  try {
    console.log("Server 1. GET Do Or Don't params: ", params);
    const context = params.get("context") || "";
    const cardNames = params.get("cardNames");
    const options = params.get("options");

    if (!cardNames) {
      throw new Error("Card is not selected");
    }

    const cardNamesList = cardNames.split(",");

    console.log("route에 들어온 options: ", options);

    const doOrDontResult = await getChoicesResult({
      cardNames: cardNamesList,
      context,
      options: options ? options?.split(",") : [],
    });

    return new Response(JSON.stringify(doOrDontResult));
  } catch (error: any) {
    handleError(error, "Failed to get Today's Fortune");
  }
}
