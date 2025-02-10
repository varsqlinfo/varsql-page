import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "사용자 기능",
    Svg: require("@site/static/img/varsql-user.svg").default,
    description: (
      <>
        DB CLIENT 설치없이 쉽게 DB에 SQL 을 실행 할 수 있음. 테이블 데이터(CSV,
        XML, JSON, INSERT SQL) 내보내기 가능. 테이블 정의서 내보내기 기능
      </>
    ),
  },
  {
    title: "매니저 기능",
    Svg: require("@site/static/img/varsql-manage.svg").default,
    description: (
      <>
        쉽게 사용자에게 권한을 부여할 수 있음. 사용자 사용 로그 확인 가능.
        용어집 관리
      </>
    ),
  },
  {
    title: "관리자 기능",
    Svg: require("@site/static/img/varsql-admin.svg").default,
    description: <>DB 커넥션 정보와 커넥션 풀을 관리 할 수 있음.</>,
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
