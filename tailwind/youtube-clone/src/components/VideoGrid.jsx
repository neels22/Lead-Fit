
import { VideoCard } from "./VideoCard"
export function VideoList() {
    // Create an array of 4 items and map over it to render 4 VideoCard components
    const videoCards = Array(4).fill(null);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {videoCards.map((_, index) => (
          <VideoCard key={index} />
        ))}
      </div>
    );
  }
  