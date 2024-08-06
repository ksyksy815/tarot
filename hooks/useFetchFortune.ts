import { QUERY_KEYS } from "@/constants/queryKeys";
import aiService from "@/lib/services/ai.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useFetchFortune = () => {
  const [enabled, setEnabled] = useState(false);
  const [params, setParams] = useState<{
    type: "todaysFortune" | "doOrDont" | "choices";
    cardNames: string[];
  }>({
    type: "todaysFortune",
    cardNames: [],
  });
  const [userContext, setUserContext] = useState<string>("");

  const { data, refetch, status } = useQuery({
    queryKey: [QUERY_KEYS.fortune.todaysFortune, params.type, params.cardNames],
    queryFn: async () => {
      if (!params.cardNames.length) return null;

      switch (params.type) {
        case "todaysFortune":
          return aiService.getTodaysFortune(params.cardNames[0]);
        case "doOrDont":
          return aiService.getDoOrDont(params.cardNames, userContext);
        default:
          return aiService.getChoices(params.cardNames, userContext);
      }

      return null;
    },
    enabled,
  });

  const fetchFortune = ({
    type,
    cardNames,
    context,
  }: {
    type: "todaysFortune" | "doOrDont" | "choices";
    cardNames: string[];
    context: string;
  }) => {
    console.log(
      "Client 1. useFetchFortune안의 fetchFortune params: ",
      type,
      cardNames
    );
    setParams({ type, cardNames });
    setUserContext(context);
    setEnabled(true);
    //refetch();
  };

  return {
    data,
    status,
    fetchFortune,
  };
};

export default useFetchFortune;
