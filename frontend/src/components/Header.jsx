
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <Navbar fluid rounded>
            <Link to="/">
            <Navbar.Brand href="https://flowbite-react.com">
                    <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="MyLocker Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MyLocker</span>
            </Navbar.Brand>
            </Link>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" rounded/>
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Link to={"/"}>
                        <Dropdown.Item>
                        Dashboard
                        </Dropdown.Item>
                    </Link>
                    <Link to={"/"}>
                        <Dropdown.Item>
                            Setting
                        </Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                    <Link to={"/register"}>
                        <Dropdown.Item>
                            Register
                        </Dropdown.Item>
                    </Link>
                    <Link to={"/login"}>
                        <Dropdown.Item>
                            Sign In
                        </Dropdown.Item>
                    </Link>
                    <Link to={"/"}>
                        <Dropdown.Item>
                            Sign Out
                        </Dropdown.Item>
                    </Link>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link className="text-xl" active>
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link className="text-xl">
                    <Link to="/about">About</Link>
                </Navbar.Link>
                <Navbar.Link className="text-xl">
                    <Link to="/contact">Contact</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
