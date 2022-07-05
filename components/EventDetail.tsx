import Router, { useRouter } from "next/router";
import { useContext } from "react";
import Image from "next/image";
import { eventContext } from "../pages/_app";
import styles from "../styles/EventDetail.module.css";
function EventDetail() {
  const router = useRouter();
  const eventCtx = useContext(eventContext);
  const eventData = eventCtx.data.find((e) => e.id === router.query.eventId);
  return (
    <div className={styles.eventDetail}>
      <div className={styles.detailBar}>{eventData?.title}</div>
      <div className={styles.card}>
        <div className={styles.image}>
          <Image className={styles.image} width={100} height={100} src={`/${eventData?.image}`} alt="" layout="responsive"/>
        </div>
        <div className={styles.info}>
          <p>{eventData?.date}</p>
          <p>{eventData?.location}</p>
        </div>
      </div>
      <div className={styles.description}>

        <p>{eventData?.description}</p>
      </div>
    </div> 
  );
}
export default EventDetail;
