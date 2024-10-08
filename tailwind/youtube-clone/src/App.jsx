import { AppBar } from "./components/AppBar";
import { VideoList } from "./components/VideoGrid";
import { YouTubeLeftBar } from "./components/YouTubeLeftBar"; // Import the sidebar component

function App() {
  return (
    <div className="grid grid-cols-12 h-screen">

      <div className="col-span-12">
        <AppBar />
      </div>


      <div className="col-span-2">
        <YouTubeLeftBar />
      </div>

      <div className="col-span-10 p-4">

        <VideoList />
        <VideoList />
        <VideoList />
      </div>
    </div>
  );
}

export default App;
