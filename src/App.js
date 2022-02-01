import React from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import VocaList from "./VocaList";
import { useDispatch } from "react-redux";
import { loadVocaFB } from "./redux/modules/voca";
import Form from "./Form";

function App() {
  const [list, setList] = React.useState([
    {
      id: 1,
      text: "영화관 가기",
      desc: "설명입니다",
      exam: "스파이더맨",
    },
    {
      id: 2,
      text: "매일 책읽기",
      desc: "설명입니다",
      exam: "해리포터",
    },
    {
      id: 3,
      text: "수영 배우기",
      desc: "설명입니다",
      exam: "박태환",
    },
    {
      id: 4,
      text: "코딩하기",
      desc: "설명입니다",
      exam: "항해99",
    },
  ]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadVocaFB());
  }, []);

  return (
    <div className="App">
      <Container>
        <Title>My Dictionary</Title>
        <Line />
        <Switch>
          <Route path="/" exact>
            <VocaList list={list} />
          </Route>
          <Route path="/Form" exact>
            <Form />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
