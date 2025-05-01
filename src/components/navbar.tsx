import Link from "next/link";

import { auth } from "@/auth";

async function Navbar() {
  const session = await auth();

  return (
    <nav className="flex items-center justify-between gap-4 px-5 py-2">
      <div>
        <Link href={"/"} className="font-bold">
          AppLogo
        </Link>
      </div>
      {session?.user?.email ? (
        <ul className="flex items-center gap-4 flex-row">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
        </ul>
      ) : (
        <ul className="flex items-center gap-4 flex-row">
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
