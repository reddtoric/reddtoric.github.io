import React from "react";
import Box from "@material-ui/core/Box";
import Layout from "components/Layout";
import ProjectCard from "components/ProjectCard";
import DataProjects from "data/Data-Projects";

// My Projects section

export default React.forwardRef((props, ref) => {
  return (
    <Layout
      title="Projects"
      hideTitle
      description="And here are cool apps, games, and other things I've built"
      ref={ref}
    >
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {DataProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Box>
    </Layout>
  );
});
