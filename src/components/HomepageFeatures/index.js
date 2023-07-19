import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Safety',
    Svg: require('@site/static/img/safety.svg').default,
    description: (
      <>
        Safety is considering all intersections individuals are a part of and recognizing the dynamics between groups, emphasizing the most vulnerable voices. In a case-by-case scenario, we evaluate what occurred with whom, and take into consideration race as that is important.
      </>
    ),
  },
  {
    title: 'Privacy',
    Svg: require('@site/static/img/privacy.svg').default,
    description: (
      <>
        Moderation decisions are private by default, because Privacy > Transparency. Moderation decisions are between the moderation team & the individual user; exposing their details may turn them into a target for harassment. However, if a moderation decision would affect another’s safety, we will take steps to inform those affected because Safety > Privacy.

        For example, if a user reports another individual’s post for harmful content. The person being reported will not know who reported them, the only notification the person being reported will have is if action is taken against them for violating community guidelines.
      </>
    ),
  },
  {
    title: 'Transparency',
    Svg: require('@site/static/img/transparency.svg').default,
    description: (
      <>
        Our finances are done in the open which we wish to do through Open Collective to provide Transparency in how we operate (Currently our Open Collective application is under review. Should we be accepted, we will update accordingly with more detail). We specifically picked OC because of their incognito feature, which affords Safety and Privacy to those supporting our mission. We know that in order to manage and upkeep servers/development—It will have a price on it. We aim to be transparent especially to users who want to help see Wibblur grow.
      </>
    ),
  },
  {
    title: 'Discovery',
    Svg: require('@site/static/img/discovery.svg').default,
    description: (
      <>
        Discovery done well means being able to find your niche among others sharing digital space with you. It also means finding out new things that you never considered to end up playing a significant role in your user experience! Discovery should be engaging, enticing, and fun while also ensuring one doesn’t have to worry about toxicity seeping through.
      </>
    ),
  },
  {

    title: 'Growth',
    Svg: require('@site/static/img/growth.svg').default,
    description: (
      <>
        The best communities are those when everyone on board with our mission is a part of it. It takes a village in order to get somewhere.
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

