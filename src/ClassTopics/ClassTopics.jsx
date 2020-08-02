import React from "react";

const ClassTopics = () => {
  return (
    <section className="component">
      <header>
        <h1>Class Topics</h1>
      </header>
      <section className="topic-categories">
        <section className="JS">
          <h2>JavaScript</h2>
          <ul>
            <li>Arrow functions</li>
            <li>Expressions &amp; Statements</li>
            <li>Objects</li>
            <li>Classes</li>
            <li>Data types &amp; Type coersion</li>
            <li>Scope &amp; Closure</li>
          </ul>
        </section>
        <section className="React">
          <h2>React</h2>
          <ul>
            <li>JSX</li>
            <li>Rendering elements</li>
            <li>Components &amp; Props</li>
            <li>State &amp; Lifecycle</li>
            <li>Conditional rendering</li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default ClassTopics;
