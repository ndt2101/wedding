import { styled } from "@stitches/react";
import { Divider } from "antd";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2.5vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const Content = styled("div", {
  fontSize: "2.5vh",
  lineHeight: 1.75,
  opacity: 0.75,
  width: "100%",
  textAlign: "center",
});

type GrettingProps = {
  data?: Data;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Divider style={{ marginTop: 0, marginBottom: 32 }} plain>
        <Title>𝐇𝐀𝐏𝐏𝐘 𝐖𝐄𝐃𝐃𝐈𝐍𝐆 💍</Title>
      </Divider>
      <Content>
        {data?.gretting?.split("\n")?.map((value, index) => {
          return (
            <div key={index}>
              {value}
              <br />
            </div>
          );
        })}
      </Content>
      <Content>
        Trân trọng kính mời: Anh, Chị, Em, Bạn bè, Cô, Dì, Chú, Bác gần xa Tới
        dự lễ thành hôn của vợ chồng chúng em:
      </Content>
      <Content>👰‍♀️ Hải Yến ❤️🤵‍♂️ Anh Pháp</Content>
      <Content>
        {" "}
        ❤️ Chúng em vô cùng hạnh phúc khi được báo tin vui đến mọi người!{" "}
      </Content>
      <Content>🎉 Bữa cơm thân mật: ⏰ 09h00 sáng, ngày 18/05/2025</Content>
      <Content>🎉 Lễ thành hôn: ⏰ 10h00 sáng cùng ngày </Content>
      <Content>🏡 Địa điểm: Tại tư gia nhà gái – cô dâu Hải Yến </Content>
      <Content>
        Địa chỉ: Đội 6, Thôn An Đoài, xã An Bình, huyện Nam Sách, tỉnh Hải Dương
      </Content>
      <Content>
        Vì lý do công việc và chuẩn bị bận rộn, vợ chồng em xin được gửi lời mời
        qua tin nhắn, rất mong nhận được sự thông cảm và chúc phúc từ mọi người!
      </Content>
      <Content>
        “Sự hiện diện của mọi người là niềm hạnh phúc lớn nhất của chúng em
        trong ngày trọng đại này!”
      </Content>
    </Wrapper>
  );
}
