import React from 'react'
import { GoMarkGithub } from "react-icons/go";
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.element";

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>Contact Me</FooterSubHeading>
          <FooterSubText>
            感謝您抽空閱讀我的履歷，歡迎使用下方資訊與我聯繫
          </FooterSubText>
          {/* <Form>
            <FormInput name="email" type="email" placeholder="Your Email" />
            <Button fontBig>Subscribe</Button>
          </Form> */}
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItem>
              <FooterLinkTitle>
                <AiFillMail />
              </FooterLinkTitle>
              <FooterLink>dylan8012@gmail.com</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinkTitle>
                <AiFillPhone />
              </FooterLinkTitle>
              <FooterLink>0928-823-506</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem>
              <FooterLinkTitle>
                <GoMarkGithub />
              </FooterLinkTitle>
              <FooterLink>
                https://github.com/impala8012
              </FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon />
              履歷表
            </SocialLogo>
            <WebsiteRights>© Copyright 2021, Dylan.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                aria-label="Youtube"
                rel="nopener noreferer"
              >
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </div>
  );
}

export default Footer
