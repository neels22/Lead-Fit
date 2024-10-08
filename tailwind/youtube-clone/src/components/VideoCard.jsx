export function VideoCard() {
    return (
      <div className="max-w-sm cursor-pointer">
        <img className="w-full h-auto rounded-xl" src="/yt.jpg" alt="YouTube thumbnail" />
  
        <div className="grid grid-cols-12 pt-2">
          <div className="col-span-1">
            <img className="rounded-full w-10 h-10" src="/yt.jpg" alt="profile" />
          </div>
  
          <div className="col-span-11">
            <div className="font-bold">This is Mark Zuckerberg</div>
            <div className="text-gray-600">Neelay</div>
            <div className="text-gray-600">465m | 13 days ago</div>
          </div>
        </div>
      </div>
    );
  } 
  