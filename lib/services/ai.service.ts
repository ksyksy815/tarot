const apiUrls = {
  todaysFortune: `/api/v1/fortune/todaysFortune`,
};

class AiService {
  getTodaysFortune = async (cardName: string) => {
    console.log("client 2. AiService의 getTodaysFortune cardName: ", cardName);
    return await fetch(`${apiUrls.todaysFortune}?cardName=${cardName}`, {
      method: "GET",
    }).then((res) => res.json());
  };

  getDoOrDont = async (cardNames: string[], context: string) => {};

  getChoices = async (cardNames: string[], context: string) => {};
}

const aiService = new AiService();

export default aiService;
