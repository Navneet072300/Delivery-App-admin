import { UserButton } from "@clerk/nextjs";
import MainNav from "./MainNav";
import StoreSwitcher from "./StoreSwitcher";

const Navbar = () => {
  return (
    <div className=" border-b">
      <div className=" flex h-16 items-center px-4">
        <StoreSwitcher items={[]} />

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
