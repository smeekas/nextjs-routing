import { useRouter } from "next/router";
import { useContext } from "react";
import EventList from "../../components/EventList";
import { eventContext } from "../_app";
import styles from "../../styles/CatchAll.module.css";
function EventSlug() {
  const router = useRouter();
  const eventCtx = useContext(eventContext);
  const date = router.query.slug;
  console.log(date);
  const list = eventCtx.data.filter((e) => {
    const dateObj = new Date(e.date);

    // console.log(date && date[0]);
    if (date) {
      // console.log(object);/
      return (
        dateObj.getFullYear() === Number(date[0]) &&
        dateObj.getMonth() === Number(date[1])
      );
    } else {
      return true;
    }
  });
  console.log(list);
  return (
    <div>
      {list.length === 0 && (
        <h2 className={styles.error}>No events found. adjust filter values</h2>
      )}
      {list.length > 0 && <EventList list={list} />}
    </div>
  );
}
export default EventSlug;
