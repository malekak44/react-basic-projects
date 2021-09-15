import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './data';

export default function Project() {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        setInfos(data);
    }, []);

    const { title } = useParams();

    return infos.filter(info => {
        if (info.title === title) {
            console.log(info.title, title);
        }
        return info;
    });
}