import React, { useState, useEffect } from "react";
import Border from "../../atoms/Border";
import Text from "../../atoms/Text/Text";
import Plus from "../../../assets/img/plus.png";
import Minus from "../../../assets/img/minus.png";

import { useTheme } from "../../../request/hooks/Theme";

import { WrapperTitle, WrapperQuest, Quest, Wrapper, Answer } from "./styled";
import ImgWrapper from "../../atoms/ImgWrapper";

const quests = require("../../../request/mock/quests.json");

const Quests = () => {
  const { theme } = useTheme();
  const [visible, setVisible] = useState({
    id: '',
    visibility: false,
  });
  const [ icon, setIcon ] = useState(Plus)

  const renderQuest = quests.map((quest, i) => {
    
    const unvisible = () => {
      setVisible({ ...visible, id: i, visibility: !visible.visibility })
      setIcon(icon == Plus ? Minus : Plus)
    }

    return (
      <React.Fragment key={i}>
        <Quest color={theme.colors.fontColor}>
          {quest.quest}
          <ImgWrapper
            url={i == visible.id ? icon : Plus}
            alt={"iconMinusOrPlus"}
            width={"1rem"}
            height={"30px"}
            float={"right"}
            click={unvisible}
            cursor={'pointer'}
          />
        </Quest>
        <Answer visible={i === visible.id ? visible.visibility : false} color={theme.colors.fontColor}>
          {quest.answer}
        </Answer>
      </React.Fragment>
    );
  });

  return (
    <Wrapper>
      <WrapperTitle>
        <Text color={theme.colors.faqTitle}>FAQ</Text>
        <Border colorBorder={theme.colors.faqBorder} size={"2px"} />
      </WrapperTitle>
      <WrapperQuest>{renderQuest}</WrapperQuest>
    </Wrapper>
  );
};

export default Quests;
