import { UserButton } from "@clerk/nextjs";
import MainNav from "./MainNav";

const Navbar = () => {
  return (
    <div className=" border-b">
      <div className=" flex h-16 items-center px-4">
        <p>This is store switcher</p>

        {/* routes */}
        <MainNav />

        {/* userprofile */}

        <div className=" ml-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
