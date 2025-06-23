import FaqSection from "@/components/home/faq";
import InfoBox from "@/components/home/infoBox";
import ReasonSection from "@/components/home/reasons";
import EnterAnim from "@/components/shared/enterAnim";
import Footer from "@/components/shared/footer/footer";

const Home = () => {
    return (
        <main className="min-h-[100dvh] w-full flex flex-col  items-center  text-black -z-20">
            <EnterAnim />
            <InfoBox />
            <ReasonSection />
            <FaqSection />
            <Footer />
        </main>
    );
};
export default Home;
