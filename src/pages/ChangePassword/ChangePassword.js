import React, {useState} from 'react';
import * as style from './styles';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Input from "../../components/Input/input";
import FullButton from "../../components/Button/fullButton";
import {useNavigate} from "react-router";

function ChangePassword() {

    const [pageNum, setPageNum] = useState(1);
    const navigate = useNavigate();

    const HanldlePasswordChange = (e) => {
        const type = e.target.id;
        if( type === "serial" ){
            alert("인증번호를 발급합니다");
            setPageNum(pageNum+1);
        }
        else if(type === "certified") {
            alert("인증되었습니다.");
            setPageNum(pageNum+1);
        }
        else {
            alert("비밀번호 변경이 완료되었습니다.");
            navigate("/");
        }

    }

    return (
        <style.Wrap>
            <Header title={'비밀번호 변경하기'}/>
            {
                pageNum === 1 ?
                <style.Contents>
                    <style.SubTitle>본인 인증 후 새로운 비밀번호로 변경이 가능합니다.</style.SubTitle>
                    <Input title={'이름'}/>
                    <Input title={'전화번호'}/>
                    <Input title={'이메일'}/>
                    <FullButton btnName={'인증번호 발급받기'} onClick={HanldlePasswordChange} id={"serial"}/>
                </style.Contents>
                    : pageNum === 2 ?
                        <style.Contents>
                            <style.SubTitle>본인 인증 후 새로운 비밀번호로 변경이 가능합니다.</style.SubTitle>
                            <Input title={'인증번호 입력'}/>
                            <FullButton btnName={'인증하기'} onClick={HanldlePasswordChange} id={"certified"}/>
                        </style.Contents>
                    :
                        <style.Contents>
                            <style.SubTitle>새로운 비밀번호를 입력하시면 비밀번호가 변경됩니다.</style.SubTitle>
                            <Input title={'새로운 비밀번호 입력'}/>
                            <Input title={'비밀번호 확인'}/>
                            <FullButton btnName={'변경하기'} onClick={HanldlePasswordChange} id={"change"}/>
                        </style.Contents>
            }

            <Footer />
        </style.Wrap>
    );
}

export default ChangePassword;
