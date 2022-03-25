import React, { useState } from "react";
import Border from "../../atoms/Border";
import Text from "../../atoms/Text/Text";
import Plus from '../../../assets/img/plus.png'

import { useTheme } from '../../../request/hooks/Theme'

import { WrapperTitle, WrapperQuest, Quest, Wrapper, Answer } from "./styled";
import ImgWrapper from "../../atoms/ImgWrapper";

const quests = require("../../../request/mock/quests.json");

const Quests = () => {
  const { theme } = useTheme();
  const [ visible, setVisible ] = useState(false)

  

  const renderQuest = quests.map((quest, i) => {
    return(
      <React.Fragment key={i}>
      <Quest color={theme.colors.fontColor}>
        {quest.quest}
        <ImgWrapper url={Plus} alt={'plus'} width={'1rem'} height={'30px'} float={'right'} 
          click={() => setVisible(!visible)}
        />
      </Quest>
      <Answer visible={visible} color={theme.colors.fontColor}>{quest.answer}</Answer>
      </React.Fragment>
    )
  })

  return (
    <Wrapper>
        <WrapperTitle>
            <Text color={theme.colors.faqTitle}>FAQ</Text>
            <Border colorBorder={theme.colors.faqBorder} size={"2px"} />
        </WrapperTitle>
        <WrapperQuest>
            {renderQuest}
        </WrapperQuest>
    </Wrapper>
  );
};

export default Quests;
