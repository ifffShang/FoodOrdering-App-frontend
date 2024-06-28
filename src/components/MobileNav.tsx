import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import {Menu} from "lucide-react";
import {useAuth0} from "@auth0/auth0-react";
import MobileNavLinks from "@/components/MobileNavLinks.tsx";

function CircleUserRound(props: { className: string }) {
    return null;
}

const MobileNav = () =>{
    const {isAuthenticated, loginWithRedirect,user} = useAuth0()
    return(
        <Sheet>
            <SheetTrigger>
                <Menu className="text-pink-500"></Menu>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated?
                        <span className={"flex items-center font-bold gap-2"}>
                        <CircleUserRound className={"text-orange-500"}/>
                            {user?.email}
                        </span> :
                <span>Welcome to UEats.com</span>
                    }
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated? <MobileNavLinks/> :
                        <Button
                            onClick={() => loginWithRedirect()}
                                className="flex-1 font-bold bg-pink-500">Log In</Button>
                    }
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav