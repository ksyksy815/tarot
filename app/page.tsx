import MainContextProvider from "@/screens/home/MainContextProvider";
import StepManager from "@/screens/home/StepManager";
import TemporaryStageTracker from "@/screens/home/TemporaryStageTracker";

export default function Home() {
  return (
    <MainContextProvider>
      <TemporaryStageTracker />
      <StepManager />
    </MainContextProvider>
  );
}
