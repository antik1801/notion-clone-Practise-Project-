"use client";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";
// inside next every component is by default a server component

import React from "react";

const Header = () => {
  const { user } = useUser();
  return <div>
    {user &&
     <div>
        {user?.firstName + `{'s}`} Space 
     </div>
     }

     {/* Breadcrumbs */}

     <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>

        </SignedIn>
     </div>
     

     </div>
};

export default Header;
