import { Button } from "./Button"



export function Users() {

    function onChange() {
        console.log("hi there")
    }

    return(
        <div className="">

                <div className=" m-2">
                    <input onChange={onChange} type="text" placeholder="search" className="border border-gray-400 border-b-2 w-2/4 rounded-xl h-8 p-2 items-center" />
                </div>

                <div>
                        <User/>
                        <User/>
                        <User/>
                        <User/>
                </div>
        </div>
    )
}


function User() {
    return (
      <div className="flex justify-between m-2 border border-gray-100 items-center">
        <div className="flex items-center gap-3 m-2">
          <div className="rounded-full border border-gray-100 w-12 h-12 flex items-center justify-center bg-gray-200">
            I
          </div>
          <div className="flex items-center">
            <span className="whitespace-nowrap">Indraneel sarode</span>
          </div>
        </div>
  
        <Button label={"Send Money"} />
      </div>
    );
  }
  