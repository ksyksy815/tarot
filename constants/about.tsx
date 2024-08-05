import { ContentStructure } from "@/types/content.type";
import {
  FaCheckCircle,
  FaClock,
  FaCogs,
  FaPalette,
  FaUser,
} from "react-icons/fa";
import { URLS } from "./urls";

export const ABOUT: ContentStructure = {
  introduction: {
    title: "About AIcana",
    description:
      "Welcome to AIcana, your digital sanctuary for mystical insights and tarot wisdom, powered by the cutting-edge capabilities of artificial intelligence. At AIcana, we believe that the ancient art of tarot reading can blend seamlessly with modern technology to provide you with profound and personalized guidance.",
  },
  mission: {
    title: "Our Mission",
    description:
      "Our mission at AIcana is to make the wisdom of tarot accessible to everyone, anywhere, at any time. We aim to empower individuals with the knowledge and insights they need to navigate life’s complexities and make informed decisions. By leveraging advanced AI technology, we bring you accurate, insightful, and personalized tarot readings that resonate with your unique life journey.",
  },
  howAIcanaWorks: {
    title: "How AIcana Works",
    description:
      "AIcana combines the timeless wisdom of tarot with the innovative power of AI.",
    list: [
      {
        subtitle: "User-Friendly Interface",
        description:
          "Our platform is designed to be intuitive and easy to use. Whether you are a seasoned tarot enthusiast or a curious newcomer, you’ll find our interface welcoming and straightforward.",
      },
      {
        subtitle: "Personalized Context",
        description:
          "Begin your tarot reading by providing context about your current situation. This helps our AI to tailor the reading to your specific needs and circumstances.",
      },
      {
        subtitle: "Card Selection",
        description:
          "Choose your tarot cards from our beautifully designed digital deck. Each card has been meticulously illustrated to capture its traditional symbolism and meaning.",
      },
      {
        subtitle: "AI Interpretation",
        description:
          "Our advanced AI, trained on a vast array of tarot interpretations, provides you with detailed and accurate readings. You’ll receive insights into various aspects of your life, including overall fortune, work, relationships, business, health, and more.",
      },
    ],
  },
  whyChooseAIcana: {
    title: "Why Choose AIcana?",
    list: [
      {
        subtitle: "Accurate Readings",
        description:
          "Our AI has been trained on extensive tarot data to provide you with precise and meaningful interpretations.",
        icon: () => {
          return <FaCheckCircle size={24} color="white" />;
        },
      },
      {
        subtitle: "24/7 Accessibility",
        description:
          "Access your tarot readings anytime, anywhere. Our platform is available around the clock to offer you guidance whenever you need it.",
        icon: () => {
          return <FaClock size={24} color="white" />;
        },
      },
      {
        subtitle: "Personalized Insights",
        description:
          "Each reading is customized based on the context you provide, ensuring that the guidance you receive is relevant to your unique situation",
        icon: () => {
          return <FaUser size={24} color="white" />;
        },
      },
      {
        subtitle: "Innovative Technology",
        description:
          "We harness the power of artificial intelligence to enhance the depth and accuracy of traditional tarot readings.",
        icon: () => {
          return <FaCogs size={24} color="white" />;
        },
      },
      {
        subtitle: "Beautifully Designed Deck",
        description:
          "Our digital tarot cards are crafted with care and attention to detail, bringing the mystical allure of tarot to your screen.",
        icon: () => {
          return <FaPalette size={24} color="white" />;
        },
      },
    ],
  },
  ourTarotReadingServices: {
    title: "Our Tarot Reading Services",
    description:
      "Whether you’re seeking guidance on a specific issue or want a deeper exploration of your life’s path, we offer a variety of tarot reading services to meet your needs.",
    list: [
      {
        subtitle: "Today’s Fortune",
        description: "Choose one card and discover how your day will unfold.",
        slug: URLS.services.todaysFortune,
      },
      {
        subtitle: "Do or Don’t",
        description:
          "Input your specific context and get guidance on whether to take a particular action.",
        slug: URLS.services.doOrDont,
      },
      {
        subtitle: "Choices",
        description:
          "Select 2 or 3 cards to see the outcomes of different options based on your provided context.",
        slug: URLS.services.choices,
      },
    ],
  },
  meetTheDeveloper: {
    title: "Meet the Developer",
    description:
      "AIcana is brought to you by a dedicated and passionate developer who believes in the power of combining technology with ancient wisdom to provide meaningful and accessible guidance to everyone. As the sole creator, I am committed to ensuring that your experience with AIcana is enriching, enlightening, and empowering.",
  },
  contactUs: {
    title: "Contact Us",
    description:
      "I love to hear from my users! Whether you have questions, feedback, or simply want to share your experience, feel free to reach out to me. You can contact me at seoyeonkim815@gmail.com or follow AIcana on social media channels for the latest updates and insights.",
  },
};
