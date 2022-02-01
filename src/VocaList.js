// 리액트 패키지를 불러옵니다.
import React from "react";
import "./App.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const VocaList = (props) => {
  const history = useHistory();
  const my_lists = useSelector((state) => state.bucket.list);

  // const addVocaList = () => {
  //   // 스프레드 문법! 기억하고 계신가요? :)
  //   // 원본 배열 list에 새로운 요소를 추가해주었습니다.
  //   // setList([...list, text.current.value]);

  //   // dispatch(
  //   //   createVoca({
  //   //     title: title.current.value,
  //   //     desc: desc.current.value,
  //   //     exam: exam.current.value,
  //   //   })
  //   // );

  //   dispatch(
  //     addVocaFB({
  //       title: title.current.value,
  //       desc: desc.current.value,
  //       exam: exam.current.value,
  //     })
  //   );
  // };

  return (
    <ListStyle>
      {my_lists.map((list, id) => {
        return (
          <>
            <ItemStyle className="list_item" key={id}>
              <p>단어</p>
              <h1>{list.title}</h1>
              <p>설명</p>
              <h3>{list.desc}</h3>
              <p>예시</p>
              <Exam>{list.exam}</Exam>
            </ItemStyle>
            <button
              className="add-button"
              onClick={() => {
                history.push("/form");
              }}
            >
              <i className="fas fa-plus-circle"></i>
            </button>
          </>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: ${(props) => (props.completed ? "orange" : "aliceblue")};
`;

const Exam = styled.h3`
  color: blue;
`;

export default VocaList;
