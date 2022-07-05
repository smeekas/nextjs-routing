import { useContext } from "react";
import EventList from "../../components/EventList";
import FilterBar from "../../components/Filter";
import { eventContext } from "../_app";
function Index() {
  const eventCtx = useContext(eventContext);

  return (
    <div>
      <FilterBar/>
      <EventList list={eventCtx.data} />
    </div>
  );
}
export default Index;
