import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  MailOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./index.scss";

const Navbar = () => {
  const { Title } = Typography;

  const { isLoggedIn } = useSelector((state) => state.auth);
  const [profileOptions, setProfileOptions] = useState([]);
  const [current, setCurrent] = useState("home");

  useEffect(() => {
    if (isLoggedIn) {
      setProfileOptions(user);
    } else {
      setProfileOptions(guest);
    }
  }, [isLoggedIn]);

  const guest = [
    {
      label: "Sign In",
      key: "signIn",
      icon: <LoginOutlined />,
    },
  ];

  const user = [
    {
      label: "Settings",
      key: "settings",
      icon: <SettingOutlined />,
    },
    {
      label: "Sign Out",
      key: "signOut",
      icon: <LogoutOutlined />,
    },
  ];

  const items = [
    {
      label: "Home",
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: "Products",
      key: "products",
      icon: <AppstoreOutlined />,
      children: [
        {
          type: "group",
          label: "Gadgets",
          children: [
            {
              label: "Telephone",
              key: "telephone",
            },
            {
              label: "Radio",
              key: "radio",
            },
            {
              label: "Typewriter",
              key: "typewriter",
            },
            {
              label: "Boombox",
              key: "boombox",
            },
          ],
        },
        {
          type: "group",
          label: "Fashion",
          children: [
            {
              label: "Clothings",
              key: "clothings",
            },
            {
              label: "Footware",
              key: "footware",
            },
            {
              label: "Accessories",
              key: "accessories",
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      key: "contact",
      icon: <MailOutlined />,
    },
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      className: "profile",
      children: [...profileOptions],
    },
  ];

  const handleClick = (event) => {
    setCurrent(event.key);
    console.log("click ", event);
  };

  return (
    <Row>
      <Col span={6}>
        <Title >Retro Mart</Title>
      </Col>
      <Col span={18}>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Col>
    </Row>
  );
};

export default Navbar;
