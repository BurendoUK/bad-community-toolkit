import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Frameworks & Toolkits',
    link: '/docs/Frameworks%20and%20Toolkits/intro',
    Svg: require('@site/static/img/bad-toolkit.svg').default,
    description: (
        <>Combinations of Frameworks and Toolkits that help organisations solve larger problems</>
    ),
  },
  {
    title: 'Playbooks & Cheatsheets',
    link: '/docs/Playbooks/intro',
    Svg: require('@site/static/img/bad-solutions.svg').default,
    description: (
        <>How-to Playbooks and Cheat Sheets to take away and help you adopt the toolkit</>
    ),
  },  
  {
    title: 'Templates & Examples',
    link: '/docs/Tools/intro',
    Svg: require('@site/static/img/bad-downloads.svg').default,
    description: (
        <>Industry specific Templates & Examples based on real world scenarios</>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={link}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </a>
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
