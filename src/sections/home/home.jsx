





function Left() {

    const IconTime = () => {
        return (
            <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded rounded-xl">
                <span>image</span>
                <div>30 minutos</div>
            </div>
        )

    }

    const IconFood = () => {
        return (
            <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded rounded-xl">
                <span>image</span>
                <div>chickens</div>
            </div>)
    }

    return (
        <div className="psk-customBG w-full bg-blue-500 flex flex-col items-between p-4 
        
        md:p-6
        ">

            <div className="flex mb-4 
            text-sm  py-2 px-1
            justify-center w-48 h-[50px] bg-white rounded rounded-full h-6 items-center
            ml-auto
            ">
                <span>icono</span>
                <span className="ml-2">Hot recipes</span>
            </div>


            <div className="mb-4">
                <h1
                    className="text-5xl font-bold mb-4">
                    Spicy delicious chicken wings
                </h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ea, aperiam architecto unde ex consequuntur, eius similique expedita odit quo culpa quasi libero eos doloremque dignissimos voluptatibus blanditiis, quisquam rerum.</p>
            </div>

            <div className="flex justify-between">
                <IconTime></IconTime>
                <IconFood></IconFood>
            </div>

        </div>
    )
}


function Right() {
    return (
        <div className="w-[50%] h-full bg-black-100 bg-red-200 w-full">
            <div className="h-[450px]">
                <img src="/images/food.png" className="w-full h-full" style={{ objectFit: "cover" }}></img>
            </div>

        </div>
    )
}


export default function Home() {
    return (
        <div className="w-full flex flex justify-center items-center
        mt-4
        ">
            
            
            <div className=" 
            w-[95%] md:max-w-[1300px] rounded rounded-[30px]
            overflow-hidden
             bg-red-100
             
             md:flex
             lg:w-[80%]
             ">
                <Left></Left>
                <Right></Right>
            </div>



        </div>
    )
}