import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addVocaFB } from "./redux/modules/voca";

const Form = (props) => {
  const dispatch = useDispatch();
  const title = React.useRef(null);
  const desc = React.useRef(null);
  const exam = React.useRef(null);

  const addVoca = () => {
    // 스프레드 문법! 기억하고 계신가요? :)
    // 원본 배열 list에 새로운 요소를 추가해주었습니다.
    // setList([...list, text.current.value]);

    // dispatch(
    //   createVoca({
    //     title: title.current.value,
    //     desc: desc.current.value,
    //     exam: exam.current.value,
    //   })
    // );

    dispatch(
      addVocaFB({
        title: title.current.value,
        desc: desc.current.value,
        exam: exam.current.value,
      })
    );
  };
  return (
    <div>
      <Title>단어 추가하기</Title>
      <div className="addForm">
        <div>
          <label>단어</label>
          <input type="text" ref={title} />
        </div>
        <div>
          <label>설명</label>
          <input type="text" ref={desc} />
        </div>
        <div>
          <label>예시</label>
          <input type="text" ref={exam} />
        </div>
      </div>
      <button onClick={addVoca}>저장하기</button>
    </div>
  );
};

const Title = styled.h3`
  color: green;
  text-align: center;
`;

export default Form;
