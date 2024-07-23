import MainContextProvider from "@/screens/home/MainContextProvider";
import StepManager from "@/screens/home/StepManager";

export default function Home() {
  return (
    <MainContextProvider>
      <StepManager />
    </MainContextProvider>
  );
}
