import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { string } from "prop-types";

const Questions = (props) => {
    const {question,answer}=props;
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem wordBreak={2}>
          <h2 className="text-xl">
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} color="green">
           {answer}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

Questions.propTypes={
    question:string,
    answer:string
}

export default Questions;
