"use server";

import OpenAI from "openai";
import { handleError } from "../utils";

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const getTodaysFortune = async (cardName: string) => {
  console.log("Server 2. getTodaysFortune cardName: ", cardName);
  try {
    // TODO: openAI 부르기
    // const result = await openAi.chat.completions.create({
    //   model: "gpt-4",
    //   messages: [
    //     {
    //       role: "system",
    //       content:
    //         "You are a tarot reader. Provide a detailed tarot reading based on the card drawn, and format the response into the following sections: overall fortune of today, work, relationship, business, health, finances, personal growth, travel, luck, family, emotions.",
    //     },
    //     {
    //       role: "user",
    //       content: `What does the tarot card "${cardName}" mean for today's fortune?`,
    //     },
    //   ],
    // });

    //return result.choices[0].message.content || "대박나실겁니다 선생님";
    return "**Overall Fortune of Today**: \nDrawing The Empress suggests that today will be filled with fertility, beauty, nature, and abundance. This could suggest a day full of creativity and growth. Favourable conditions are anticipated, particularly around anything related to the nurturing of life and growth.\n\n**Work**:\nAt work, The Empress signifies a nurturing environment. You might have to take on a mentoring role to nurture your juniors or a new project. Creative fields will be particularly positively influenced.\n\n**Relationship**:\nIn terms of relationships, The Empress signifies deep and fulfilling connections. If you’re single, you may encounter someone who has a loving and nurturing influence on your life. If you’re in a relationship, this card encourages a deeper, more nurturing connection.\n\n**Business**:\nThe Empress is great for businesses, especially those relating to women, beauty, health, or the home. Expect a period of growth and abundance. You will have to nurture and give your time and love to see success.\n\n**Health**:\nThe Empress encourages you to nurture your physical and mental wellbeing. Being generous with self-care will bring about an improvement in your overall health. It may also suggest pregnancy in a woman's life.\n\n**Finances**:\nIn terms of finances, The Empress promises abundance and growth. You’ll likely experience financial gain, especially if you’ve been nurturing and investing your resources wisely.\n\n**Personal Growth**:\nThe Empress brings forth growth, creativity and abundance in your personal development. This could mean working on nurturing your own dreams, talents and ambitions. \n\n**Travel**:\nFor travel, The Empress suggests you'll have a relaxing and rejuvenating trip, throwing you in the lap of luxury and natural beauty. It is also a herald of a safe and secure journey.\n\n**Luck**:\nThe Empress indicates a lucky period. Expect great abundance in different areas of your life, if you've been nurturing your goals and visions.\n\n**Family**:\nAs The Empress is a symbol of motherhood, relationships within your family will be surrounded by a warm, nurturing and caring atmosphere. It can also hint at pregnancy or a birth of a new family member.\n\n**Emotions**:\nIn emotions, The Empress suggests you will feel nurtured and taken care of, and in turn, this will rejuvenate your emotional self, filling you with peace and contentment. You will be encouraged to express your feelings freely and creatively.\n";
  } catch (error: any) {
    handleError(error, "Failed to get Today's Fortune");
  }
};

export const getDoOrDontResult = async ({
  cardNames = ["", ""],
  context = "",
}: {
  cardNames: string[];
  context: string;
}) => {
  try {
    if (!context || !cardNames[0] || !cardNames[1]) {
      throw new Error(
        "Invalid parameters: Either context or card names are missing! 🥲"
      );
    }

    // const result = await openAi.chat.completions.create({
    //   model: "gpt-4",
    //   messages: [
    //     {
    //       role: "system",
    //       content:
    //         "You are a tarot reader. Provide a detailed reading based on the provided context and the three tarot cards.",
    //     },
    //     { role: "user", content: `Context: ${context}` },
    //     {
    //       role: "user",
    //       content: `If you do this thing, the card is: ${cardNames[0]}. If you don't do this thing, the card is: ${cardNames[1]}. To help you make the right decision, the advice card is: ${cardNames[2]}.`,
    //     },
    //   ],
    // });

    // return result.choices[0].message.content;
    return `The Queen of Pentacles as your "do it" card suggests that moving to Germany can offer a nurturing and comfortable environment, as well as potential for financial stability. This card is often associated with practicality and security, perhaps indicating that a move to Germany might bring these aspects into your life. This is the card of a person who is able to create a welcoming and warm atmosphere and often represents prosperity in the material world. It may symbolize the wealth of new experiences and opportunities that moving to a new place can bring.

On the other hand, the Five of Wands in the position of "don't do it" indicates conflict and competition. This could mean staying in Korea might present you with challenges, struggles, and a sense of fighting against the current. But remember, storms come to clear paths sometimes. What appears to be conflict can often result in healthy growth and progress over time. It's also possible this card is hinting at internal conflicts about this decision.

The advice card, The Moon, asks for patience. This card often speaks to times of uncertainty, and when things aren't exactly as they appear. It is a call to trust your intuition, and perhaps to explore more deeply the discomfort attached to staying in Korea, as seen in the Five of Wands, as this could give you more insight into the root of your current situation.

At this point, the cards favor moving to Germany, but they also suggest that there's more exploration needed before making your final decision. The Moon also implies that there may be factors that you're not currently aware of which need to be considered. You should take time to understand your fears, hopes, and the potential options before deciding on your course of action. Listen to your inner voice. The answers are within you.`;
  } catch (error: any) {
    handleError(error, "Failed to get Do or Don't");
  }
};

// export const getChoicesResult = async ({
//   cardNames = ["", ""],
//   context = "",
// }: {
//   cardNames: string[];
//   context: string;
// }) => {
//   try {
//     if (!context || !cardNames[0] || !cardNames[1] || !cardNames[2]) {
//       throw new Error("Invalid parameters");
//     }

//     const result = await openAi.chat.completions.create({
//       model: "gpt-4",
//       messages: [
//         {
//           role: "system",
//           content:
//             "You are a tarot reader. Provide a detailed reading based on the provided context and the two tarot cards.",
//         },
//         { role: "user", content: `Context: ${context}` },
//         {
//           role: "user",
//           content: `If you do this thing, the card is: ${cardNames[0]}. If you don't do this thing, the card is: ${cardNames[1]}.`,
//         },
//       ],
//     });

//     //return result.choices[0].message.content
//     return "무조건 1번입니다 선생님 가시죠 선생님";
//   } catch (error: any) {
//     handleError(error, "Failed to get Do or Don't");
//   }
// };
