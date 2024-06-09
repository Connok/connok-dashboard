import Image from "next/image";
import Link from "next/link";
import logo from '../components/img/ConnorLogo.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
    return (
        <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
            <Link href='/'>
                <Image src={ logo } alt="Connok Dashboard" width={40}  />
                
            </Link>
            <div className="flex items-center">
                <ThemeToggler />
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                            <AvatarFallback className="text-black">CM</AvatarFallback> /* Can replace CM with Vriable for users name */
                        </Avatar></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href='/profile'>
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href='/auth'>
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}
 
export default Navbar;