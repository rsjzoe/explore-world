import { PropsWithChildren } from "react";
import "./header.css";
import Search from "../icons/search";

export function Header({}: HeaderProps) {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <span>Explore</span>
        </div>
        <nav className="navbar">
          <ul>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>
              <div className="input-search">
                <input type="text" /> <Search color="#fff" width={20} height={20}/>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

type HeaderProps = PropsWithChildren<{}>;
