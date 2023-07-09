import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { SWimageURLs } from "../../../../api/constants/SWimageURLs";
import "./SWtemplate.css";

function SWtemplate({ fetchData, imgURL, infoTemplate }) {
    const [info, setInfo] = useState({});
    const [number, setNumber] = useState(1);
    const [isNext, setIsNext] = useState(true);

    const getData = async () => {
        try {
            const response = await fetchData(number);
            setInfo(response);
        } catch (error) {
            if (isNext) {
                setNumber((number) => number + 1);
            } else {
                // TODO: test  and resolve this
                if (number > 1) {
                    setNumber((number) => number - 1);
                }
            }
        }
    };

    useEffect(() => {
        getData();
    }, [number]);

    function handleImageError(e) {
        e.target.src = SWimageURLs.PLACEHOLDER;
    }

    return (
        <div className="SWcontainer">
            <div className="SWbuttonContainer">
                <Button
                    className="SWbutton"
                    variant="contained"
                    onClick={() => {
                        if (number - 1 != 0) {
                            setIsNext(false);
                            setNumber((number) => number - 1);
                        }
                    }}
                >
                    Previous
                </Button>
                <Button
                    className="SWbutton"
                    variant="contained"
                    onClick={() => {
                        setIsNext(true);
                        setNumber((number) => number + 1);
                    }}
                >
                    Next
                </Button>
            </div>

            <img className="SWimage" src={`${imgURL}${number}.jpg`} onError={handleImageError} />
            {infoTemplate(info)}
        </div>
    );
}

export { SWtemplate };
