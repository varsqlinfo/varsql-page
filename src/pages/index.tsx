import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles["intro-bg"]}></div>
        <div className={styles["intro-content"]}>
          <h2
            dangerouslySetInnerHTML={{
              __html: translate({ id: "main.page.varsql.descriptions" }),
            }}
          ></h2>
        </div>

        <div className={styles["intro-button"]}>
          <a href="#mainMovie" className="button button--success button--lg">
            <Translate id="main.page.introduction"></Translate>
          </a>
          <a
            href="https://github.com/varsqlinfo/varsql/releases"
            className="button button--info button--lg"
            target="_blank"
          >
            <Translate id="main.page.latestVersion"></Translate>
          </a>
          <a
            href="/docs/category/installation"
            className="button button--info button--lg"
          >
            <Translate id="main.page.installation"></Translate>
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Main`} description="varsql db web tool">
      <HomepageHeader />
      <div className="container">
        <div className="row">
          <div
            id="mainMovie"
            className={clsx("movie-content", styles.movieContent)}
          >
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/PxbI65AQ6dU"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
