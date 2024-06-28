import {useAuth0} from "@auth0/auth0-react";
import {DropdownMenu, DropdownMenuTrigger,DropdownMenuItem,DropdownMenuContent} from "../components/ui/dropdown-menu.tsx";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@radix-ui/react-separator";
// import { CircleUserRound } from "lucide-react";

const UsernameMenu = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {user,logout} = useAuth0();
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className={"flex items-center px-3 font-bold hover:text-pink-500 gap-2"}>
                {/*<CircleUserRound className={"text-pink-500"}/>*/}
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/user-profile"
                          className={"font-bold hover:text-pink-500"}>
                    User Profile
                </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button onClick={()=> logout()} className={"flex f;ex-1 font-bold bg-pink-500"}>
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu