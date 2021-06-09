import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";

function Projeler() {
  return (
    <Layout>
      <Container>
        <Header />
        projeler
      </Container>
    </Layout>
  );
}

export default Projeler;

// import Head from "next/head";
// import Container from "../components/container";
// import Header from "../components/header";
// import Layout from "../components/layout";
// import { getTable } from "../lib/airtable";

// function Projeler({ data }) {
//   return (
//     <Layout>
//       <Container>
//         <Header />
//         <ul>
//           {data.map((item) => {
//             console.log(item.Category, "xxx");

//             return (
//               <div key={item.Id}>
//                 <p>
//                   {item.Url}----{item.Category}
//                 </p>

//                 <div className="flex space-x-1 text-gray-500">
//                   <span>{item.Category},</span>
//                   <span>{item.Name}</span>
//                 </div>
//               </div>
//             );
//           })}
//         </ul>
//       </Container>
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const data = await getTable("Video");

//   return {
//     props: {
//       data,
//     },
//     revalidate: 600,
//   };
// }

// export default Projeler;
