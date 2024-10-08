import { SearchBar } from "./SearchBar";




export function AppBar() {
    

    return (
        <div className="flex justify-between pt-1 pl-2 pr-2">

            <div>
                Youtube
            </div>

            <div>
                <SearchBar/> 
            </div>

            <div>
                signin
            </div>

        </div>
    )
}