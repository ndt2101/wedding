import { styled } from "@stitches/react";
import { Divider, Flex } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
  paddingBottom: 42,
  textAlign: "center",
});

const Title = styled("p", {
  fontSize: "2.5vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 10,
});

const LocationMap = styled("div", {
  display: "inline-block",
  textAlign: "center",
  marginLeft: 24,
  marginRight: 24,
  marginBottom: 24,
});

const Image = styled("img", {
  width: "75%",
  maxWidth: 1024,
});

export default function Location() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>Chỉ đường</Title>
      </Divider>
      <LocationMap>
        <div>
          <Title>Cô dâu</Title>
          <div style={{ borderRadius: "30px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4660.158052490979!2d106.35605607525646!3d21.02279998062504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAxJzIyLjEiTiAxMDbCsDIxJzMxLjEiRQ!5e1!3m2!1svi!2s!4v1746636749759!5m2!1svi!2s"
              style={{ border: "0", borderRadius: "20px" }}
              height="300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.6312110452416!2d105.73697937419799!3d20.969466812189758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452ffa3802155%3A0x9319cf85bcd88ebc!2zxJDDtG5nIExhLCBIb8OgaSDEkOG7qWMsIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1728962544590!5m2!1svi!2s"
                            style={{ border: '0', borderRadius: '20px' }}
                            height="300"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe> */}
          </div>
        </div>
      </LocationMap>

      {/* <Image src="./assets/LocationMap.png" /> */}
    </Wrapper>
  );
}