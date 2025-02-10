import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles["intro-bg"]}></div>
        <div className={styles["intro-content"]}>
          <h2 dangerouslySetInnerHTML={{ __html: siteConfig.tagline }}></h2>
        </div>

        <div className={styles["intro-button"]}>
          <a href="#mainMovie" className="button button--success button--lg">
            소개 영상보기
          </a>
          <a
            href="https://github.com/varsqlinfo/varsql/releases"
            className="button button--info button--lg"
            target="_blank"
          >
            최신버전
          </a>
          <a
            href="/docs/category/설치"
            className="button button--info button--lg"
          >
            설치방법
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Main`}
      description="Description will go into a meta tag in <head />"
    >
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
