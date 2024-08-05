import BasicPage from "@/components/BasicPage";
import Services from "@/screens/services/Services";
import type { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Our Services | AICana";
  const description =
    "Whether you’re seeking guidance on a specific issue or want a deeper exploration of your life’s path, we offer a variety of tarot reading services to meet your needs.";
  const keywords = [
    "tarot",
    "tarot reading",
    "tarot reading services",
    "tarot card reading",
    "tarot card reading services",
    "ai tarot",
  ];

  return {
    title,
    description: `액티비티 설명`,
    // alternates: {
    //   canonical: canonicalUrl,
    // },
    openGraph: {
      title,
      description,
      // images: { url: ogImageUrlLink },
      // url: canonicalUrl,
    },
    twitter: {
      title,
      description,
      // images: ogImageUrlLink,
    },
    keywords,
  };
}

const Page = () => {
  return (
    <BasicPage>
      <section className={"relative h-[640px] max-h-[816px] w-full"}>
        <Image
          src={"/images/services.png"}
          fill={true}
          alt={"Services"}
          className={"h-full w-full object-cover"}
        />

        <p
          className={
            " h-[250px] w-[250px] grid place-content-center text-center text-white absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] text-5xl border border-white rounded-full bg-white/20 font-serif italic"
          }
        >
          AICana
        </p>
      </section>

      <section className={`w-full flex flex-col gap-y-5 md:gap-y-8 px-5`}>
        <h1 className={`text-5xl font-bold`}>{`Our Tarot Reading Services`}</h1>
        <p
          className={"text-xl"}
        >{`At AICana, we offer a range of tarot reading services designed to
    provide you with clarity, guidance, and insight into your life's
    questions and decisions. Explore our services below to find the
    perfect reading for your needs.`}</p>
      </section>

      <Services />
    </BasicPage>
  );
};

export default Page;
