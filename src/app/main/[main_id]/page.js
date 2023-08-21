'use client'
import {PinkBoxContainer} from "./PinkBoxContainer";

export default function MainPageDetail (props) {
    const {params} = props;
    console.log(params);
    return (
        <div>
            <PinkBoxContainer>hello main id page</PinkBoxContainer>
            <PinkBoxContainer color={'blue'}>hello main id page1</PinkBoxContainer>
        </div>
    )
}