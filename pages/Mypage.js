import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Link from 'next/link';
import axios from "axios";
// import Nav from '../src/components/Nav/Nav';
// import Cookies from 'js-cookie'
// import { useRouter } from 'next/router'


let Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
`;

let Profile = styled.div`
  font-size: 3rem;
  margin: 2%;
  border: 1px solid black;
  text-align: center;
  padding: 10%;
`;

let Container = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items : center;
  flex-direction: column;
  width: 30%;
  height: 100%;
  padding :7%;
  margin: 30px;

.cover{
  object-fit: cover;
  width: 80px;
  height: 60px;
}

.form-email{
  padding : 1%
}
.form-inputs {
  /* margin-bottom: 0.5rem; */
  width: 100%;
  margin-bottom : 10;
}  
.form-label {
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  font-size: 1rem;
  font-family: GmarketSansTTFLight;
  font-weight : bold;
  }

.form-input-btn {
  display: flex;
  width: 80px;
  height: 40px;
  justify-content: center;
  /* align-items : center; */
  text-align: center;
  font-size: 1rem;
  padding: 10px 5px;
  font-family: GmarketSansTTFBold;
  background-color: #000035;
  border-radius: 15px;
  border: none;
  color: #ffffff;
  cursor: po0inter;
  margin-bottom : 20px;
  }

  @media (min-width:700px) { 
    margin-bottom: 100px;
  }

`;



// @media (max-width:1280px) { 
//   margin-bottom: 100px;
// }


// `;

const InputBox = styled.input `
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
  border: 1px solid grey;
`

// const LinkDiv = styled(Link)`
//   border: 3px solid red;
// `;

const MyPage = () => {
  const [img, setImg] = useState('');
  const [userInfo, setuser] = useState({});

  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');

  const getMyInfo = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_url}/user?user_id=24`, { withCredentials: true }) //경로 나중에 환경변수로 관리하기 / userid본인에 맞게 수정하기
      .then((res) => {
        if (res.status === 200) {
          let defaultpath = `${process.env.NEXT_PUBLIC_url}/defaultimage.png`; //서버에 uploadedfile, defaultimage있어야함
          setuser(res.data);
          if (res.data.profileimage === null) {
            setImg(defaultpath);
          } else {
            setImg(res.data.profileimage);
          }
        } else {
          alert('잘못된 시도.');
        }
      })
      .catch((err) => {
        alert('예상치 못한 오류가 발생했습니다. \n 잠시 후 다시 시도해주세요.');
      });
  };

  useEffect(() => {
    getMyInfo();
  }, []);

  const handleUsernameInputValue = (key) => (e) => {
    setUsername({ [key]: e.target.value });
    console.log('name수정');
  };
  const handleGenderInputValue = (key) => (e) => {
    setGender({ [key]: e.target.value });
  };
  const handleHeightInputValue = (key) => (e) => {
    setHeight({ [key]: e.target.value });
  };
  const handleWeightInputValue = (key) => (e) => {
    setWeight({ [key]: e.target.value });
  };
  const handleAgeInputValue = (key) => (e) => {
    setAge({ [key]: e.target.value });
  };
  const handleSelectValue = key => e => {
    setImg({ [key]: e.target.value });
    console.log({ [key]: e.target.value })
  };

  const handleModify = async () => {
    console.log('클릭');
    try {
      let req = {
        user_id: 1,
        username: username.username,
        gender: gender.gender,
        height: height.height,
        weigt: weight.weight,
        age: age.age,
      };
      console.log(req);
      await axios.patch(`${process.env.NEXT_PUBLIC_url}/user`, req).then((res) => {
        if (res.status === 200) {
          alert('회원 정보 수정이 완료되었습니다.');
          //window.location.reload();
        }
      });
    } catch (err) {
      console.log(err);
      alert('예상치 못한 에러가 발생했습니다.\n 잠시 후 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Body>
        <Container>
        <Profile>
            <img src={img} class="cover" width="120px"></img>
        </Profile>
        <select name="select" id="seletimage" 
        onChange={handleSelectValue("select")} >
          <option value="default" >기본이미지</option>
          <option value="man" >남성</option>
          <option value="woman" >여성</option>
        </select>
        
          <div className="form-email">
            <label className='form-label'>{userInfo.email} </label>
          </div>
          
          <div className='form-inputs'>
            <label className='form-label'>닉네임 </label>
              <InputBox
                id = "username"
                type="text"
                name = "username"
                autocomplete="off"
                placeholder = "닉네임을 입력하세요"
                defaultValue  ={userInfo.username || ''}
                onChange={handleUsernameInputValue("username")}
              />
              <p></p>
          </div>
          
          <div className='form-inputs'>
            <label className='form-label'>성별 </label>
              <InputBox
                id = "gender"
                type="text"
                name = "gender"
                autocomplete="off"
                placeholder = "성별을 입력하세요"
                defaultValue={userInfo.gender}
                onChange={handleGenderInputValue("gender")}
              />
              <p></p>
          </div>
          <div className='form-inputs'>
            <label className='form-label' >나이 </label>
              <InputBox
                id = "age"
                type="text"
                name = "age"
                autocomplete="off"
                placeholder = "나이를 입력하세요"
                defaultValue={userInfo.age}
                onChange={handleAgeInputValue("age")}
              />
              <p></p>
          </div>  
          <div className='form-inputs'>
            <label className='form-label' >키 </label>
            <InputBox
                id = "height"
                type="text"
                name = "height"
                autocomplete="off"
                placeholder = "키를 입력하세요"
                defaultValue={userInfo.height}
                onChange={handleHeightInputValue("height")}
              />
            <p></p>
          </div>
          
          <div className='form-inputs'>
            <label className='form-label' >몸무게 </label>
            <InputBox
                id = "weight"
                type="text"
                name = "weight"
                autocomplete="off"
                placeholder = "몸무게를 입력하세요"
                defaultValue={userInfo.weigt}
                onChange={handleWeightInputValue("weight")}
              />
            <p></p>
          </div>
          
          <button
            className="form-input-btn"
            type="submit"
            onClick={handleModify}
          >
            저장
          </button>
          {/* <LinkDiv href='/statistics'>
            <div>통계</div>
          </LinkDiv> */}
        </Container>
      </Body>
    </>
  );
};
export default MyPage;
