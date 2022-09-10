import React from "react";
import chris from "../../assets/images/chris.jpg";

function Project() {
  return (
    <section>
      <div>
        <p>Fan Page</p>
        <a href="https://macykcool.github.io/fanpage/"> Deployed
          </a>
          <a href="https://github.com/macykcool/pro-port"> Repo
          </a>
        <p>
          <a href="https://macykcool.github.io/fanpage/">
            <img
              src={chris}
              className="my-2"
              style={{ height: "25%", width: "25%" }}
              alt="demo"
            />
          </a>
        </p>
      </div>
    </section>
  );
}

export default Project;
