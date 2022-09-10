import React, { useState } from "react";

function Projects() {
  return (
    <section className="my-5">
      <div className="center">
        <div>
          <div>
            <a href="https://github.com/hectorromo06/depression-sink/tree/main">
              <img
                src="./assets/images/depsink.jpg"
                alt="preview of depression sink group 2 project website"
                
              />
            </a>
            <h2>Depression Sink</h2>
          </div>

          <div>
            <a href="https://macykcool.github.io/fanpage/">
              <img
                src="./assets/images/chris.jpg"
                alt="preview of chris isaak fanpage"
                
              />
            </a>
            <h2>Fanpage</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
