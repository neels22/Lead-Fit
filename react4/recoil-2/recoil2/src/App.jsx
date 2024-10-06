import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { JobsAtom, MsgAtom, networkAtom, NotiAtom, totalNoti } from "./atoms";

function App() {
  return (
    <div>
      <RecoilRoot>
        <NameApp />
      </RecoilRoot>
    </div>
  );
}

function NameApp() {
  const networkCount = useRecoilValue(networkAtom);
  const finalVal = networkCount >= 100 ? "99+" : networkCount;

  const notiCount = useRecoilValue(NotiAtom);
  const jobCount = useRecoilValue(JobsAtom);
  const [msgCount, setMsgCount] = useRecoilState(MsgAtom);
  const totalNotifications = useRecoilValue(totalNoti);

  return (
    <>
      <nav>
        <button>Home</button>
        <button>My Network ({finalVal})</button>
        <button>Messages ({msgCount})</button>
        <button>Jobs ({jobCount})</button>
        <button>Notifications ({notiCount})</button>
        <button onClick={() => setMsgCount(msgCount + 1)}>Me</button>
        <button>Total Notifications ({totalNotifications})</button>
      </nav>

      <ButtonUpdater />
    </>
  );
}

function ButtonUpdater() {
  const setMsgCount = useSetRecoilState(MsgAtom);

  return (
    <div>
      <button onClick={() => setMsgCount((count) => count + 1)}>Update Messages</button>
    </div>
  );
}

export default App;
