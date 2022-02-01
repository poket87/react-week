// bucket.js
import { db } from "../../firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
// Actions
const LOAD = "voca/LOAD";
const CREATE = "voca/CREATE";
// const UPDATE = "bucket/UPDATE";
// const DELETE = "bucket/DELETE";

const initialState = {
  list: [
    {
      text: "영화관 가기",
      desc: "설명입니다",
      exam: "스파이더맨",
    },
    {
      text: "매일 책읽기",
      desc: "설명입니다",
      exam: "해리포터",
    },
    {
      text: "수영 배우기",
      desc: "설명입니다",
      exam: "박태환",
    },
    {
      text: "코딩하기",
      desc: "설명입니다",
      exam: "항해99",
    },
  ],
};

// Action Creators
export function loadVoca(voca_list) {
  return { type: LOAD, voca_list };
}

export function createVoca(voca) {
  return { type: CREATE, voca };
}

// export function updateBucket(bucket_index) {
//   return { type: UPDATE, bucket_index };
// }

// export function deleteBucket(bucket_index) {
//   console.log("지울 버킷 인덱스", bucket_index);
//   return { type: DELETE, bucket_index };
// }

// Middlewares - redux thunk
export const loadVocaFB = () => {
  return async function (dispatch) {
    const voca_data = await getDocs(collection(db, "voca"));
    console.log(voca_data);

    let voca_list = [];

    voca_data.forEach((voca) => {
      console.log(voca.data());
      voca_list.push({ id: voca.id, ...voca.data() });
    });

    console.log(voca_list);

    dispatch(loadVoca(voca_list));
  };
};

export const addVocaFB = (voca) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "voca"), voca);
    console.log(docRef.id, docRef.data());
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "voca/LOAD": {
      return { list: action.voca_list };
    }
    case "voca/CREATE": {
      const new_voca_list = [...state.list, action.voca];
      return { list: new_voca_list };
    }

    // case "bucket/UPDATE": {
    //   console.log(state, action);

    //   const new_bucket_list = state.list.map((l, idx) => {
    //     if (parseInt(action.bucket_index) === idx) {
    //       return { ...l, completed: true };
    //     } else {
    //       return l;
    //     }
    //   });
    //   console.log({ list: new_bucket_list });
    //   return { list: new_bucket_list };
    // }

    // case "bucket/DELETE": {
    //   console.log(state, action);
    //   const new_bucket_list = state.list.filter((l, idx) => {
    //     console.log();
    //     return parseInt(action.bucket_index) !== idx;
    //   });

    //   return { list: new_bucket_list };
    // }
    default:
      return state;
  }
}
