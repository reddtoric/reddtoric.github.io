import React from "react";
import Box from "@material-ui/core/Box";
import Layout from "components/Layout";
import ButtonIconGroup from "components/ButtonIconGroup";
import DataSocials from "data/Data-Socials";

// My About me section

export default React.forwardRef((props, ref) => {
  return (
    <Layout title="About me" hideTitle description="" hideDescription ref={ref}>
      <Box component="p">
        Hi! I'm Edward. I graduated from the University of Illinois at Chicago
        with a BS in Computer Science. I am a software developer looking for
        full-time opportunities.
      </Box>

      <Box component="p">
        I am experienced with Microsoft tech. I developed two of my mobile apps
        with .NET; CPR Now built using Xamarin and Disorientis built using
        Unity. Check them out below.
      </Box>

      <Box component="p" mb={5}>
        Personal fact, I love golden retrievers.
      </Box>

      <Box display="flex" justifyContent="center">
        <ButtonIconGroup buttons={DataSocials} />
      </Box>
    </Layout>
  );
});
