const apiUrls = {
  todaysFortune: `/api/v1/fortune/todaysFortune`,
  doOrDont: `/api/v1/fortune/doOrDont`,
  choices: `/api/v1/fortune/choices`,
};

class AiService {
  getTodaysFortune = async (cardName: string) => {
    console.log("client 2. AiService의 getTodaysFortune cardName: ", cardName);
    return await fetch(`${apiUrls.todaysFortune}?cardName=${cardName}`, {
      method: "GET",
    }).then((res) => res.json());
  };

  getDoOrDont = async ({
    cardNames,
    context,
  }: {
    cardNames: string[];
    context: string;
  }) => {
    console.log(
      "client 2. AiService의 getDoOrDont cardName: ",
      cardNames,
      context
    );

    return await fetch(
      `${apiUrls.doOrDont}?cardNames=${cardNames.join(",")}&context=${context}`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  };

  getChoices = async ({
    cardNames,
    context,
    options,
  }: {
    cardNames: string[];
    context: string;
    options: (string | null)[];
  }) => {
    console.log(
      "client 2. AiService의 getChoices: ",
      cardNames,
      context,
      options
    );

    return await fetch(
      `${apiUrls.choices}?cardNames=${cardNames.join(
        ","
      )}&context=${context}&options=${options.join(",")}`,
      {
        method: "GET",
      }
    ).then((res) => res.json());
  };
}

const aiService = new AiService();

export default aiService;
