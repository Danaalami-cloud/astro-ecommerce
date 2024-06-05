interface Props {
    thumb_src: string;
    title: string;
    price: number;
    description: string;
    collection: string;
    classList: string;
    cta: string;
}


export default function CardProduct({
    thumb_src,
    title,
    price,
    description,
    collection,
    classList,
    cta,
}: Props) {

    const classBody = ((cta != null) ? "align-items-end d-flex" : "text-center w-100 pt-8");


    return (
        <>
          <div className={`card residentialCard card-background align-items-start mb-4 mb-lg-0 ${classList}`}>
            <div className="flip-card-inner full-background" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${thumb_src})`, backgroundSize: 'cover' }}>
              <div className="flip-card-front d-block mt-10">
                <div className={`card-body ${classBody}`}>
                  <p className="text-white font-weight-bold mb-1">{collection}</p>
                  <h4 className="text-white font-weight-bolder">{title}</h4>
                  <h4 className="text-white font-weight-bolder residential-price">{price}</h4>
                </div>
              </div>
              <div className="flip-card-back residential-description">
                {description.map((item, index) => (
                    <p key={index} className="text-white font-weight-bold">{item}</p>
                ))}
                {/* <p className="text-white font-weight-bold">{description}</p> */}
              </div>
            </div>
          </div>
        </>
      );
    }
//Closes version that works
    // return (
    //     <div className={`flip-card card-background mb-4 mb-lg-0 ${classList}`}>
    //       <div className="flip-card-inner">
    //         <div className="flip-card-front" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${thumb_src})`, backgroundSize: 'cover' }}>
    //           <div className={`card-body ${classBody}`}>
    //             <p className="text-white font-weight-bold mb-1">{collection}</p>
    //             <h4 className="text-white font-weight-bolder">{title}</h4>
    //             <h4 className="text-white font-weight-bolder residential-price">{price}</h4>
    //           </div>
    //         </div>
    //         <div className="flip-card-back">
    //           <p className="text-white font-weight-bold">{description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
    // return (
    //     <>
    //       {/* <a href="#"> */}
    //         <div className={`card residentialCard card-background align-items-start mb-4 mb-lg-0 ${classList}`}>
    //           <div className="flip-card-inner full-background" style={{backgroundImage: `url(${`${import.meta.env.BASE_URL}${thumb_src}`})`, backgroundSize: 'cover'}}></div>
    //             <div className="flip-card-front d-block mt-10">
    //           <div className={`card-body ${classBody}`}>
    //                   <p className="text-white font-weight-bold mb-1">{collection}</p>
    //                   <h4 className="text-white font-weight-bolder">{title}</h4>
    //                   <h4 className="text-white font-weight-bolder residential-price">{price}</h4>
    //                 </div>
    //               <div className="flip-card-back residential-description">
    //                   <p className="text-white font-weight-bold">{description}
    //                   </p>
    //               </div>
    //             </div>
    //           </div>
    //       {/* </a> */}
    //     </>
    //   );
    // };

//     return (
//         <>
//             <div className={`flip-card  card-background mb-4 mb-lg-0 ${classList}`}>
//                 <div className="flip-card-inner full-background" style={{backgroundImage: `url(${`${import.meta.env.BASE_URL}${thumb_src}`})`, backgroundSize: 'cover'}}></div>
//                     <div className="flip-card-front">
//                         <div className={`card-body ${classBody}`}>
//                             {/* Front side content (e.g., image) */}
//                             <p className="text-white font-weight-bold mb-1">{collection}</p>
//                             <h4 className="text-white font-weight-bolder">{title}</h4>
//                             <h4 className="text-white font-weight-bolder residential-price">{price}</h4>
//                         </div>
//                     </div>
//                     <div className="flip-card-back">
//                         {/* Back side content (description) */}
//                         <p>{description}</p>
//                     </div>
//             </div>
//         </>
//     );
// }





// return (
//     <>
//       {/* <a href="#"> */}
//         <div className={`card residentialCard card-background align-items-start mb-4 mb-lg-0 ${classList}`}>
//           <div className="flip-card-inner full-background" style={{backgroundImage: `url(${`${import.meta.env.BASE_URL}${thumb_src}`})`, backgroundSize: 'cover'}}></div>
//             <div className="flip-card-front d-block mt-10">
//           <div className={`card-body ${classBody}`}>
//                   <p className="text-white font-weight-bold mb-1">{collection}</p>
//                   <h4 className="text-white font-weight-bolder">{title}</h4>
//                   <h4 className="text-white font-weight-bolder residential-price">{price}</h4>
//                 </div>
//               <div className="flip-card-back residential-description">
//                   <p className="text-white font-weight-bold">{description}
//                   </p>
//               </div>
//               {/* {(cta != null) &&  */}
//                 {/* <a href="#" className="text-white text-sm font-weight-semibold mb-0">See products &#62;</a>   */}
//               {/* } */}
//             </div>
//           </div>
//       {/* </a> */}
//     </>
//   );
// };

