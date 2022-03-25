import React from "react";
import Border from "../../atoms/Border";
import Text from "../../atoms/Text/Text";

import { useTheme } from '../../../request/hooks/Theme'

import { WrapperTitle, WrapperQuest, Quest, Wrapper, Answer } from "./styled";

const quests = require("../../../request/mock/quests.json");

const Quests = () => {
    const { theme } = useTheme();

  return (
    <Wrapper>
        <WrapperTitle>
            <Text color={theme.colors.titleColor}>FAQ</Text>
            <Border colorBorder={theme.colors.border} size={"2px"} />
        </WrapperTitle>
        <WrapperQuest>
            <Quest>Lorem Ipsum lorem Ips lorem null lorem?</Quest>
            <Answer>Lorem Ipsum lorem Ips lorem null lorem</Answer>
            <Quest>Lorem Ipsum lorem Ips lorem null lorem?</Quest>
            <Answer>Lorem Ipsum lorem Ips lorem null lorem</Answer>
        </WrapperQuest>
    </Wrapper>
  );
};

export default Quests;
