import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Dnd from './Dnd/index';

function Workout(ctx) {
  const [workouts, setWorkouts] = useState(null);
  console.log(workouts);
  console.log('CTX : ', ctx);

  useEffect(() => {
    getWorkout();
    console.log('get');
  }, []);

  const getWorkout = async () => {
  const allCookies = cookies(ctx);
  const token = allCookies;
  const res = await axios.get('http://localhost:3000/routine?routine_id=1', {
    headers: { Cookie: `accessToken=${token}` },
    withCredentials: true,
  });
  setWorkouts(res.data)
  }

  const getWorkout2 = async () => {
  const allCookies = cookies(ctx);
  const token = allCookies;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_url}/exercise`, {
    headers: { Cookie: `accessToken=${token}` },
    withCredentials: true,
  });
  console.log(res.data.result);
}
  


  return (
    <>
      <button
        onClick={() => {
          getWorkout();
        }}
      >
        ddd
      </button>
      <button
        onClick={() => {
          getWorkout2();
        }}
      >
        ccc
      </button>
      {workouts && <Dnd curWorkouts={workouts}></Dnd>}
    </>
  );
}
export default Workout;

// function Workout({ data }) {
//   console.log('CTX : ', data);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <button onClick={() => router.push(`/add`)}>운동 추가하기</button>
//       {/* {workouts && <Dnd curWorkouts={workouts}></Dnd>} */}
//     </>
//   );
// }
// export default Workout;

// export const getServerSideProps = async (ctx) => {
//   const token = ctx.req.headers.cookie.split(' ')[1].split('=')[1];
//   // const allCookies = cookies(ctx);
//   // const token = allCookies;
//   const res = await axios.get('http://localhost:3000/routine?routine_id=1', {
//     headers: { Cookie: `accessToken=${token}` },
//     withCredentials: true,
//   });
//   const data = res.data;
//   return {
//     props: {
//       data,
//     },
//   };
// };
