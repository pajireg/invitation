import BodyLayout from "./ui/body-layout";

export default function ThanksMessage() {
  return (
    <BodyLayout>
      <h2 className="text-xl text-center mt-2">INVITATION</h2>
        <div className="text-center text-sm lg:text-lg text-gray-600">
          <br />
          <br />
          <p> 차가운 겨울, 저희 두 사람은 서로의 온기가 되어</p>
          <p>하얀 세상 속에서 변치 않을 사랑을 맹세합니다.</p>
          <br />
          <p>눈부시게 찬란한 날, 두 마음이 하나 되어</p>
          <p>함께 걸음을 시작하고자 합니다.</p>
          <br />
          <p>&apos;우리&apos;라는 이름의 첫 시작,</p>
          <p>그 아름다운 순간에 소중한 분들을 초대합니다.</p>
          <br />
          <br />

          <div className="px-10">
            <hr />
          </div>

          <br />
          <br />
          <p><span className="text-lg">최행찬</span> · <span className="text-lg">김복숙</span> 의 장남 <span className="text-lg">수민</span></p>
          <p><span className="text-lg">이진우</span> · <span className="text-lg">권용선</span> 의 장녀 <span className="text-lg">현희</span></p>
          <br />
        </div>
    </BodyLayout>
  );
}