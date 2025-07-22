import React from "react";

function Card({username}) {
    
    return (
        <>
            <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] mb-4">
            <div>
                <img
                src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="test"
                className="object-cover object-center rounded-t-xl"
                />
            </div>
            <div className="p-4">
                <h1 className="text-white">{username}</h1>
            </div>
            </div>
        </>
    )
}

export default Card