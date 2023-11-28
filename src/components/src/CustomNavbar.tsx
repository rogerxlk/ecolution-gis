import React, {useState} from "react";
import {FC} from "react";
import {Flex} from "antd";
import {IconButton} from "./customComponents/IconButton";
import Ecolution from './customComponents/assets/images/ecolution.png';
import {TargetIcon} from "./customComponents/assets/icons/TargetIcon";
import {MapIcon} from "./customComponents/assets/icons/MapIcon";
import {theme} from "@kepler.gl/styles";
import {EditorIcon} from "./customComponents/assets/icons/EditorIcon";
import {ProfileIcon} from "./customComponents/assets/icons/ProfileIcon";
import {SettingsIcon} from "./customComponents/assets/icons/SettingsIcon";

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
      backgroundColor: theme.tooltipBg,
    }}>
      <Flex style={{ paddingTop: 20, paddingLeft: 5, paddingRight: 5}}>
        <div style={{height: '30px', marginBottom: '20px'}}></div>
        {/*<img src={Ecolution} id={'ecolution'}  alt={'Ecolution'}/>*/}
      </Flex>
      <Flex style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 300 }}>
        <IconButton icon={<TargetIcon />} onClick={() => handleButtonClick(0)} isActive={activeButton === 0} />
        <IconButton icon={<MapIcon />} onClick={() => handleButtonClick(1)} isActive={activeButton === 1} />
        <IconButton icon={<EditorIcon />} onClick={() => handleButtonClick(2)} isActive={activeButton === 2} />
      </Flex>
      <Flex style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: 40, alignContent: 'center', height: 200 }}>
        <IconButton icon={<ProfileIcon />} onClick={() => handleButtonClick(3)} isActive={activeButton === 3} />
        <IconButton icon={<SettingsIcon />} onClick={() => handleButtonClick(4)} isActive={activeButton === 4} />
      </Flex>
    </Flex>
  )
}
