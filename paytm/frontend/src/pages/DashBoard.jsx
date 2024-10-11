import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard() {
    return(
        <div>

            <AppBar/>
            <Balance amount={1000}/>

            <Users/>

        </div>
    )
}