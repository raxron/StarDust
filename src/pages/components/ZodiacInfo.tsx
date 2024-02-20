import React, { useState, useEffect } from "react";
import { ZodiacInfo } from "../../../typing";
import { ZodiacInfoProps } from "../../../typing";

const ZodiacInfo: React.FC<ZodiacInfoProps> = ({ infoSign }) => {
    const [info, setInfo] = useState<ZodiacInfo>({});

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://zodiac-sign-api1.p.rapidapi.com/all';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '829688d398msh8a3cdce36cb0c97p1340bfjsnaf099c096a14',
                    'X-RapidAPI-Host': 'zodiac-sign-api1.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
                setInfo(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="mb-2">
        {info[infoSign] ? (
            <>
                <p>{info[infoSign].date}</p>
            </>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    );
};

export default ZodiacInfo;
