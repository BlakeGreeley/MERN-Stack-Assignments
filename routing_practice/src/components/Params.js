import { useParams } from "react-router-dom";

const Params = (props) => {
    const {word, color, bgColor} = useParams();

    return(
        <div>
            {
                isNaN(word)?
                <p style={
                    color? {color: color, backgroundColor: bgColor}
                    :null
                }>
                    This word is: {word}
                </p>
                :
                <p>
                    The number is: { word }
                </p>
            }
        </div>
    )
}

export default Params;