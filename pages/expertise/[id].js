import { useRouter } from "next/router";
import Giveaways from "@/components/expertiseDetails/Giveaways";
import Events from "@/components/expertiseDetails/Events";
import Production from "@/components/expertiseDetails/Production";
import Videography from "@/components/expertiseDetails/Videography";
import Photography from "@/components/expertiseDetails/Photography";
import SocialMedia from "@/components/expertiseDetails/SocialMedia";
import WebDevelopment from "@/components/expertiseDetails/WebDevelopment";
import { expertise } from "@/assets/data/dummydata";

const ExpertiseDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mapping ID to Components
  const expertiseComponents = {
    1: <Giveaways />,
    2: <Events />,
    // 3: <Production />,
    // 4: <Videography />,
    
    3: <Photography />,
    4: <SocialMedia />,
    5: <WebDevelopment />,
  };

  return expertiseComponents[id] || <p>Loading...</p>; // Show correct page or "Loading..."
};

export default ExpertiseDetail;
