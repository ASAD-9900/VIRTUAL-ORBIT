import React from "react";
import planning from "../../assets/planning.jpg";
import idea from "../../assets/ideas.png";
import AgencyGirl from "../../assets/agency-girl2.jpg";
import styles from "../SEO Page Components/PlanningIdeasSection.module.css";

const PlanningIdeasSection = () => (
  <section className={styles.section}>
    {/* Left image */}
    <div className={styles.leftImageContainer}>
      <img src={planning} alt="Team Planning" />
    </div>

    {/* Middle image: curved path */}
    <div className={styles.middleImageContainer}>
      <img src={idea} alt="Idea Path" />
    </div>

    {/* Right text panel */}
    <div className={styles.textPanel}>
      <h2 className={styles.sectionHeading}>
        Outstanding Digital <br />
        Experience
      </h2>
      <p className={styles.sectionText}>
        Ad nec unum copiosae. Sea ex everti labores, ad option iuvaret qui. Id quo esse nusquam. Eam iriure diceret oporteat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque modi aperiam voluptates reprehenderit atque quam cumque, exercitationem esse ut distinctio suscipit temporibus quod sed. Consequatur odio fugit necessitatibus! Sequi explicabo ipsa libero pariatur maiores molestiae non atque blanditiis eos cupiditate.
      </p>
      <button className={styles.discoverButton}>DISCOVER MORE</button>
    </div>

    {/* Overlay image with absolute position */}
    <img
      src={AgencyGirl}
      alt="Agency Girl Overlay"
      className={styles.overlayImage}
    />
  </section>
);

export default PlanningIdeasSection;
