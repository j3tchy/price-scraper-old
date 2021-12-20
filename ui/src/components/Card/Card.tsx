import React from "react";

const Card = () => {
    return (
        <div className="rounded-xl bg-gray-100 flex flex-col w-1/3 overflow-hidden shadow cursor-pointer">
            <div 
                className="image"
                style={{
                    "width": "300px",
                    "height": "300px",
                    "background": "transparent url(https://placehold.co/300x300) no-repeat 0 0",
                    "backgroundSize": "cover",
                }}
            >
                {/* <img src="https://placehold.co/300x300" alt="Placeholder" /> */}
            </div>
            <div className="body p-3 flex justify-between">
                <div>
                    <p className="text-sm text-gray-500">Name:</p>
                    <p>Item 01</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Lowest price</p>
                    <p className="text-3xl font-extrabold text-right">
                        <span className="text-sm">£</span>65</p>
                </div>
            </div>
            <div className="footer bg-gray-200 p-3 flex justify-between">
                <p className="text-gray-500">Last checked:</p>
                <p className="text-gray-500">10/11/2021</p>
            </div>
        </div>
    )
}

export default Card;