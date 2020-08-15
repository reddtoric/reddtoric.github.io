import React from "react";
import Box from "@material-ui/core/Box";
import Layout from "components/Layout";
import SkillCard from "components/SkillCard";
import DataSkills from "data/Data-Skills";

export default React.forwardRef((props, ref) => {
  return (
    <Layout
      title="Skills"
      hideTitle
      description="Here are technologies I like to use"
      ref={ref}
    >
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {DataSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </Box>
    </Layout>
  );
});
