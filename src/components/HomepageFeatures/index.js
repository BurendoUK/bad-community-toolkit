import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Frameworks & Toolkits',
    Svg: require('@site/static/img/noun-toolkit-154266-066BEB.svg').default,
    link: '/docs/intro',
    description: (
      <>
        <a href="/docs/Frameworks%20and%20Toolkits/intro">Combinations of Frameworks and Toolkits that help organisations solve larger problems</a>

      </>
    ),
  },
  {
    title: 'Playbooks & Cheatsheets',
    Svg: require('@site/static/img/noun-sport-tactics-2383405-066BEB.svg').default,
    description: (
      <>
        <a href="/docs/Playbooks/intro">How-to Playbooks and Cheat Sheets to take away and help you adopt the toolkit</a>
      </>
    ),
  },  
  {
    title: 'Templates & Examples',
    Svg: require('@site/static/img/noun-template-2409443-066BEB.svg').default,
    description: (
      <>
        <a href="/docs/Tools/intro">Industry specific Templates & Examples based on real world scenarios</a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
