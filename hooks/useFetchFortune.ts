import { QUERY_KEYS } from "@/constants/queryKeys";
import aiService from "@/lib/services/ai.service";
import { MainContextType } from "@/screens/home/MainContextProvider";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useFetchFortune = () => {
  const [enabled, setEnabled] = useState(false);
  const [params, setParams] = useState<{
    type: MainContextType["type"];
    cardName: string;
  }>({
    type: "todaysFortune",
    cardName: "",
  });
  const { data, refetch, status } = useQuery({
    queryKey: [QUERY_KEYS.fortune.todaysFortune, params.type, params.cardName],
    queryFn: async () => {
      if (!params.cardName) return null;

      if (params.cardName) {
        return aiService.getTodaysFortune(params.cardName);
      }

      return null;
    },
    enabled,
  });

  const fetchFortune = (type: MainContextType["type"], cardName: string) => {
    console.log(
      "Client 1. useFetchFortune안의 fetchFortune params: ",
      type,
      cardName
    );
    setParams({ type, cardName });
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
