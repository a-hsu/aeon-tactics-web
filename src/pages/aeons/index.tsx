import Navbar from '@/components/Navbar';
import { GetStaticProps } from 'next';

const serverUrl = process.env.SERVER_URL || "";

const Aeons = ({ data }:any) => {
  return (
    <>
    <Navbar />
    <div>
      Enter
      </div>
      </>
  );
}

// export const getStaticProps:GetStaticProps = async (ctx) => {
//   // Get Aeon List
//   const res = await fetch(serverUrl + ``)
//   const data = await res.json();
//   return {
//     props:{
//       data: { data }
//     }
//   }
// }

export default Aeons;
