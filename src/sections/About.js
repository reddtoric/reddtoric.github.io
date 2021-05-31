import Box from '@material-ui/core/Box';
import { mdiAlphaEBox, mdiGithub, mdiStackOverflow } from '@mdi/js';
import Icon from '@mdi/react';
import InlineLink from 'components/generics/InlineLink';
import Section from 'components/generics/Section';
import DataInterests from 'data/Data-Interests';
import { GlobalStyles } from 'GlobalStyles';
import React from 'react';

// My Skills section

export default React.forwardRef(About);

function About(props, ref) {
  const etsyUrl = 'https://etsy.com/shop/meltandcool';
  const igUrl = 'https://instagram.com/meltandcool';
  const links = [
    {
      name: 'GitHub',
      icon: mdiGithub,
      url: 'https://github.com/reddtoric',
    },
    {
      name: 'Stack Overflow',
      icon: mdiStackOverflow,
      url: 'https://stackoverflow.com/users/6546317/reddtoric',
    },
    {
      name: 'Exercism',
      icon: mdiAlphaEBox,
      url: 'https://exercism.io/profiles/reddtoric',
    },
  ];

  return (
    <Section heading='About me' hideHeading description='' hideDescription ref={ref}>
      <Box component='p'>
        Hi! I&apos;m Edward. I graduated from the University of Illinois at Chicago with a BS in Computer Science. I am a software
        developer/engineer looking for full-time opportunities.
      </Box>
      <Box component='p'>
        Some interests of mine:
        {DataInterests.map((interest, index) => (
          <Box key={index} component='span' display='block' mx={1}>
            <Icon path={interest.icon} size='1em' color={GlobalStyles.primaryColor} /> {interest.name}
          </Box>
        ))}
      </Box>
      <Box component='p'>
        I like to work with Microsoft tech. I developed two mobile apps in C#/.NET; CPR Now built using Xamarin and Disorientis built using
        Unity. Check them out in the project section below.
      </Box>
      <Box component='p'>
        Looking for gift ideas? Check out my 3D printed gifts on <InlineLink href={etsyUrl}>Etsy: Melt and Cool</InlineLink> and{' '}
        <InlineLink href={igUrl}>@MeltAndCool</InlineLink>.
      </Box>
      <Box component='p'>
        {links.map((link, index) => (
          <Box key={index} component='span' display='block' mx={1}>
            <InlineLink href={link.url}>
              <Icon path={link.icon} size='1em' color={GlobalStyles.primaryColor} /> {link.name}
            </InlineLink>
          </Box>
        ))}
      </Box>
    </Section>
  );
}
