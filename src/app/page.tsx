import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Topbar from "@/components/header/TopBar";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Courses from "@/components/home/Courses";
import Features from "@/components/home/Features";
import FinalCTA from "@/components/home/FinalCTA";
import Instructors from "@/components/home/Instructors";
import LearnigJourney from "@/components/home/LearnigJourney";
import NewsFeed from "@/components/home/NewsFeed";
import Newsletter from "@/components/home/Newsletter";
import Partners from "@/components/home/Partners";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <Header />
      <Banner />
      <Categories />
      <Partners />
      <Features />
      <Courses />
      <Newsletter />
      <Instructors />
      <Stats />
      <FinalCTA />
      <LearnigJourney />
      <NewsFeed />
      <Footer />
    </div>
  );
}
