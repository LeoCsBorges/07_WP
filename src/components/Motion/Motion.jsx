import styles from "./Motion.module.css";

export const Motion = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Motion Design</h2>
          <div className={styles.videosWrapper}>
            <iframe
              src="https://www.youtube.com/embed/saLv9ZChWnc?si=D3oLjd8omYWis8J3"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/qeBuI4spFrg?si=_XEPOJvEJzndAYKN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/--FBTFVYlkU?si=_nSUw9ZjB0ZzpawT"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/C549iQKRz2g?si=mZcMf_OJik4D4yhL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motion;
