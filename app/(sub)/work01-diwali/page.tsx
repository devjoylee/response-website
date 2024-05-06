import React from 'react';
import styles from '../styles.module.css';

const WorkDetailPage = () => {
  return (
    <section className={styles.subPage}>
      <div className={styles.video}></div>
      <div className={styles.title}>
        <span>TELUS</span>
        <h3>2022 Diwali</h3>
      </div>
      <div className={styles.description}>
        <dl>
          <dt>Background</dt>
          <dd>
            TELUS by its values and actions has always been ‘a network that gives back’. As a
            leading telecom provider our client has always given best value to its customers. This
            value goes beyond offers and price offs. It extends itself in our client’s social
            initiatives as well. Our client wanted to highlight how they do their bit of good for
            the world at large. And it wanted to say it’s possible only because of its customers
          </dd>
        </dl>
        <dl>
          <dt>Our challenge</dt>
          <dd>
            Our challenge was to speak about the social good that TELUS does through its many
            initiatives. The initiatives in question this time were three – helping youth learn
            critical skills, providing mental health support to those in need and provision of
            healthy meals for children.
          </dd>
        </dl>
        <dl>
          <dt>Our Answer</dt>
          <dd>
            We chose to use the occasion of ‘Diwali’ to communicate this and found just the perfect
            way of telling our story in a warm, heart-touching manner. We created a campaign which
            used the entire act of lighting a ‘Diya’ as the perfect metaphor for all the three
            initiatives from TELUS. ‘Diyas’ are traditional Indian lamps made of clay, that have a
            cotton wick and use edible oil as fuel.
          </dd>
          <dd>
            While pouring the oil into the ‘Diya’ became the metaphor for healthy meal for children,
            the act of making the wick became the metaphor for learning of critical skills; and the
            lighting of the Diya became the metaphor for mental health support that TELUS
            initiatives help provide. Hence, we were able to create a campaign that effectively
            communicated the social initiatives from brand TELUS and yet make a campaign that was
            all about ‘Diwali’ and spreading of light.
          </dd>
          <dd>
            The campaign created in two languages, Hindi and Punjabi gave us over 1.2M impressions
            with a CPCV of $0.02.
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default WorkDetailPage;
