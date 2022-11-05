import Head from "next/head";
import Image from "next/image";
import { useState } from "react";



const NotificationCard = (props) => {
    return (
        <div className={`rounded-md ${ props.isNewNotification ? "bg-neutralVeryLightGrayishBlue" : "" } px-5 py-4`}>
            <div className="rounded-full w-[40px] h-[40px] relative float-left">
                <Image
                    src={`/images/${props.image}`}
                    layout="fill"
                    alt="Profile image"
                />
            </div>
            <div className="flex flex-col text-[0.825rem] float-left w-[calc(100%-54px)] ml-[14px]">
                {props.children}
            </div>
        </div>
    )
}



const Home = () => {
    const [newNotification, setNewNotification] = useState(3);

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                
                <link href="https://fonts.google.com/specimen/Plus+Jakarta+Sans" rel="stylesheet" />
            </Head>

            <div className="w-full h-[100vh] bg-gray-100 flex align-middle justify-center py-12">
                <div className="max-w-[580px]">
                    <div className="w-full rounded-xl bg-neutralWhite p-5">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-neutralVeryDarkBlue text-[1.25rem] flex space-x-2 items-center">
                                <span>Notifications</span>
                                {
                                    newNotification > 0 &&
                                        <div className="text-neutralWhite text-[0.925rem] font-bold h-[1.375rem] bg-primaryBlue rounded-md flex flex-col px-[10px] justify-center leading-none">
                                            {newNotification}
                                        </div>
                                }
                            </h1>
                            <p className="font-lighter text-neutralDarkGrayishBlue text-[0.825rem] cursor-pointer hover:text-primaryBlue" onClick={() => setNewNotification(0)}>Mark all as read</p>
                        </div>
                        <div className="flex flex-col space-y-1 mt-5">
                            { /* Mark Webber notification */ }
                            <NotificationCard isNewNotification={ newNotification > 0 ? true : false } image="avatar-mark-webber.webp">
                                <div className="flex flex-wrap">
                                    <p className="text-neutralDarkGrayishBlue tracking-[0.2px]">
                                        <a href="#" className="font-bold text-black hover:text-primaryBlue">Mark Webber</a> reacted to your recent post <a href="#" className="font-bold text-neutralDarkGrayishBlue hover:text-primaryBlue">My first tournament today!</a>
                                    </p>
                                    {
                                        newNotification > 0 &&
                                            <p className="w-[6px] h-[6px] bg-primaryRed rounded-full mt-[6px] ml-2"></p>
                                    }
                                </div>
                                <p className="text-neutralGrayishBlue">1m ago</p>
                            </NotificationCard>
                            
                            { /* Angela Gray notification */ }
                            <NotificationCard isNewNotification={ newNotification > 0 ? true : false } image="avatar-angela-gray.webp">
                                <div className="flex">
                                    <p className="text-neutralDarkGrayishBlue tracking-[0.2px]">
                                        <a href="#" className="font-bold text-black hover:text-primaryBlue">Angela Gray</a> followed you
                                    </p>
                                    {
                                        newNotification > 0 &&
                                            <span className="w-[6px] h-[6px] bg-primaryRed rounded-full mt-[6px] ml-2"></span>
                                    }
                                </div>
                                <p className="text-neutralGrayishBlue">5m ago</p>
                            </NotificationCard>

                            { /* Jacob Thompson notification */ }
                            <NotificationCard isNewNotification={ newNotification > 0 ? true : false } image="avatar-jacob-thompson.webp">
                                <div className="flex">
                                    <p className="text-neutralDarkGrayishBlue tracking-[0.2px]">
                                        <a href="#" className="font-bold text-black hover:text-primaryBlue">Jacob Thompson</a> has joined your group <a href="#" className="font-bold text-neutralDarkGrayishBlue hover:text-primaryBlue">Chess Club</a>
                                    </p>
                                    {
                                        newNotification > 0 &&
                                            <span className="w-[6px] h-[6px] bg-primaryRed rounded-full mt-[6px] ml-2"></span>
                                    }
                                </div>
                                <p className="text-neutralGrayishBlue">1 day ago</p>
                            </NotificationCard>

                            { /* Rizky Hasanuddin notification */ }
                            <NotificationCard isNewNotification={false} image="avatar-rizky-hasanuddin.webp">
                                <div className="flex">
                                    <p className="text-neutralDarkGrayishBlue tracking-[0.2px]">
                                        <a href="#" className="font-bold text-black hover:text-primaryBlue">Rizky Hasanuddin</a> sent you a private message
                                    </p>
                                </div>
                                <p className="text-neutralGrayishBlue">5 days ago</p>
                                <div className="mt-2 border-[1px] border-neutralLightGrayishBlue2 rounded-[4px] bg-white py-[10px] px-4 text-neutralDarkGrayishBlue text-[0.825rem] cursor-pointer leading-[1.125rem] hover:bg-neutralLightGrayishBlue1 hover:border-neutralLightGrayishBlue1">
                                    <p>Hello, thank you for setting up the Chess Club. I&#39;ve been a member for few weeks now and I&#39;m already having lots of fun and improving my game.</p>
                                </div>
                            </NotificationCard>

                            { /* Kimberly Smith notification */ }
                            <NotificationCard isNewNotification={false} image="avatar-kimberly-smith.webp">
                                <div className="flex relative">
                                    <p className="text-neutralDarkGrayishBlue tracking-[0.2px]">
                                        <a href="#" className="font-bold text-black hover:text-primaryBlue">Kimberly Smith</a> commented on your picture
                                    </p>
                                    <div className="w-[38px] h-[38px] rounded-md absolute right-0 cursor-pointer">
                                        <Image
                                            src="/images/image-chess.webp"
                                            layout="fill"
                                            alt="Message notification image"
                                        />
                                    </div>
                                </div>
                                <p className="text-neutralGrayishBlue">1 weeks ago</p>
                            </NotificationCard>

                            { /* Nathan Perterson notification */ }
                            <NotificationCard isNewNotification={false} image="avatar-nathan-peterson.webp">
                                <div className="flex">
                                    <p className="text-neutralDarkGrayishBlue tracking-[0.2px]">
                                        <a href="#" className="font-bold text-black hover:text-primaryBlue">Nathan Perterson</a> reacted to your recent post <a href="#" className="font-bold text-neutralDarkGrayishBlue hover:text-primaryBlue">5 end-game strategies to increase your win rate</a>
                                    </p>
                                </div>
                                <p className="text-neutralGrayishBlue">2 weeks ago</p>
                            </NotificationCard>

                            { /* Anna Kim notification */ }
                            <NotificationCard isNewNotification={false} image="avatar-anna-kim.webp">
                                <div className="flex">
                                    <p className="text-neutralDarkGrayishBlue tracking-[0.2px]">
                                        <a href="#" className="font-bold text-black hover:text-primaryBlue">Anna Kim</a> left the group <a href="#" className="font-bold text-neutralDarkGrayishBlue hover:text-primaryBlue">5 end-game strategies to increase your win rate</a>
                                    </p>
                                </div>
                                <p className="text-neutralGrayishBlue">2 weeks ago</p>
                            </NotificationCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Home;