import React from "react";
import { useNavigate } from "react-router-dom";


function EnterPage() {

    const navigate = useNavigate();
    return (
        <>

            <h1 className="text-center text h1-increase">WARNING: DAD JOKES AHEAD</h1>
            <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary text2 btn btn-danger btn-lg" type="button"
                    onClick={() => navigate("/search")
                    }>
                    Click Here For Bad Dad Jokes
                </button>

                <div className="button2"></div>
                <button class="btn btn-primary text2 btn btn-danger btn-lg" type="button"
                    onClick={() => navigate("/other")
                    }>
                    Click Here For Other Jokes
                </button>


            </div>
        </>
    )
}
export default EnterPage;