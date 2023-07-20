import React from 'react'

const PoliticsCard = () => {

    let data = [
        { title: "Social Media Strategy" },

        {
            title: "Content Creation"
        },
        {
            title: "Community Management"
        },
        {
            title: "Paid Advertising"
        },
        {
            title: "Monitoring & Analytics"
        },
        {
            title: "Influencer Outreach"
        },
        {
            title: "Crisis Management"
        },
        {
            title: "Complaiances & Regulation"
        },
        {
            title: "Target Messaging"
        },
        {
            title: "Tracking Opponent"
        },
        {
            title: "Engaging Supporter"
        },
        {
            title: "Issue Specific Campaign "
        },
        {
            title: "Survey & Polls "
        },
        {
            title: "Geo- Targetting "
        },
        {
            title: " Social Media Listening "
        },

    ]
    return (
        <>
            {
                data.map((ele) => {
                    return (
                        
                        <div className='inline-block p-5 '>
                            <div className='rounded-[15px] text-white bg-pink-500 flex justify-center items-center  w-[200px] h-[250px]'>{ele.title}</div>
                        </div>
                    )
                })
            }




        </>
    )
}

export default PoliticsCard