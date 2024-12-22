import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/customer";

const customers = [
  {
    contractNumber: 123456781,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
    test1: "2024-12-15",
    test2: "2024-12-15",
    test3: "2024-12-15",
    test4: "2024-12-15",
    test5: "2024-12-15",
    test6: "2024-12-15",
    test7: "2024-12-15",
    test8: "2024-12-15",
  },
  {
    contractNumber: 2544324232,
    houseAddress:
      "인천 남동구 논고개로 93 111,rrrrrrrr112, 206, 207호 (논현동)",
    tenant: {
      name: "김진철김사자",
      birthday: "901215-2233433",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "정다인",
      birthday: "19780210",
      contact: "010-1122-3344",
    },
    receptionDate: "2024-11-22",
    complaint: "갱신거절",
    terminationNotice: "2024-11-24",
    declarationNoticePublic: "2024-11-27",
    tenantRightsRegist: "2024-11-29",
    tenantRightsDecision: "2024-11- 30",
    specialRemarks: "없음",
    housingHandover: "2024-12-02",
    returnNotice: "2024-12-05",
    insuranceClainTransfer: "2024-12-13",
  },
  {
    contractNumber: 123456783,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123456784,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123456785,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123456786,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123456787,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123456788,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123456789,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123456780,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123451678,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123425678,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123435678,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 123445678,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
  {
    contractNumber: 125345678,
    houseAddress:
      "인천 남동구 논고개로 93asdasdasd 111,112, 206, 207호 (논현동)",
    tenant: {
      name: "김민수",
      birthday: "19901215",
      contact: "010-1234-5678",
    },
    landlord: {
      name: "박상훈",
      birthday: "19830530",
      contact: "010-1234-5672",
    },
    receptionDate: "2024-11-21",
    complaint: "묵시적갱신해지",
    terminationNotice: "2024-11-23",
    declarationNoticePublic: "2024-11-26",
    tenantRightsRegist: "2024-11-28",
    tenantRightsDecision: "2024-11- 29",
    specialRemarks: "없음",
    housingHandover: "2024-12-01",
    returnNotice: "2024-12-04",
    insuranceClainTransfer: "2024-12-15",
  },
];

function App() {
  return (
    <div className="App">
      <div className="table-container">
        {/* 헤더 영역 */}
        {/* 좌측헤더영역 */}
        <div className="th_row">
          <div className="fixed-header type_fix">
            <div
              style={{
                textAlign: "center",
                height: "100%",
                justifyContent: "center",
                flex: 3,
              }}
            >
              <p>계약번호</p>
              <p>지원주택주소</p>
            </div>
            <div style={{ flexDirection: "column", flex: 4 }}>
              <p>입주자 [주민등록번호] [연락처]</p>
              <p>임대인 [주민등록번호] [연락처]</p>
            </div>
          </div>
          {/* 좌측헤더영역 */}
          {/* 우측 헤더영역 */}
          <div className="fixed-header type_move">
            <p>해야할일</p>
            <p>접수날짜</p>
            <p>민원내용</p>
            <p>해지통보</p>
            <p>
              해지통보 <br></br>도달 날짜
            </p>
            <p>
              의사표시 <br></br>공시송달
            </p>
            <p>
              임차권 등기 <br></br>신청
            </p>
            <p>
              임차권 등기 <br></br>결정
            </p>
            <p>특이사항</p>
            <p>주택인도</p>
            <p>반환 최고</p>
            <p>보험청구 이관</p>
            <p>테스트1</p>
            <p>테스트2</p>
            <p>테스트3</p>
            <p>테스트4</p>
            <p>테스트5</p>
          </div>
          {/* 우측 헤더영역 */}
        </div>
        {/* 헤더  영역 */}
        {/* 테이블 바디 */}
        <div className="fixTable-body">
          {/* 좌측 고정 바디 */}
          <div className="tb_row">
            {customers.map((c) => {
              return (
                <Customer
                  key={c.contractNumber} // 고유한 값으로 contractNumber 사용
                  contractNumber={c.contractNumber} // 고객 계약 번호 전달
                  houseAddress={c.houseAddress} // 지원주택 주소
                  tenantName={c.tenant.name} // 입주자 이름 전달
                  tenantBirth={c.tenant.birthday} // 임대인 이름 전달
                  tenantContact={c.tenant.contact} // 임대인 이름 전달
                  landlordName={c.landlord.name} // 임대인 이름 전달
                  landlordBirth={c.landlord.birthday} // 임대인 이름 전달
                  landlordContact={c.landlord.contact} // 임대인 이름 전달
                  receptionDate={c.receptionDate} // 접수 날짜 전달
                  complaint={c.complaint} // 민원 내용 전달
                  terminationNotice={c.terminationNotice} // 해지 통보 전달
                  declarationNoticePublic={c.declarationNoticePublic} // 의사표시 공시송달 날짜 전달
                  tenantRightsRegist={c.tenantRightsRegist} // 임차권 등기 신청 전달
                  tenantRightsDecision={c.tenantRightsDecision} // 임차권 등기 결정 전달
                  specialRemarks={c.specialRemarks} // 특이사항 전달
                  housingHandover={c.housingHandover} // 주택 인도 날짜 전달
                  returnNotice={c.returnNotice} // 반환 최고 전달
                  insuranceClainTransfer={c.insuranceClainTransfer} // 보험청구 이관 날짜 전달
                  test1={c.test1}
                  test2={c.test2}
                  test3={c.test3}
                  test4={c.test4}
                  test5={c.test5}
                  test6={c.test6}
                  test7={c.test7}
                  test8={c.test8}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
