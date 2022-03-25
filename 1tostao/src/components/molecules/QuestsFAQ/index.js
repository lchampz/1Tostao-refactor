import React from "react";
import Border from "../../atoms/Border";
import Text from "../../atoms/Text/Text";

import { useTheme } from '../../../request/hooks/Theme'

import { WrapperTitle, WrapperQuest, Quest, Wrapper, Answer } from "./styled";

const quests = require("../../../request/mock/quests.json");

const Quests = () => {
  const { theme } = useTheme();

  const renderQuest = quests.map((quest, i) => {

    return(
      <React.Fragment key={i}>
      <Quest color={theme.colors.fontColor}>{quest.quest}</Quest>
      <Answer color={theme.colors.fontColor}>{quest.answer}</Answer>
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
