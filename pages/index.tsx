import { useContext } from "react";
import EventList from "../components/EventList";
import { eventContext } from "./_app";
function Index() {
  const eventCtx = useContext(eventContext);
  return (
    <div>
      <EventList list={eventCtx.data.filter((e) => e.isFeatured)} />
    </div>
  );
}
export default Index;
