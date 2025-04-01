import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({ id: "user" }),
    Svg: require("@site/static/img/varsql-user.svg").default,
    description: <>{translate({ id: "user.features.summary" })}</>,
  },
  {
    title: translate({ id: "manager" }),
    Svg: require("@site/static/img/varsql-manage.svg").default,
    description: <>{translate({ id: "manager.features.summary" })}</>,
  },
  {
    title: translate({ id: "administrator" }),
    Svg: require("@site/static/img/varsql-admin.svg").default,
    description: <>{translate({ id: "administrator.features.summary" })}</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
