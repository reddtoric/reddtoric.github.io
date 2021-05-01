import axios from 'axios';
import CardContainer from 'components/generics/CardContainer';
import Section from 'components/generics/Section';
import ProjectCard from 'components/ProjectCard';
import DataAdditionalProjects from 'data/Data-Projects';
import React, { useEffect, useState } from 'react';

// My Projects section

export default React.forwardRef(Projects);

function Projects(props, ref) {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    // Fetch git projects with git api
    const reposResponse = await axios.get(`https://api.github.com/users/reddtoric/repos`);

    const tmpRepos = [...reposResponse.data];

    // Get meta.json data from within respective repo (if any)
    // using info from the fetched git projects
    for (const [index, repo] of tmpRepos.entries()) {
      const url = `https://raw.githubusercontent.com/${repo.full_name}/${repo.default_branch}/meta.json`;
      await axios
        .head(url)
        .then(async () => {
          await axios
            .get(url)
            .then((response) => {
              const match = tmpRepos[index];

              const adjustedEntry = {
                ...match,
                ...response.data,
              };

              tmpRepos[index] = adjustedEntry;

              // console.log(tmpRepos[index]);
            })
            .catch((error) => {
              // Intentionally empty
            });
        })
        .catch((error) => {
          // Intentionally empty
        });
    }

    const x = [...tmpRepos, ...DataAdditionalProjects].sort((repoA, repoB) => {
      const A = repoA.order ? repoA.order : 0;
      const B = repoB.order ? repoB.order : 0;
      return A > B ? -1 : 1;
    });

    setRepos(x);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <Section heading='Projects' hideHeading description="And here are cool apps, games, and other things I've built" ref={ref}>
      <CardContainer>
        {repos.map((repo, index) => {
          if (!repo.hide) {
            return <ProjectCard key={index} project={repo} />;
          }
        })}
      </CardContainer>
    </Section>
  );
}
