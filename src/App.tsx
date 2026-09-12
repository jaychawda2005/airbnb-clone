import { useEffect, useState } from "react";
import Header from "./components/Header";
import PhotoGrid from "./components/PhotoGrid";
import ListingTitle from "./components/ListingTitle";
import ListingMeta from "./components/ListingMeta";
import Description from "./components/Description";
import Sleeping from "./components/Sleeping";
import Amenities from "./components/Amenities";
import ReserveCard from "./components/ReserveCard";
import AvailabilityCalendar from "./components/AvailabilityCalendar";
import Reviews from "./components/Reviews";
import MapSection from "./components/MapSection";
import HostSection from "./components/HostSection";
import ThingsToKnow from "./components/ThingsToKnow";
import NearbyStays from "./components/NearbyStays";
import StickyNav from "./components/StickyNav";
import PhotoTour from "./components/PhotoTour";
import Lightbox from "./components/Lightbox";
import { useModalRoute } from "./hooks/useModalRoute";
import "./App.css";

const TOUR_MODAL = "PHOTO_TOUR_SCROLLABLE";

function App() {
  const route = useModalRoute();
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 420);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tourOpen = route.modal === TOUR_MODAL && !route.modalItem;
  const lightboxOpen = route.modal === TOUR_MODAL && !!route.modalItem;
  const lightboxIndex = route.modalItem ? Number(route.modalItem) : 0;

  const openTour = () => route.push({ modal: TOUR_MODAL, modalItem: null });
  const openLightboxAt = (i: number) => route.push({ modal: TOUR_MODAL, modalItem: String(i) });
  const backToTour = () => route.push({ modal: TOUR_MODAL, modalItem: null });
  const closeAll = () => route.close();

  return (
    <div>
      <Header />
      <StickyNav visible={stickyVisible} />
      <div className="app">
        <ListingTitle />
        <div id="photos">
          <PhotoGrid onOpenTour={openTour} onOpenLightbox={openLightboxAt} />
        </div>

        <div className="app__body">
          <div className="app__calendar-body">
            <main className="app__main">
            <ListingMeta />
            <Description />
            <Sleeping />
            <Amenities />
            <AvailabilityCalendar />
            </main>
            <ReserveCard />
          </div>
          <main className="app__main app__below-calendar">
            <div id="reviews">
              <Reviews />
            </div>
            <div id="location" className="app__full-width-section">
              <MapSection />
            </div>
            <HostSection />
            <ThingsToKnow />
            <NearbyStays />
          </main>
        </div>
      </div>

      {tourOpen && <PhotoTour onClose={closeAll} onOpenLightbox={openLightboxAt} />}
      {lightboxOpen && (
        <Lightbox
          index={lightboxIndex}
          onIndexChange={openLightboxAt}
          onBackToTour={backToTour}
          onClose={closeAll}
        />
      )}
    </div>
  );
}

export default App;
