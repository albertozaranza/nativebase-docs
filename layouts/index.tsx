import Head from "next/head";
import React, { useEffect, useContext } from "react";
import {
  Box,
  HStack,
  Link,
  Pressable,
  ScrollView,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToken,
} from "native-base";
import path from "path";
import Sidebar from "../src/new-components/Sidebar";
import Navbar from "../src/new-components/Navbar";
import MobileNavbar from "../src/new-components/MobileNavbar";

import { AppContext } from "../src/AppContext";
import MainContent from "../src/new-components/MainContent";

import { MobileSidebarVersionDropdown } from "../src/new-components/MobileSidebarVersionDropdown";
import { SocialMediaStagger } from "../src/new-components/SocialMediaStagger";
import NativebaseIconLogo from "../src/new-components/NativebaseIconLogo";
import Script from "next/script";
import { isLatestVersionSlug } from "../src/utils";

function Layout({
  children: content,
  version: currentVersion,
  tocArray,
  sidebar,
  versionList,
  frontMatter,
  pages,
  showToc,
  youtubeEmbedd,
}: any) {
  // console.log("Sidebar", sidebar);
  const {
    isNavbarOpen,
    activeSidebarItem,
    setActiveVersion,
    setActiveSidebarItem,
    activeVersion,
  } = useContext(AppContext);

  const bgColor = useColorModeValue(
    useToken("colors", "backgroundLight"),
    useToken("colors", "backgroundDark")
  );
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);
  useEffect(() => {
    const currentPathArray = window?.location.href.split("/");

    let pathArray: string[] = [];
    currentPathArray.map((val, ind) => {
      ind < 3 ? null : pathArray.push(val);
    });

    let actVersion = currentVersion;
    if ([...versionList, "next"].includes(pathArray[0])) {
      actVersion = pathArray[0];
    } else {
      actVersion = "";
    }
    setActiveVersion(actVersion);

    if (pathArray[0] === actVersion) {
      pathArray.splice(0, 1);
      setActiveSidebarItem(path.join(...pathArray).split("#")[0]);
    } else {
      setActiveSidebarItem(path.join(...pathArray).split("#")[0]);
    }
    // @ts-ignore
    document.getElementById("scrollview-id").scrollTop = 0;
  }, [content]);

  useEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor = bgColor;
  }, [bgColor]);

  const isLargeScreen = useBreakpointValue({
    base: false,
    lg: true,
  });
  useEffect(() => {
    if (isLargeScreen) {
      setIsOpenSidebar(false);
    }
  }, [isLargeScreen]);
  const title = `${
    frontMatter && frontMatter.title
      ? frontMatter.title +
        (!isLatestVersionSlug(activeVersion) ? ` | ${activeVersion}` : "") +
        " | NativeBase | Universal Components for React and React Native"
      : pages?.currentPage?.title +
        (!isLatestVersionSlug(activeVersion) ? ` | ${activeVersion}` : "") +
        " | NativeBase | Universal Components for React and React Native"
  }`;

  const pageTitle = `${
    frontMatter && frontMatter.title
      ? frontMatter.title + " | NativeBase "
      : pages?.currentPage?.title + " | NativeBase "
  }`;

  let href = "https://docs.nativebase.io/" + pages.currentPage.id;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="keywords"
          content="Universal Components for React and React Native"
        />
        {/* og meta links */}
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="NativeBase 3.0 lets you build consistently across android, iOS & web. It is inspired by the Styled System and is accessible, highly themeable, and responsive."
        />
        <meta property="og:url" content="https://docs.nativebase.io" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="NativeBase" />
        <meta
          name="twitter:image:alt"
          content="NativeBase 3.0 lets you build consistently across android, iOS & web. It is inspired by the Styled System and is accessible, highly themeable, and responsive."
        />
        <meta property="og:image" content="/img/nativebase-og.png" />
        <meta
          name="twitter:image"
          content="https://docs.nativebase.io/img/nativebase-og.png"
        ></meta>
        <meta name="twitter:site" content="@nativebase" />

        <meta
          name="description"
          content="NativeBase 3.0 lets you build consistently across android, iOS & web. It is inspired by the Styled System and is accessible, highly themeable, and responsive."
        />
        <link rel="icon" href="/img/nativebaselogo.svg" />
        <link
          rel="canonical"
          href={"https://docs.nativebase.io/" + pages.currentPage.id}
        />
      </Head>
      <Script async src="https://snack.expo.dev/embed.js"></Script>
      <Script src="/js/gtag.js"></Script>
      {/* <Script src="/js/switchTheme.js"></Script> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DBP9QMTGR1"
      ></Script>
      <Script id="gTagScript">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DBP9QMTGR1');
        `}
      </Script>
      {/* will replace it when nativebase has semantic tagging */}
      <h1 style={{ display: "none" }}>{title}</h1>
      <Box
        w="100%"
        h={{ base: "100%", md: "100vh" }}
        _light={{ bg: "backgroundLight" }}
        _dark={{ bg: "backgroundDark" }}
        alignItems="center"
        nativeID={useColorModeValue(
          "nativebase-body-light",
          "nativebase-body-dark"
        )}
      >
        <ScrollView w="100%" nativeID="scrollview-id">
          <Box h="100%" w="100%">
            <Box
              display={{ base: "none", lg: "flex" }}
              w="100%"
              position="sticky"
              top="0"
              zIndex={99}
              _light={{ bg: "backgroundLight" }}
              _dark={{ bg: "backgroundDark:alpha.50" }}
              // @ts-ignore
              style={{ backdropFilter: "blur(10px)" }}
            >
              <Navbar />
            </Box>
            <Box
              display={{ base: "flex", lg: "none" }}
              position="sticky"
              top="0"
              zIndex={99}
              _light={{ bg: "backgroundLight" }}
              _dark={{ bg: "backgroundDark" }}
              w="100%"
            >
              <MobileNavbar
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
              />
            </Box>
            {!isOpenSidebar ? (
              <HStack>
                <Box
                  position="sticky"
                  top="16"
                  h="calc(100vh - 64px)"
                  display={{ base: "none", lg: "flex" }}
                >
                  <Sidebar sidebar={sidebar} />
                </Box>
                <Box flex={1}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://ui.gluestack.io//?utm_source=nativebase-docs&utm_medium=banner+&utm_campaign=nativebase-banner-cta&utm_id=nativebase-campaign-banner`}
                  >
                    <Stack
                      alignItems={{ md: "center" }}
                      justifyContent={{ md: "center" }}
                      overflow="hidden"
                      px="4"
                      py="5"
                      fontSize="sm"
                      fontWeight="medium"
                      borderWidth={1}
                      _light={{
                        bg: "#F1F1F1",
                        color: "muted.700",
                        borderColor: "muted.100",
                      }}
                      _dark={{
                        color: "muted.200",
                        bg: "#171E2E",
                        borderColor: "muted.800",
                      }}
                      width="100%"
                      direction={{ md: "row" }}
                    >
                      <Text>
                        The alpha version of gluestack-ui is now available!
                        Start building today!
                      </Text>
                      <HStack
                        alignItems="center"
                        mt={{ base: "4", md: 0 }}
                        ml={{ md: "4" }}
                      >
                        <Pressable
                          borderWidth={1}
                          rounded="sm"
                          px="3"
                          py="2"
                          mr="4"
                          _light={{
                            borderColor: "muted.900",
                          }}
                          _dark={{
                            borderColor: "muted.50",
                          }}
                          _hover={{
                            bg: "primary.200",
                            borderColor: "primary.200",

                            _dark: {
                              bg: "primary.700",
                              borderColor: "primary.700",
                            },
                          }}
                          _focus={{
                            bg: "primary.300",
                            borderColor: "primary.300",

                            _dark: {
                              bg: "primary.800",
                              borderColor: "primary.800",
                            },
                          }}
                        >
                          <Text
                            fontSize="sm"
                            fontWeight="medium"
                            _light={{
                              color: "muted.900",
                            }}
                            _dark={{
                              color: "muted.50",
                            }}
                          >
                            Explore gluestack-ui
                          </Text>
                        </Pressable>
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          _light={{
                            color: "muted.900",
                          }}
                          _dark={{
                            color: "muted.50",
                          }}
                          underline
                        >
                          <a href="https://nativebase.io/blogs/the-future-of-nativebase">
                            Read more
                          </a>
                        </Text>
                      </HStack>
                    </Stack>
                  </a>
                  <Box flexDirection="row" flex={1}>
                    <MainContent
                      pages={pages}
                      frontMatter={frontMatter}
                      content={content}
                      tocArray={tocArray}
                      showToc={showToc}
                    />
                  </Box>
                </Box>
              </HStack>
            ) : (
              <>
                <Box h="100%" w="100%" display={{ base: "flex", lg: "none" }}>
                  <MobileSidebarVersionDropdown
                    setIsOpenSidebar={setIsOpenSidebar}
                  />
                  <Sidebar
                    sidebar={sidebar}
                    isMobile
                    setIsOpenSidebar={setIsOpenSidebar}
                  />
                </Box>
              </>
            )}
          </Box>
          <SocialMediaStagger />
        </ScrollView>
        <Link
          href="https://madewithnativebase.com/"
          isExternal
          position="fixed"
          bottom="8"
          right={{ base: "auto", lg: "30px" }}
          left={{ base: "30px", lg: "auto" }}
          mr="auto"
          _light={{ bg: "coolGray.50" }}
          _dark={{ bg: "coolGray.800" }}
          h="36px"
          w="185"
          rounded="4"
          overflow="hidden"
        >
          <Box position="absolute" left="-90px" top="-85px">
            <NativebaseIconLogo width="125" height="130" />
          </Box>

          <Text
            pl="6"
            _light={{ color: "black" }}
            _dark={{ color: "coolGray.50" }}
            m="auto"
            fontSize="sm"
          >
            MadeWithNativeBase
          </Text>
        </Link>
      </Box>
    </>
  );
}

export default Layout;
