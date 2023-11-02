import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Wrapper,
  PhoneWrapper,
  TimeWrapper,
  Number,
  Contact,
  Text,
  Social,
} from "./UpperHeader.styled";

export const UpperHeader = () => {
  return (
    <Wrapper>
      <Contact>
        <PhoneWrapper>
          <PhoneAndroidIcon
            sx={[
              {
                fontSize: 20,
                color: "rgb(253, 197, 2)",
                cursor: "pointer",
                transition: 'color 350ms linear'
              },
              { "&:hover": { color: "#fff" } },
            ]}
          />
          <Number href="tel:+1234567890">+1234567890</Number>
        </PhoneWrapper>
        <TimeWrapper>
          <AccessAlarmIcon
            sx={[
              {
                fontSize: 20,
                color: "rgb(253, 197, 2)",
                cursor: "pointer",
                transition: 'color 350ms linear'
              },
              { "&:hover": { color: "#fff" } },
            ]}
          />
          <Text>8:00am - 8:00pm</Text>
        </TimeWrapper>
      </Contact>
      <Social>
        <li>
          <a>
            <InstagramIcon
              sx={[
                {
                  fontSize: 28,
                  color: "#fff",
                  cursor: "pointer",
                  transition: 'color 350ms linear'
                },
                { "&:hover": { color: "rgb(253, 197, 2)" } },
              ]}
            />
          </a>
        </li>
        <li>
          <a>
            <FacebookIcon
              sx={[
                {
                  fontSize: 28,
                  color: "#fff",
                  cursor: "pointer",
                  transition: 'color 350ms linear'
                },
                { "&:hover": { color: "rgb(253, 197, 2)" } },
              ]}
            />
          </a>
        </li>
        <li>
          <a>
            <LinkedInIcon
              sx={[
                {
                  fontSize: 28,
                  color: "#fff",
                  cursor: "pointer",
                  transition: 'color 350ms linear'
                },
                { "&:hover": { color: "rgb(253, 197, 2)" } },
              ]}
            />
          </a>
        </li>
      </Social>
    </Wrapper>
  );
};


