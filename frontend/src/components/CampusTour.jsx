import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";


const CampusTour = () => {

    const images = {
        "img1": "https://media.istockphoto.com/id/2189800011/photo/group-of-university-students-studying-and-discussing-sitting-on-the-steps-of-the-campus.jpg?s=1024x1024&w=is&k=20&c=PZhqeJzr-XUExjgB5RUiyh5px3uQ5aasMv1JU-r_opU=",
        "img2": "https://media.istockphoto.com/id/2190074991/photo/university-students-standing-and-discussing-in-the-campus.jpg?s=1024x1024&w=is&k=20&c=CdM8hHjyt7_MTcw0_g9UwJk8BHoZItujhSC8aWAt0oA=",
        "img3": "https://media.istockphoto.com/id/2189606994/photo/portrait-of-a-young-woman-with-headphones-on-standing-in-the-university-campus.jpg?s=1024x1024&w=is&k=20&c=QAZ2BGSnVOgX1xY5SCkXX9NHK7iDCSnv0z0f9_8qb8M=",
        "img4": "https://media.istockphoto.com/id/171271182/photo/delhi-university-building-and-corridor.jpg?s=1024x1024&w=is&k=20&c=5cmY3uaKhWTOpsWyNDClaQqmDs2sjOuN35tYY3zRfTg=",
        "img5": "https://media.istockphoto.com/id/95061955/photo/villas.jpg?s=1024x1024&w=is&k=20&c=CvBalR5y_efU6tk_lgEyVqapRASjV5UWq15qBV1Jx8g=",
        "img6": "https://media.istockphoto.com/id/960462252/photo/group-of-teenage-school-friends-having-fun.jpg?s=1024x1024&w=is&k=20&c=Yb5o7NlOXJVLT25KrLm8MJVMsl5OFBT_A0-sIXMqI5g=",
    }

    const [index, setIndex] = useState(0);

    const campusImage = Object.values(images);

    const nextimage = () => {
        setIndex(
            (prev) => (prev+1) % campusImage.length
        )
    }

    const previmage = () => {
        setIndex(
            (prev) => (prev-1 + campusImage.length) % campusImage.length
        )
    }

    useEffect(() => {
        const handleKey = (e) => {
            if(e.key === "ArrowRight"){
                nextimage();
            }
            else if(e.key === "ArrowLeft"){
                previmage();
            }
        }

        window.addEventListener("keydown", handleKey);

        return () => {
            window.removeEventListener("keydown", handleKey);
        }
    }, []);


  return (
    <div className="relative w-full mx-auto max-w-4xl px-4 py-8">

        <h1 className="text-3xl font-bold text-center mb-8">Campus Tour</h1>

        <div className="relative">
          <img 
            src={campusImage[index]} 
            alt="Campus Tour" 
            className="w-full h-auto max-h-96 sm:max-h-500px object-cover rounded-2xl shadow-lg shadow-(--surface)/20" 
          />

          <button 
            onClick={previmage} 
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-(--surface-strong) hover:bg-(--accent) rounded-full p-2 sm:p-3 shadow-lg shadow-(--surface)/20 transition z-10"
            aria-label="Previous image"
          >
            <MdOutlineKeyboardDoubleArrowLeft size={20} />
          </button>

          <button 
            onClick={nextimage} 
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-(--surface-strong) hover:bg-(--accent) rounded-full p-2 sm:p-3 shadow-lg shadow-(--surface)/20 transition z-10"
            aria-label="Next image"
          >
            <MdOutlineKeyboardDoubleArrowRight size={20} />
          </button>
        </div>
    </div>
  )
}

export default CampusTour
