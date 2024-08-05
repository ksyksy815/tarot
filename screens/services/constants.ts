import { URLS } from "@/constants/urls";

export const SERVICES = [
  {
    spreadType: "todaysFortune",
    title: "Today's Fortune",
    description: `Start your day with a glimpse into the energies and influences that will shape your day. Our "Today's Fortune" tarot reading offers you daily guidance to navigate through events and challenges with confidence and clarity.`,
    slug: URLS.services.todaysFortune,
  },
  {
    spreadType: "doOrDont",
    title: "Do or Don't",
    description: `Facing a significant decision? Our "Do or Don't" tarot reading provides clear guidance on whether to take action or hold back. Understand the potential outcomes and make informed decisions with greater assurance.`,
    slug: URLS.services.doOrDont,
  },
  {
    spreadType: "choices",
    title: "Choices",
    description: `Considering multiple options? The "Choices" tarot reading explores each path's potential outcomes, helping you understand the implications of each choice. Make confident and informed decisions that align with your goals and values.`,
    slug: URLS.services.choices,
  },
];
