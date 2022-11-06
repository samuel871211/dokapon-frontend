// Related third party imports.
import { useEffect } from "react";

// Local application/library specific imports.
import styles from "./Home.module.css";
import useTranslation from "hooks/useTranslation";
import Settings from "./Settings";
import BtnGroup from "./BtnGroup";
import KeyMappingDialog from "./KeyMappingDialog";
import registerWindowResizeEvtHandler from "utils/windowResizeEvtHandler";

// Stateless vars declare.

export default Home;

function Home() {
  const { t } = useTranslation();
  useEffect(registerWindowResizeEvtHandler, []);
  return (
    <div className={styles.container}>
      <div className={styles.view1}>
        <h1 className={styles.title}>{t("ドカポン・ザ・ワールド")}</h1>
        <BtnGroup />
      </div>
      <Settings />
      <KeyMappingDialog />
    </div>
  );
}
