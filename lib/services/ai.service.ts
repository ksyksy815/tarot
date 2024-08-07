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

  getDoOrDont = async (cardNames: string[], context: string) => {
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

  getChoices = async (cardNames: string[], context: string) => {};
}

const aiService = new AiService();

export default aiService;
