import landingImg from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"
const Homepage =()=>{
    return(
        <div className={"flex flex-col gap-12"}>
            <div className={"bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16"}>
                <h1 className= "text-5xl font-bold tracking-tight text-pink-500">
                    Tuck into a take away today
                </h1>
                <span className={"text-xl"}>Food is just a click away</span>
            </div>
            <div className={"grid md:grid-cols-2 gap-5"}>
                <img src={landingImg}/>
                <div className={"flex flex-col items-center justify-center gap-4 text-center"}>
                    <span className={"font-bold text-xl tracking-tighter font-sans"}>
                            ORDER TAKEAWAY EVEN FASTER!
                    </span>
                    <span>
                        Download the UEats App for faster ordering and personalized recommendations
                    </span>
                    <img src={appDownload}/>
                </div>
            </div>
        </div>
    )
}

export default Homepage;