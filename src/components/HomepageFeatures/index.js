import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [

  {
    title: 'Blueprints',
    Svg: require('@site/static/img/bad-solutions.svg').default,
    description: (
      <>
        Combinations of Frameworks and Toolkits that help organisations solve larger problems

      </>
    ),
  },
  {
    title: 'Downloads',
    Svg: require('@site/static/img/bad-downloads.svg').default,
    description: (
      <>
        Cheat Sheets to take away and help you adopt the toolkit
      </>
    ),
  },  
  {
    title: 'Examples',
    Svg: require('@site/static/img/bad-examples.svg').default,
    description: (
      <>
        Industry specific examples based on real world scenarios
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
