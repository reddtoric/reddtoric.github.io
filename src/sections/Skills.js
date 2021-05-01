import CardContainer from 'components/generics/CardContainer';
import Section from 'components/generics/Section';
import SkillCard from 'components/SkillCard';
import DataSkills from 'data/Data-Skills';
import React from 'react';

// My Skills section

export default React.forwardRef(Skills);

function Skills(props, ref) {
  return (
    <Section heading='Skills' hideHeading description='Here are technologies I like to use' ref={ref}>
      <CardContainer>
        {DataSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </CardContainer>
    </Section>
  );
}
