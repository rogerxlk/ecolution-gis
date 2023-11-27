import React, {useState} from "react";
import {FC} from "react";
import {Divider, Flex} from "antd";
import {IconButton} from "./customComponents/IconButton";
import {TargetIcon} from "customComponents/assets/icons/target";
import Ecolution from './customComponents/assets/images/ecolution';


export const CustomNavbar: FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(activeButton === buttonIndex ? null : buttonIndex);
  }

  return (
    <Flex id={'sidebar'} style={{
      position: 'absolute',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 80,
      height: '100vh',
      backgroundColor: 'blueviolet'
    }}>
      <Flex style={{ paddingTop: 20, paddingLeft: 5, paddingRight: 5}}>
        {/*<img src={Ecolution} id={'ecolution'} />*/}
      </Flex>
      <Flex style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 300 }}>
        <div>Hello 2</div>
      </Flex>
      <Flex style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 40, alignContent: 'center', height: 250 }}>
        <Divider />
        <div>Hello 3</div>
      </Flex>
    </Flex>
  )
}
