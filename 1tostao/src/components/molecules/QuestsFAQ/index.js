import React, { useState } from "react";
import Border from "../../atoms/Border";
import Text from "../../atoms/Text/Text";
import Plus from "../../../assets/icons/plus.png";
import Minus from "../../../assets/icons/minus.png";
import Next from "../../../assets/icons/arrowCircle.png";

import { useTheme } from "../../../request/hooks/Theme";

import {
  WrapperTitle,
  WrapperQuest,
  Quest,
  Wrapper,
  Answer,
  WrapperEnd,
} from "./styled";
import ImgWrapper from "../../atoms/ImgWrapper";

const quests = require("../../../request/mock/quests.json");

const Quests = () => {
  const [limit, setLimit] = useState({
    min: 0,
    max: 4,
    pages: 2,
    actualPage: 1,
  });
  const { theme } = useTheme();
  const [visible, setVisible] = useState({
    id: "",
    visibility: false,
  });
  const [icon, setIcon] = useState(Plus);

  const renderQuest = quests.map((quest, i) => {
    const unvisible = () => {
      setVisible({ ...visible, id: i, visibility: !visible.visibility });
      setIcon(icon == Plus ? Minus : Plus);
    };

    return (
      <React.Fragment key={i}>
        {limit.min <= i && limit.max > i ? (
          <>
            <Quest color={theme.colors.fontColor}>
              {quest.quest}
              <ImgWrapper
                url={i == visible.id ? icon : Plus}
                alt={"iconMinusOrPlus"}
                width={"2rem"}
                height={"30px"}
                float={"right"}
                click={unvisible}
                cursor={"pointer"}
              />
            </Quest>
            <Answer
              visible={i === visible.id ? visible.visibility : false}
              color={theme.colors.fontColor}
            >
              {quest.answer}
            </Answer>
          </>
        ) : null}
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
      {quests.length > 4 ? (<>
        <WrapperEnd>
        <div className="imgNext">
          <ImgWrapper
            url={Next}
            alt={"next/back"}
            width={"50px"}
            height={"50px"}
            imgWidth={"100%"}
            imgHeight={"100%"}
            cursor={"pointer"}
            margin={"15% 0px 0px 0px"}
            float={"left"}
            transform={limit.min === 5 ? "rotate(180deg)" : null}
            click={() =>
              setLimit(
                limit.min === 0
                  ? { ...limit, min: 5, max: 9, actualPage: 2 }
                  : { ...limit, min: 0, max: 4, actualPage: 1 }
              )
            }
          />
        </div>
        <div className="pagination" style={{ color: theme.colors.fontColor }}>
          {limit.actualPage}/{limit.pages}
        </div>
      </WrapperEnd>
      </>) : null}
      
    </Wrapper>
  );
};

export default Quests;
