import Calendar from "@/components/calendar";
import Divider from "@/components/divider";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Heart from "@/components/heart";
import Location from "@/components/location";
import Main from "@/components/main";
import Comment from "@/components/comment";
import Message from "@/components/message";
import Music from "@/components/ui/music";
import TopButton from "@/components/ui/top-button";

export default function Home() {
 

  return (
    <div>
      <Main />

      <Divider />
      <Message />
      <Divider />
      <Calendar />
      <Divider />
      <Location />
      <Divider />
      <Gallery />
      <Divider />
      <Heart />
      <Divider />
      <Comment />

      <Footer />
      <Music />
      <TopButton />
    </div>
  );
}
