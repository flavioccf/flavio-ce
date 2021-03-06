/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebook, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

library.add(fas, faInstagram);

class ComponentsNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToDownload = () => {
    document
      .getElementById("download-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              to="/"
              tag={Link}
              id="navbar-brand"
            >
              <span>• FCE •</span>
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
              Flávio Chão de Estrelas
            </UncontrolledTooltip>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                  • FCE •
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://open.spotify.com/album/3PhnUOSuSKNCFrorxttH31"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <FontAwesomeIcon className="d-lg-none d-xl-none" icon={faSpotify} />
                  <p className="d-lg-none d-xl-none">Spotify</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.youtube.com/watch?v=9wc3CVxaGfQ"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <FontAwesomeIcon className="d-lg-none d-xl-none" icon={faYoutube} />
                  <p className="d-lg-none d-xl-none">YouTube</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/flaviochaodeestrelas"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <FontAwesomeIcon className="d-lg-none d-xl-none" icon={faFacebook} />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/flaviochaodeestrelas"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <FontAwesomeIcon className="d-lg-none d-xl-none" icon={faInstagram} />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Getting started
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/tutorial">
                    <i className="tim-icons icon-paper" />
                    Documentation
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/register-page">
                    <i className="tim-icons icon-bullet-list-67" />
                    Register Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/landing-page">
                    <i className="tim-icons icon-image-02" />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="tim-icons icon-single-02" />
                    Profile Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              <NavItem>
               <Button
                 className="nav-link d-none d-lg-block"
                 color="success"
                 target="_blank"
                 href="https://open.spotify.com/album/3PhnUOSuSKNCFrorxttH31"
               >
                 <FontAwesomeIcon icon={faSpotify} /> Spotify
               </Button>
             </NavItem>
             <NavItem>
               <Button
                 className="nav-link d-none d-lg-block"
                 color="danger"
                 target="_blank"
                 href="https://www.youtube.com/watch?v=9wc3CVxaGfQ"
               >
                 <FontAwesomeIcon icon={faYoutube} /> YouTube
               </Button>
             </NavItem>
             <NavItem>
               <Button
                 className="nav-link d-none d-lg-block"
                 color="info"
                 target="_blank"
                 href="https://www.facebook.com/flaviochaodeestrelas"
               >
                 <FontAwesomeIcon icon={faFacebook} /> Facebook
               </Button>
             </NavItem>
             <NavItem>
               <Button
                 className="nav-link d-none d-lg-block"
                 color="primary"
                 target="_blank"
                 href="https://www.instagram.com/flaviochaodeestrelas"
               >
                 <FontAwesomeIcon icon={faInstagram} /> Instagram
               </Button>
             </NavItem>
             {/* <NavItem>
               <Button
                 className="nav-link d-none d-lg-block"
                 color=""
                 target="_blank"
                 href="https://www.creative-tim.com/product/blk-design-system-pro-react?ref=bdsr-user-archive-index-navbar-upgrade-pro"
               >
                 <FontAwesomeIcon icon={faTwitter} /> Twitter
               </Button>
             </NavItem> */}
              {/* <NavItem>
                <Button
                  className="nav-link d-none d-lg-block"
                  color="default"
                  onClick={this.scrollToDownload}
                >
                  <i className="tim-icons icon-cloud-download-93" /> Download
                </Button>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
