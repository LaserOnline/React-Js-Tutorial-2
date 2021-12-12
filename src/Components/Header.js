
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import 
{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';

export default function Header() 
{

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (   

    <div>

        <Navbar color="light" light expand="md">

            <NavbarBrand href="">ThaiHubMovie</NavbarBrand>
                <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                
                <Nav className="mr-auto" navbar>

              <NavItem>
                <NavLink href="">หนังที่นิยม</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="">ข่าวสาร</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="">หนังมาแรงอาทิตย์นี้</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="">เรื่องใหม่</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="">Facebook</NavLink>
              </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            หมวดหมู่
                        </DropdownToggle>
                        
                    <DropdownMenu right>

                        <DropdownItem>
                            ดราม่า
                        </DropdownItem>

                        <DropdownItem>
                            ต่อสู้
                        </DropdownItem>

                        <DropdownItem>
                            เอาชีวิตรอด
                        </DropdownItem>

                        <DropdownItem>
                            ผจญภัย
                        </DropdownItem>

                        <DropdownItem>
                            อนิเมะ
                        </DropdownItem>

                        <DropdownItem>
                            สารคดี
                        </DropdownItem>

                    <DropdownItem divider />
                        <DropdownItem>
                            Login
                        </DropdownItem>
                    </DropdownMenu>

                    </UncontrolledDropdown>

                </Nav>

            </Collapse>
            
        </Navbar>

    </div>
    )

}