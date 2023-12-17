import React from "react";

export default function Footer(props) {
    return(
        <footer>
            <div className="row contacts ms-5 d-flex">
                <div className="col-1"></div>
                <div className="col-8">
                    <h1>About</h1>
                    <p>
                        Source code and more on <a href="https://github.com/VinceQian/galaxea-4" target="_blank">GitHub</a>.
                    </p>
                </div>
            </div>
            <p className="text-end fixed-bottom mb-1">&copy; Galaxea四号机</p>
        </footer>
    )
}