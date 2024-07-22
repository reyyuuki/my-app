"use client";

import React, { useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FetchByData } from "./hooks/UseApiFetch";
import Toggle from "./toggle";
import { Input } from "@/components/ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  useEffect(() => {
    const fetching = async () => {
      const data = await FetchByData(21);
      if (data) {
        console.log(data);
      }
    };
    fetching();
  }, []);
  return (
    <div className="flex w-full h-[65px] bg-zinc-800/30">
      <div className="w-[18%] text-center bg-red-500">
        <p className="text-[25px] ">
          <span className="text-[45px] font-bold">A</span>nifusion
        </p>
      </div>
      <div className=" flex w-[250px]  justify-center align-middle">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="flex w-[500px] h-[300px] p-[10px] bg-zinc-800/30">
                    <img
                      src=""
                      alt="Name"
                      className=" w-[200px] h-[100%] rounded-xl bg-blue-500"
                    />
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <div className="flex w-[500px] h-[300px] p-[10px] bg-zinc-800/30">
                    <img
                      src=""
                      alt="Name"
                      className=" w-[200px] h-[100%] rounded-xl bg-blue-500"
                    />
                  </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex justify-center items-center w-[600px] bg-black">
        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="" />
          <Input placeholder="Search Anime" className="w-[400px] px-[40px]" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Toggle />
      </div>
    </div>
  );
};
export default Header;
