import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import UserPageComponent from "../components/UserPageComponent";
import styles from "../constants/styles";
import UserChoosePlans from "../components/UserChoosePlans";
import UserPlanStatus from "../components/UserPlanStatus";

export default withPageAuthRequired(async function Page() {
  return (
    <main className="flex flex-col min-h-min justify-between bg-transparent pb-10">
      <UserPageComponent/>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <UserChoosePlans />
          <UserPlanStatus />
        </div>
      </div>
    </main>
  );
});
