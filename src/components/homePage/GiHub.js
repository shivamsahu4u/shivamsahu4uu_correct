import { motion } from "framer-motion";
import React from "react";
import { Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import CodersRankActivity from '@codersrank/activity';

window.customElements.define('codersrank-activity', CodersRankActivity);
const GitHub = () => {
  const [element, controls] = useScroll();  
  return (
    <div id="skills" className="skills-section">
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="container"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Social</span>Profiles
          </h1>
        </div>
        <Row>
        <codersrank-activity username="shivamsahu4u"></codersrank-activity>
		<br />
          <img align="center" src="https://github-readme-stats.vercel.app/api?username=shivamsahu4u&bg_color=30,e96443,904e95&title_color=fff&text_color=fff" alt="Shivam's github stats" width="55%" />
		           
          <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivamsahu4u&layout=compact" alt="Shivam's github stats" width="45%" />
		  
		   <img align="center"
            src="https://activity-graph.herokuapp.com/graph?username=shivamsahu4u&theme=github"
            alt="GitHub Activity Graph" width="100%" />
        </Row>
        <Row>
        </Row>
      </motion.div>
    </div>
  );
};

export default GitHub;