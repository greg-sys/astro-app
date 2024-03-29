import React, { Component } from 'react';
import '../App.css';

export default class AstroYantra extends Component {
    planetaryPositions = {
        sun: 5,
        moon: 10,
        mars: 6,
        mercury: 6,
        jupiter: 3,
        venus: 6,
        saturn: 4,
        rahu: 5,
        ketu: 4,
        uranus: 6
    }; 
    plantarySymbols = {
        sun: "๑",
        moon: "๒",
        mars: "๓",
        mercury: "๔",
        jupiter: "๕",
        venus: "๖",
        saturn: "๗",
        rahu: "๘",
        ketu: "๙",
        uranus: "๐"
    };
    signCoordinates = {
        /* Aires */
       0: [
            { x: 242, y: 71 },
            { x: 242, y: 88 },
            { x: 242, y: 105 },
            { x: 242, y: 122 },
            { x: 242, y: 139 },
            { x: 242, y: 156 },
            { x: 242, y: 173 },
            { x: 242, y: 190 },
            { x: 242, y: 207 }
       ],
        /* Sign of Taurus:*/
        1: [
            { x: 132, y: 110 },
            { x: 149, y: 110 },
            { x: 166, y: 110 },
            { x: 183, y: 110 },
            { x: 149, y: 137 },
            { x: 166, y: 137 },
            { x: 183, y: 137 },
            { x: 166, y: 164 },
            { x: 183, y: 164 }
        ],
        /* Sign of Gemini:*/
        2: [
            { x: 65, y: 208 },
            { x: 82, y: 208 },
            { x: 99, y: 208 },
            { x: 116, y: 208 },
            { x: 133, y: 208 },
            { x: 150, y: 208 },
            { x: 167, y: 208 },
            { x: 82, y: 181 },
            { x: 99, y: 181 }
        ],
        /* Sign of Cancer:*/
        3: [
            { x: 59, y: 258 },
            { x: 76, y: 258 },
            { x: 93, y: 258 },
            { x: 110, y: 258 },
            { x: 127, y: 258 },
            { x: 144, y: 258 },
            { x: 161, y: 258 },
            { x: 178, y: 258 },
            { x: 195, y: 258 }
        ],
        /* Sign of Leo:*/
        4:
        [
            { x: 65, y: 308 },
            { x: 82, y: 308 },
            { x: 99, y: 308 },
            { x: 116, y: 308 },
            { x: 133, y: 308 },
            { x: 150, y: 308 },
            { x: 167, y: 308 },
            { x: 82, y: 335 },
            { x: 99, y: 335 }
        ],
        /* Sign of Virgo:*/
        5: [
            { x: 132, y: 388 },
            { x: 149, y: 388 },
            { x: 166, y: 388 },
            { x: 183, y: 388 },
            { x: 149, y: 361 },
            { x: 166, y: 361 },
            { x: 183, y: 361 },
            { x: 176, y: 334 },
            { x: 193, y: 334 }
        ],
        /* Sign of Libra */
        6: [
            { x: 242, y: 439 },
            { x: 242, y: 422 },
            { x: 242, y: 405 },
            { x: 242, y: 388 },
            { x: 242, y: 371 },
            { x: 242, y: 354 },
            { x: 242, y: 337 },
            { x: 242, y: 320 },
            { x: 242, y: 303 }
        ],
        /* Sign of Scorpio:*/
        7: [
            { x: 291, y: 388 },
            { x: 308, y: 388 },
            { x: 325, y: 388 },
            { x: 342, y: 388 },
            { x: 291, y: 361 },
            { x: 308, y: 361 },
            { x: 325, y: 361 },
            { x: 291, y: 334 },
            { x: 306, y: 334 }
        ],
        /* Sign of Sagitarius:*/
        8: [
            { x: 415, y: 308 },
            { x: 398, y: 308 },
            { x: 381, y: 308 },
            { x: 364, y: 308 },
            { x: 247, y: 308 },
            { x: 330, y: 308 },
            { x: 312, y: 309 },
            { x: 398, y: 335 },
            { x: 381, y: 335 }
        ],
        /* Sign of Capricorn:*/
        9: [
            { x: 426, y: 258 },
            { x: 409, y: 258 },
            { x: 392, y: 258 },
            { x: 375, y: 258 },
            { x: 358, y: 258 },
            { x: 341, y: 258 },
            { x: 324, y: 258 },
            { x: 307, y: 258 },
            { x: 290, y: 258 }
        ],
        /* Sign of Aquarius:*/
        10: [
            { x: 415, y: 208 },
            { x: 398, y: 208 },
            { x: 381, y: 208 },
            { x: 364, y: 208 },
            { x: 347, y: 208 },
            { x: 330, y: 208 },
            { x: 312, y: 208 },
            { x: 398, y: 181 },
            { x: 381, y: 181 }
        ],
        /* Sign of Pisces:*/
        11: [
            { x: 291, y: 110 },
            { x: 308, y: 110 },
            { x: 325, y: 110 },
            { x: 342, y: 110 },
            { x: 291, y: 137 },
            { x: 308, y: 137 },
            { x: 325, y: 137 },
            { x: 291, y: 164 },
            { x: 306, y: 164 }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            itemsFromApi: [],
            isLoaded: false,
            isError: false,
            errorMessage: "",
        }
    }

    componentDidMount() {
        if(this.props.symbols === "Western") {
            this.plantarySymbols = {
                sun: "☉",
                moon: "☾",
                mars: "♂︎",
                mercury: "☿",
                jupiter: "♃",
                venus: "♀",
                saturn: "♄",
                rahu: "☊",
                ketu: "☋",
                uranus: "♅"
            };
        }
        // http://localhost:5000/api/siderealPlanets
        // http://firstnodeaws-env.eba-ywqhm7pn.us-east-2.elasticbeanstalk.com/api/astro/siderealPlanets
        fetch('http://firstnodeaws-env.eba-ywqhm7pn.us-east-2.elasticbeanstalk.com/api/astro/siderealPlanets', {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              // 'Content-Type': 'application/json'
              'Content-Type': 'application/x-www-form-urlencoded', // this does not trigger a CORS preflight, works with AWS
            },
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: "" // body data type must match "Content-Type" header
          })
        .then(res => {
            if(res.status !== 200) {
                let err = new Error(res.statusText)
                err.response = res
                throw err
            }
            if(res.headers.get("content-type") !== "application/json; charset=utf-8") {
                throw new TypeError(`Expected JSON, got ${res.headers.get("content-type")}: ${res.text().then(function(body) {
                    document.body.innerHTML = body
                  })} `);
            }
            return res.json();
        })
        .then(json => {
            this.setState({
                isLoaded: true,
                itemsFromApi: json,
            });
        })
        .then(result => {
            console.log('Success:', result);
          })
        .catch(error => {
            this.setState({
                isLoaded: true,
                itemsFromApi: {},
                isError: true,
                errorMessage: error.toString(),
            });
            console.error('Error:', error);
          });
    }

    render() {
        const items = [];
        const signTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; /* total number of planets in each sign */
        var { isLoaded, itemsFromApi, isError, errorMessage } = this.state;
        if(!isLoaded) {
            return <div>Loading...</div>
        } else if(isError){
            return <div>Error Loading. {errorMessage}</div>
        }
        else {
            console.log(itemsFromApi);
            console.log(this.planetaryPositions);
            this.planetaryPositions = itemsFromApi;
            let fontSize = ""
            if (this.props.symbols === "Western") {
                fontSize = "18";
            } 
            else {
                fontSize = "22";
            }

            for (const planet in this.planetaryPositions) {
                // font-family={this.family}
                // console.log(`${planet}: ${this.planetaryPositions[planet]}`);
                // console.log(((this.signCoordinates[this.planetaryPositions[planet]])[signTotals[this.planetaryPositions[planet]]])["x"]);
                items.push(<text 
                    x={ ((this.signCoordinates[this.planetaryPositions[planet]])[signTotals[this.planetaryPositions[planet]]])["x"] }
                    y={ ((this.signCoordinates[this.planetaryPositions[planet]])[signTotals[this.planetaryPositions[planet]]])["y"] }
                    font-size={this.fontSize}>{this.plantarySymbols[planet]}
                    </text>);
                signTotals[this.planetaryPositions[planet]] += 1; /* increment number of planets for sign planet is located in */
            }
            // console.log(signTotals);
            return(
                    <div>
                        <svg version="1.1" id="Layer_1" x="0px" y="0px"
                            width="496.735px" height="496.736px" viewBox="0 0 496.735 496.736" enable-background="new 0 0 496.735 496.736">
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_1_" cx="49.2798" cy="-89.8711" r="21.3742" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={ {"stop-color": '#FFFFFF'} }/>
                                    <stop  offset="1" style={{ "stop-color": '#FFDF00' }}/>
                                </radialGradient>
                                <path fill="url(#SVGID_1_)" stroke="#000000" stroke-miterlimit="10" d="M446.643,264.551c0,0,5.332,3.821,13.475,3.822
                                    c8.143-0.003,28.076-17.815,33.689-17.815v-0.207c-5.615,0-25.549-17.813-33.689-17.814c-8.143-0.001-13.477,3.816-13.477,3.816"
                                    />
                                
                                    <radialGradient id="SVGID_2_" cx="59.0776" cy="-77.3711" r="7.7668" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={{ "stop-color": '#FFDF00' }}/>
                                </radialGradient>
                                <path fill="url(#SVGID_2_)" stroke="#000000" stroke-miterlimit="10" d="M446.809,242.332c0,0,12.662-5.233,21.83,0.001"/>
                                
                                    <radialGradient id="SVGID_3_" cx="53.9058" cy="-73.7041" r="5.1402" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={{ "stop-color": '#FFDF00' }}/>
                                </radialGradient>
                                <path fill="url(#SVGID_3_)" stroke="#000000" stroke-miterlimit="10" d="M446.807,246.572c0,0,6.836-2.26,14.5,0.001"/>
                                
                                    <radialGradient id="SVGID_4_" cx="40.5581" cy="-77.3711" r="7.7681" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={{ "stop-color": '#FFDF00' }}/>
                                </radialGradient>
                                <path fill="url(#SVGID_4_)" stroke="#000000" stroke-miterlimit="10" d="M446.807,257.558c0,0,12.664,5.23,21.834-0.002"/>
                                
                                    <radialGradient id="SVGID_5_" cx="45.7319" cy="-73.7041" r="5.1402" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={{ "stop-color": '#FFDF00' }}/>
                                </radialGradient>
                                <path fill="url(#SVGID_5_)" stroke="#000000" stroke-miterlimit="10" d="M446.807,253.313c0,0,6.836,2.263,14.5,0.002"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_6_" cx="49.4741" cy="354.0361" r="21.3742" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={{ "stop-color": '#FFDF00' }}/>
                                </radialGradient>
                                <path fill="url(#SVGID_6_)" stroke="#000000" stroke-miterlimit="10" d="M49.901,264.371c0,0-5.334,3.817-13.477,3.815
                                    c-8.143,0.004-28.076-17.814-33.692-17.813v-0.203c5.614-0.004,25.55-17.817,33.689-17.816c8.146,0,13.479,3.813,13.479,3.813"/>
                                
                                    <radialGradient id="SVGID_7_" cx="59.272" cy="341.5361" r="7.768" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={{ "stop-color": '#FFDF00' }}/>
                                </radialGradient>
                                <path fill="url(#SVGID_7_)" stroke="#000000" stroke-miterlimit="10" d="M49.733,242.148c0,0-12.666-5.23-21.833,0"/>
                                
                                    <radialGradient id="SVGID_8_" cx="54.0991" cy="337.8701" r="5.1402" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={{ "stop-color": '#FFDF00' }}/>
                                </radialGradient>
                                <path fill="url(#SVGID_8_)" stroke="#000000" stroke-miterlimit="10" d="M49.733,246.392c0,0-6.836-2.264-14.5-0.001"/>
                                
                                    <radialGradient id="SVGID_9_" cx="40.751" cy="341.5361" r="7.7674" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={{ "stop-color": '#FFDF00' }}/>
                                </radialGradient>
                                <path fill="url(#SVGID_9_)" stroke="#000000" stroke-miterlimit="10" d="M49.734,257.374c0,0-12.668,5.23-21.833,0"/>
                                
                                    <radialGradient id="SVGID_10_" cx="45.9253" cy="337.8721" r="5.1409" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={{ "stop-color": '#FFDF00' }}/>
                                </radialGradient>
                                <path fill="url(#SVGID_10_)" stroke="#000000" stroke-miterlimit="10" d="M49.732,253.132c0,0-6.833,2.262-14.502-0.002"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M214.602,440.79c0,0-4.934,4.727-5.617,12.542
                                    s18.563,28.778,18.09,34.169l0.243,0.023c0.471-5.393,23.065-22.695,23.749-30.512c0.684-7.815-3.35-13.325-3.35-13.325"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M248.737,55.518c0,0-4.035-5.511-3.35-13.33
                                    c0.684-7.816,23.277-25.118,23.75-30.51l0.24,0.021c-0.474,5.391,18.773,26.353,18.09,34.171
                                    c-0.684,7.818-5.614,12.544-5.614,12.544"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M214.602,440.79c0,0-4.934,4.727-5.617,12.542
                                    s18.563,28.778,18.09,34.169l0.243,0.023c0.471-5.393,23.065-22.695,23.749-30.512c0.684-7.815-3.35-13.325-3.35-13.325"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M248.737,55.518c0,0-4.035-5.511-3.35-13.33
                                    c0.684-7.816,23.277-25.118,23.75-30.51l0.24,0.021c-0.474,5.391,18.773,26.353,18.09,34.171
                                    c-0.684,7.818-5.614,12.544-5.614,12.544"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M248.313,443.724c0,0-4.038,5.512-3.354,13.326
                                    c0.684,7.815,23.277,25.118,23.749,30.509l0.242-0.019c-0.472-5.392,18.774-26.356,18.09-34.172
                                    c-0.685-7.816-5.613-12.542-5.613-12.542"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M215.027,58.378c0,0-4.93-4.727-5.614-12.546
                                    c-0.684-7.816,18.563-28.779,18.091-34.17l0.242-0.021c0.469,5.391,23.064,22.692,23.749,30.511
                                    c0.685,7.818-3.352,13.329-3.352,13.329"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M282.02,440.76c0,0-3.02,6.128-0.988,13.706
                                    c2.03,7.578,27.285,20.694,28.686,25.921l0.236-0.061c-1.4-5.229,13.911-29.216,11.881-36.794
                                    c-2.031-7.578-7.707-11.376-7.707-11.376"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M182.326,67.048c0,0-5.676-3.799-7.707-11.38
                                    c-2.03-7.578,13.283-31.565,11.883-36.792l0.234-0.063c1.398,5.228,26.654,18.343,28.686,25.923
                                    c2.031,7.581-0.986,13.708-0.986,13.708"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M314.702,431.988c0,0-1.91,6.56,1.406,13.67
                                    c3.314,7.109,30.464,15.642,32.75,20.546l0.223-0.102c-2.287-4.904,8.627-31.188,5.312-38.298
                                    c-3.315-7.109-9.563-9.864-9.563-9.864"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M151.627,81.265c0,0-6.25-2.755-9.566-9.869
                                    c-3.315-7.11,7.6-33.392,5.313-38.297l0.22-0.102c2.285,4.905,29.435,13.436,32.752,20.548c3.316,7.113,1.409,13.671,1.409,13.671
                                    "/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M345.362,417.673c0,0-0.74,6.792,3.76,13.219
                                    s32.717,10.113,35.82,14.546l0.2-0.137c-3.103-4.435,3.081-32.213-1.419-38.639c-4.501-6.427-11.133-8.055-11.133-8.055"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M123.863,100.596c0,0-6.634-1.628-11.135-8.058
                                    c-4.5-6.427,1.686-34.205-1.417-38.638l0.199-0.139c3.102,4.434,31.32,8.121,35.822,14.549c4.501,6.429,3.762,13.219,3.762,13.219
                                    "/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M373.072,398.252c0,0,0.449,6.817,5.998,12.365
                                    c5.548,5.547,33.976,4.277,37.802,8.104l0.174-0.169c-3.825-3.829-2.56-32.259-8.106-37.806
                                    c-5.549-5.548-12.362-5.999-12.362-5.999"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M99.878,124.456c0,0-6.816-0.452-12.365-6.002
                                    c-5.547-5.548-4.279-33.978-8.105-37.805l0.171-0.171c3.825,3.828,32.255,2.559,37.805,8.107c5.549,5.55,6,12.365,6,12.365"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M396.988,374.315c0,0,1.628,6.636,8.056,11.136
                                    c6.426,4.499,34.201-1.688,38.635,1.417l0.143-0.196c-4.434-3.105-8.123-31.324-14.551-35.823
                                    c-6.428-4.5-13.216-3.762-13.216-3.762"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M80.401,152.117c0,0-6.791,0.739-13.22-3.764
                                    c-6.426-4.5-10.114-32.718-14.546-35.823l0.139-0.198c4.431,3.106,32.209-3.081,38.638,1.419
                                    c6.429,4.502,8.055,11.135,8.055,11.135"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M416.383,346.588c0,0,2.755,6.252,9.867,9.567
                                    c7.109,3.314,33.389-7.601,38.293-5.313l0.105-0.218c-4.904-2.289-13.439-29.438-20.549-32.753
                                    c-7.111-3.315-13.67-1.409-13.67-1.409"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M66.022,182.741c0,0-6.56,1.907-13.672-1.411
                                    c-7.11-3.316-15.642-30.465-20.546-32.753l0.103-0.219c4.903,2.289,31.185-8.627,38.298-5.312
                                    c7.113,3.317,9.866,9.567,9.866,9.567"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M430.67,315.915c0,0,3.799,5.679,11.379,7.709
                                    c7.576,2.03,31.563-13.282,36.789-11.883l0.064-0.232c-5.229-1.401-18.346-26.656-25.924-28.688
                                    c-7.578-2.03-13.705,0.986-13.705,0.986"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M57.18,215.396c0,0-6.128,3.017-13.709,0.985
                                    c-7.578-2.031-20.694-27.287-25.921-28.688l0.063-0.234c5.227,1.403,29.213-13.912,36.793-11.881
                                    c7.581,2.032,11.378,7.709,11.378,7.709"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M439.415,283.226c0,0,4.727,4.934,12.545,5.616
                                    c7.813,0.685,28.775-18.562,34.166-18.091l0.023-0.24c-5.393-0.474-22.695-23.067-30.512-23.75
                                    c-7.814-0.684-13.326,3.352-13.326,3.352"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M54.143,249.09c0,0-5.512,4.035-13.331,3.351
                                    c-7.815-0.684-25.118-23.277-30.509-23.75l0.021-0.241c5.391,0.474,26.353-18.773,34.171-18.09
                                    c7.819,0.685,12.544,5.616,12.544,5.616"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M442.348,249.517c0,0,5.512,4.035,13.328,3.353
                                    c7.814-0.685,25.117-23.277,30.508-23.75l-0.02-0.24c-5.393,0.47-26.355-18.776-34.172-18.091
                                    c-7.816,0.684-12.541,5.615-12.541,5.615"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M57.003,282.8c0,0-4.728,4.932-12.546,5.614
                                    c-7.815,0.685-28.779-18.563-34.169-18.093l-0.021-0.24c5.391-0.471,22.693-23.064,30.511-23.749
                                    c7.819-0.683,13.329,3.353,13.329,3.353"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M439.385,215.808c0,0,6.127,3.018,13.707,0.987
                                    c7.576-2.03,20.693-27.285,25.92-28.686l-0.061-0.233c-5.229,1.399-29.217-13.914-36.795-11.882
                                    c-7.578,2.031-11.375,7.707-11.375,7.707"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M65.673,315.501c0,0-3.799,5.677-11.381,7.708
                                    c-7.577,2.031-31.565-13.283-36.792-11.884l-0.063-0.234c5.228-1.397,18.343-26.654,25.923-28.686
                                    c7.582-2.031,13.708,0.986,13.708,0.986"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M430.614,183.127c0,0,6.559,1.908,13.672-1.408
                                    c7.107-3.315,15.639-30.463,20.543-32.751l-0.1-0.22c-4.906,2.286-31.189-8.629-38.301-5.313
                                    c-7.109,3.316-9.863,9.565-9.863,9.565"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M79.89,346.201c0,0-2.756,6.25-9.87,9.565
                                    c-7.109,3.316-33.392-7.6-38.296-5.313l-0.102-0.221c4.905-2.285,13.436-29.436,20.548-32.751
                                    c7.114-3.317,13.672-1.409,13.672-1.409"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M416.297,152.466c0,0,6.793,0.74,13.221-3.76
                                    c6.426-4.499,10.111-32.717,14.543-35.821l-0.135-0.199c-4.436,3.103-32.215-3.083-38.641,1.419
                                    c-6.427,4.5-8.054,11.133-8.054,11.133"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M99.221,373.964c0,0-1.628,6.634-8.058,11.135
                                    c-6.425,4.501-34.204-1.686-38.638,1.418l-0.139-0.199c4.434-3.103,8.121-31.32,14.549-35.821
                                    c6.429-4.502,13.219-3.762,13.219-3.762"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M396.877,124.756c0,0,6.816-0.451,12.365-5.999
                                    c5.547-5.546,4.277-33.976,8.104-37.802l-0.167-0.172c-3.83,3.826-32.261,2.558-37.808,8.107
                                    c-5.549,5.548-5.998,12.362-5.998,12.362"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M123.081,397.95c0,0-0.452,6.814-6.002,12.364
                                    c-5.546,5.549-33.977,4.279-37.804,8.105l-0.171-0.174c3.828-3.824,2.559-32.254,8.107-37.803c5.55-5.551,12.365-6,12.365-6"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M372.94,100.84c0,0,6.637-1.627,11.137-8.055
                                    c4.498-6.425-1.688-34.202,1.416-38.635l-0.195-0.141c-3.106,4.433-31.325,8.121-35.824,14.549
                                    c-4.5,6.427-3.762,13.216-3.762,13.216"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M150.742,417.427c0,0,0.738,6.79-3.764,13.22
                                    c-4.498,6.428-32.718,10.114-35.822,14.548l-0.199-0.143c3.106-4.431-3.081-32.208,1.42-38.636
                                    c4.501-6.43,11.135-8.057,11.135-8.057"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M345.213,81.443c0,0,6.252-2.755,9.568-9.867
                                    c3.313-7.108-7.602-33.389-5.316-38.293l-0.215-0.104c-2.291,4.905-29.439,13.438-32.754,20.549
                                    c-3.316,7.11-1.41,13.668-1.41,13.668"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M181.366,431.805c0,0,1.906,6.56-1.412,13.672
                                    c-3.313,7.111-30.464,15.644-32.751,20.548l-0.221-0.104c2.29-4.902-8.627-31.184-5.311-38.295
                                    c3.317-7.114,9.567-9.868,9.567-9.868"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M314.54,67.156c0,0,5.68-3.798,7.711-11.378
                                    c2.028-7.576-13.283-31.563-11.885-36.789l-0.23-0.065c-1.403,5.229-26.659,18.346-28.688,25.924
                                    c-2.03,7.578,0.986,13.705,0.986,13.705"/>
                            </g>
                            <g>
                                <path fill="#6FBE44" stroke="#000000" stroke-miterlimit="10" d="M214.021,440.647c0,0,3.016,6.128,0.984,13.71
                                    c-2.028,7.577-27.285,20.693-28.686,25.922l-0.235-0.064c1.403-5.226-13.911-29.212-11.88-36.791
                                    c2.031-7.582,7.708-11.38,7.708-11.38"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_11_" cx="49.2798" cy="-89.8711" r="21.3742" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_11_)" stroke="#000000" stroke-miterlimit="10" d="M446.643,264.551c0,0,5.332,3.821,13.475,3.822
                                    c8.143-0.003,28.076-17.815,33.689-17.815v-0.207c-5.615,0-25.549-17.813-33.689-17.814c-8.143-0.001-13.477,3.816-13.477,3.816"
                                    />
                                
                                    <radialGradient id="SVGID_12_" cx="59.0776" cy="-77.3711" r="7.7668" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_12_)" stroke="#000000" stroke-miterlimit="10" d="M446.809,242.332c0,0,12.662-5.233,21.83,0.001"/>
                                
                                    <radialGradient id="SVGID_13_" cx="53.9058" cy="-73.7041" r="5.1402" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_13_)" stroke="#000000" stroke-miterlimit="10" d="M446.807,246.572c0,0,6.836-2.26,14.5,0.001"/>
                                
                                    <radialGradient id="SVGID_14_" cx="40.5581" cy="-77.3711" r="7.7681" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_14_)" stroke="#000000" stroke-miterlimit="10" d="M446.807,257.558c0,0,12.664,5.23,21.834-0.002"/>
                                
                                    <radialGradient id="SVGID_15_" cx="45.7319" cy="-73.7041" r="5.1402" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_15_)" stroke="#000000" stroke-miterlimit="10" d="M446.807,253.313c0,0,6.836,2.263,14.5,0.002"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_16_" cx="49.4741" cy="354.0361" r="21.3742" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_16_)" stroke="#000000" stroke-miterlimit="10" d="M49.901,264.371c0,0-5.334,3.817-13.477,3.815
                                    c-8.143,0.004-28.076-17.814-33.692-17.813v-0.203c5.614-0.004,25.55-17.817,33.689-17.816c8.146,0,13.479,3.813,13.479,3.813"/>
                                
                                    <radialGradient id="SVGID_17_" cx="59.272" cy="341.5361" r="7.768" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_17_)" stroke="#000000" stroke-miterlimit="10" d="M49.733,242.148c0,0-12.666-5.23-21.833,0"/>
                                
                                    <radialGradient id="SVGID_18_" cx="54.0991" cy="337.8701" r="5.1402" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_18_)" stroke="#000000" stroke-miterlimit="10" d="M49.733,246.392c0,0-6.836-2.264-14.5-0.001"/>
                                
                                    <radialGradient id="SVGID_19_" cx="40.751" cy="341.5361" r="7.7674" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_19_)" stroke="#000000" stroke-miterlimit="10" d="M49.734,257.374c0,0-12.668,5.23-21.833,0"/>
                                
                                    <radialGradient id="SVGID_20_" cx="45.9253" cy="337.8721" r="5.1409" gradientTransform="matrix(0 -0.9476 -1 0 380.353 297.1522)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_20_)" stroke="#000000" stroke-miterlimit="10" d="M49.732,253.132c0,0-6.833,2.262-14.502-0.002"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_21_" cx="19.0483" cy="-78.5361" r="21.3753" gradientTransform="matrix(-0.1645 -0.9332 -0.9848 0.1736 392.6603 243.3214)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_21_)" stroke="#000000" stroke-miterlimit="10" d="M446.092,229.889c0,0,5.916,2.837,13.934,1.424
                                    c8.02-1.417,24.557-22.421,30.086-23.396l-0.035-0.204c-5.533,0.976-28.256-13.106-36.273-11.693s-12.607,6.099-12.607,6.099"/>
                                
                                    <radialGradient id="SVGID_22_" cx="28.8472" cy="-66.0352" r="7.7671" gradientTransform="matrix(-0.1645 -0.9332 -0.9848 0.1736 392.6603 243.3214)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_22_)" stroke="#000000" stroke-miterlimit="10" d="M442.399,207.978c0,0,11.561-7.353,21.5-3.79"/>
                                
                                    <radialGradient id="SVGID_23_" cx="23.6748" cy="-62.3672" r="5.1399" gradientTransform="matrix(-0.1645 -0.9332 -0.9848 0.1736 392.6603 243.3214)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_23_)" stroke="#000000" stroke-miterlimit="10" d="M443.133,212.154c0,0,6.338-3.413,14.279-2.517"/>
                                
                                    <radialGradient id="SVGID_24_" cx="10.3276" cy="-66.0361" r="7.7681" gradientTransform="matrix(-0.1645 -0.9332 -0.9848 0.1736 392.6603 243.3214)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_24_)" stroke="#000000" stroke-miterlimit="10" d="M445.042,222.972c0,0,13.381,2.953,21.502-3.793"/>
                                
                                    <radialGradient id="SVGID_25_" cx="15.5005" cy="-62.3682" r="5.1406" gradientTransform="matrix(-0.1645 -0.9332 -0.9848 0.1736 392.6603 243.3214)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_25_)" stroke="#000000" stroke-miterlimit="10" d="M444.303,218.792c0,0,7.125,1.042,14.281-2.515"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_26_" cx="19.2222" cy="365.3799" r="21.3744" gradientTransform="matrix(-0.1645 -0.9332 -0.9848 0.1736 392.6603 243.3214)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_26_)" stroke="#000000" stroke-miterlimit="10" d="M55.347,298.604c0,0-4.59,4.688-12.609,6.1
                                    c-8.019,1.417-30.743-12.669-36.274-11.693l-0.035-0.198c5.528-0.979,22.067-21.983,30.083-23.396
                                    c8.022-1.414,13.937,1.415,13.937,1.415"/>
                                
                                    <radialGradient id="SVGID_27_" cx="29.02" cy="352.8818" r="7.7674" gradientTransform="matrix(-0.1645 -0.9332 -0.9848 0.1736 392.6603 243.3214)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_27_)" stroke="#000000" stroke-miterlimit="10" d="M51.322,276.749c0,0-13.381-2.951-21.501,3.791"/>
                                
                                    <radialGradient id="SVGID_28_" cx="23.8472" cy="349.2139" r="5.1402" gradientTransform="matrix(-0.1645 -0.9332 -0.9848 0.1736 392.6603 243.3214)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_28_)" stroke="#000000" stroke-miterlimit="10" d="M52.06,280.927c0,0-7.125-1.042-14.28,2.518"/>
                                
                                    <radialGradient id="SVGID_29_" cx="10.499" cy="352.8799" r="7.7674" gradientTransform="matrix(-0.1645 -0.9332 -0.9848 0.1736 392.6603 243.3214)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_29_)" stroke="#000000" stroke-miterlimit="10" d="M53.967,291.743c0,0-11.567,7.352-21.501,3.791"/>
                                
                                    <radialGradient id="SVGID_30_" cx="15.6738" cy="349.2158" r="5.1409" gradientTransform="matrix(-0.1645 -0.9332 -0.9848 0.1736 392.6603 243.3214)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_30_)" stroke="#000000" stroke-miterlimit="10" d="M53.229,287.565c0,0-6.337,3.414-14.282,2.518"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_31_" cx="-9.1162" cy="-62.9658" r="21.3749" gradientTransform="matrix(-0.3241 -0.8904 -0.9397 0.342 394.7477 187.952)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_31_)" stroke="#000000" stroke-miterlimit="10" d="M439.534,195.848c0,0,6.316,1.767,13.967-1.017
                                    c7.652-2.788,20.291-26.345,25.566-28.265l-0.07-0.195c-5.279,1.921-30.104-8-37.754-5.216c-7.65,2.784-11.355,8.195-11.355,8.195
                                    "/>
                                
                                    <radialGradient id="SVGID_32_" cx="0.6826" cy="-50.4648" r="7.7674" gradientTransform="matrix(-0.3241 -0.8904 -0.9397 0.342 394.7477 187.952)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_32_)" stroke="#000000" stroke-miterlimit="10" d="M432.088,174.912c0,0,10.109-9.249,20.516-7.466"/>
                                
                                    <radialGradient id="SVGID_33_" cx="-4.4907" cy="-46.7979" r="5.1406" gradientTransform="matrix(-0.3241 -0.8904 -0.9397 0.342 394.7477 187.952)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_33_)" stroke="#000000" stroke-miterlimit="10" d="M433.538,178.897c0,0,5.65-4.462,13.627-4.958"/>
                                
                                    <radialGradient id="SVGID_34_" cx="-17.8374" cy="-50.4639" r="7.7685" gradientTransform="matrix(-0.3241 -0.8904 -0.9397 0.342 394.7477 187.952)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_34_)" stroke="#000000" stroke-miterlimit="10" d="M437.293,189.219c0,0,13.691,0.584,20.518-7.469"/>
                                
                                    <radialGradient id="SVGID_35_" cx="-12.6641" cy="-46.7969" r="5.1403" gradientTransform="matrix(-0.3241 -0.8904 -0.9397 0.342 394.7477 187.952)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_35_)" stroke="#000000" stroke-miterlimit="10" d="M435.842,185.231c0,0,7.197-0.211,13.627-4.957"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_36_" cx="-8.9312" cy="380.9434" r="21.375" gradientTransform="matrix(-0.3241 -0.8904 -0.9397 0.342 394.7477 187.952)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_36_)" stroke="#000000" stroke-miterlimit="10" d="M66.654,331.372c0,0-3.707,5.413-11.358,8.196
                                    c-7.651,2.787-32.476-7.14-37.753-5.218l-0.069-0.189c5.274-1.925,17.915-25.481,25.563-28.267
                                    c7.655-2.784,13.971-1.025,13.971-1.025"/>
                                
                                    <radialGradient id="SVGID_37_" cx="0.8672" cy="368.4434" r="7.7674" gradientTransform="matrix(-0.3241 -0.8904 -0.9397 0.342 394.7477 187.952)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_37_)" stroke="#000000" stroke-miterlimit="10" d="M58.896,310.547c0,0-13.69-0.583-20.516,7.467"/>
                                
                                    <radialGradient id="SVGID_38_" cx="-4.3071" cy="364.7764" r="5.1396" gradientTransform="matrix(-0.3241 -0.8904 -0.9397 0.342 394.7477 187.952)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_38_)" stroke="#000000" stroke-miterlimit="10" d="M60.348,314.535c0,0-7.198,0.211-13.625,4.958"/>
                                
                                    <radialGradient id="SVGID_39_" cx="-17.6538" cy="368.4443" r="7.7681" gradientTransform="matrix(-0.3241 -0.8904 -0.9397 0.342 394.7477 187.952)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_39_)" stroke="#000000" stroke-miterlimit="10" d="M64.104,324.854c0,0-10.115,9.249-20.517,7.469"/>
                                
                                    <radialGradient id="SVGID_40_" cx="-12.4819" cy="364.7783" r="5.1409" gradientTransform="matrix(-0.3241 -0.8904 -0.9397 0.342 394.7477 187.952)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_40_)" stroke="#000000" stroke-miterlimit="10" d="M62.653,320.87c0,0-5.648,4.461-13.628,4.958"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_41_" cx="-34.4028" cy="-42.791" r="21.3756" gradientTransform="matrix(-0.4738 -0.8206 -0.866 0.5 387.177 132.629)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_41_)" stroke="#000000" stroke-miterlimit="10" d="M427.161,163.464c0,0,6.529,0.643,13.58-3.427
                                    c7.051-4.074,15.406-29.468,20.27-32.275l-0.104-0.18c-4.865,2.809-31.035-2.652-38.086,1.418
                                    c-7.052,4.07-9.762,10.043-9.762,10.043"/>
                                
                                    <radialGradient id="SVGID_42_" cx="-24.604" cy="-30.2896" r="7.7671" gradientTransform="matrix(-0.4738 -0.8206 -0.866 0.5 387.177 132.629)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_42_)" stroke="#000000" stroke-miterlimit="10" d="M416.194,144.138c0,0,8.35-10.863,18.906-10.915"/>
                                
                                    <radialGradient id="SVGID_43_" cx="-29.7773" cy="-26.6226" r="5.1406" gradientTransform="matrix(-0.4738 -0.8206 -0.866 0.5 387.177 132.629)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_43_)" stroke="#000000" stroke-miterlimit="10" d="M418.313,147.812c0,0,4.789-5.375,12.559-7.249"/>
                                
                                    <radialGradient id="SVGID_44_" cx="-43.1245" cy="-30.2891" r="7.7681" gradientTransform="matrix(-0.4738 -0.8206 -0.866 0.5 387.177 132.629)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_44_)" stroke="#000000" stroke-miterlimit="10" d="M423.805,157.324c0,0,13.584-1.802,18.908-10.918"/>
                                
                                    <radialGradient id="SVGID_45_" cx="-37.9507" cy="-26.6221" r="5.141" gradientTransform="matrix(-0.4738 -0.8206 -0.866 0.5 387.177 132.629)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_45_)" stroke="#000000" stroke-miterlimit="10" d="M421.682,153.649c0,0,7.053-1.458,12.561-7.248"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_46_" cx="-34.2017" cy="401.1279" r="21.3754" gradientTransform="matrix(-0.4738 -0.8206 -0.866 0.5 387.177 132.629)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_46_)" stroke="#000000" stroke-miterlimit="10" d="M83.48,361.678c0,0-2.71,5.976-9.763,10.044
                                    c-7.051,4.073-33.222-1.391-38.086,1.418l-0.101-0.175c4.859-2.812,13.217-28.205,20.267-32.274
                                    c7.055-4.072,13.581-3.438,13.581-3.438"/>
                                
                                    <radialGradient id="SVGID_47_" cx="-24.4048" cy="388.6279" r="7.7674" gradientTransform="matrix(-0.4738 -0.8206 -0.866 0.5 387.177 132.629)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_47_)" stroke="#000000" stroke-miterlimit="10" d="M72.224,342.517c0,0-13.583,1.805-18.908,10.916"/>
                                
                                    <radialGradient id="SVGID_48_" cx="-29.5801" cy="384.9609" r="5.1403" gradientTransform="matrix(-0.4738 -0.8206 -0.866 0.5 387.177 132.629)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_48_)" stroke="#000000" stroke-miterlimit="10" d="M74.346,346.192c0,0-7.052,1.458-12.558,7.249"/>
                                
                                    <radialGradient id="SVGID_49_" cx="-42.9263" cy="388.6279" r="7.768" gradientTransform="matrix(-0.4738 -0.8206 -0.866 0.5 387.177 132.629)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_49_)" stroke="#000000" stroke-miterlimit="10" d="M79.837,355.703c0,0-8.355,10.864-18.908,10.917"/>
                                
                                    <radialGradient id="SVGID_50_" cx="-37.7534" cy="384.9629" r="5.141" gradientTransform="matrix(-0.4738 -0.8206 -0.866 0.5 387.177 132.629)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_50_)" stroke="#000000" stroke-miterlimit="10" d="M77.716,352.031c0,0-4.787,5.374-12.56,7.249"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_51_" cx="-55.6938" cy="-18.4526" r="21.375" gradientTransform="matrix(-0.6091 -0.7259 -0.766 0.6428 370.2964 79.1957)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_51_)" stroke="#000000" stroke-miterlimit="10" d="M409.353,133.72c0,0,6.541-0.501,12.776-5.733
                                    c6.238-5.237,10.057-31.696,14.357-35.304l-0.133-0.159c-4.305,3.611-31.023,2.777-37.262,8.011
                                    c-6.236,5.232-7.868,11.585-7.868,11.585"/>
                                
                                    <radialGradient id="SVGID_52_" cx="-45.897" cy="-5.9531" r="7.7675" gradientTransform="matrix(-0.6091 -0.7259 -0.766 0.6428 370.2964 79.1957)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_52_)" stroke="#000000" stroke-miterlimit="10" d="M395.197,116.592c0,0,6.337-12.148,16.726-14.032"/>
                                
                                    <radialGradient id="SVGID_53_" cx="-51.0703" cy="-2.2852" r="5.141" gradientTransform="matrix(-0.6091 -0.7259 -0.766 0.6428 370.2964 79.1957)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_53_)" stroke="#000000" stroke-miterlimit="10" d="M397.92,119.842c0,0,3.785-6.125,11.109-9.32"/>
                                
                                    <radialGradient id="SVGID_54_" cx="-64.416" cy="-5.9531" r="7.7688" gradientTransform="matrix(-0.6091 -0.7259 -0.766 0.6428 370.2964 79.1957)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_54_)" stroke="#000000" stroke-miterlimit="10" d="M404.982,128.256c0,0,13.065-4.133,16.726-14.036"/>
                                
                                    <radialGradient id="SVGID_55_" cx="-59.2432" cy="-2.2856" r="5.1403" gradientTransform="matrix(-0.6091 -0.7259 -0.766 0.6428 370.2964 79.1957)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_55_)" stroke="#000000" stroke-miterlimit="10" d="M402.254,125.005c0,0,6.69-2.66,11.109-9.318"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_56_" cx="-55.4829" cy="425.4678" r="21.3747" gradientTransform="matrix(-0.6091 -0.7259 -0.766 0.6428 370.2964 79.1957)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_56_)" stroke="#000000" stroke-miterlimit="10" d="M105.313,388.602c0,0-1.632,6.354-7.87,11.588
                                    c-6.236,5.235-32.958,4.398-37.261,8.01l-0.129-0.154c4.297-3.612,8.119-30.071,14.354-35.305
                                    c6.241-5.235,12.778-5.743,12.778-5.743"/>
                                
                                    <radialGradient id="SVGID_57_" cx="-45.6851" cy="412.9668" r="7.7674" gradientTransform="matrix(-0.6091 -0.7259 -0.766 0.6428 370.2964 79.1957)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_57_)" stroke="#000000" stroke-miterlimit="10" d="M90.9,371.688c0,0-13.064,4.135-16.725,14.032"/>
                                
                                    <radialGradient id="SVGID_58_" cx="-50.8604" cy="409.2998" r="5.1403" gradientTransform="matrix(-0.6091 -0.7259 -0.766 0.6428 370.2964 79.1957)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_58_)" stroke="#000000" stroke-miterlimit="10" d="M93.628,374.938c0,0-6.692,2.66-11.108,9.319"/>
                                
                                    <radialGradient id="SVGID_59_" cx="-64.2065" cy="412.9658" r="7.7681" gradientTransform="matrix(-0.6091 -0.7259 -0.766 0.6428 370.2964 79.1957)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_59_)" stroke="#000000" stroke-miterlimit="10" d="M100.688,383.35c0,0-6.341,12.15-16.725,14.035"/>
                                
                                    <radialGradient id="SVGID_60_" cx="-59.0342" cy="409.3018" r="5.1411" gradientTransform="matrix(-0.6091 -0.7259 -0.766 0.6428 370.2964 79.1957)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_60_)" stroke="#000000" stroke-miterlimit="10" d="M97.961,380.103c0,0-3.781,6.123-11.111,9.319"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_61_" cx="-71.0522" cy="8.7432" r="21.3753" gradientTransform="matrix(-0.7259 -0.6091 -0.6428 0.766 345.0542 30.4191)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_61_)" stroke="#000000" stroke-miterlimit="10" d="M386.651,107.521c0,0,6.354-1.629,11.588-7.865
                                    c5.233-6.24,4.399-32.96,8.01-37.261l-0.158-0.134c-3.611,4.303-30.07,8.123-35.305,14.359
                                    c-5.233,6.236-5.738,12.775-5.738,12.775"/>
                                
                                    <radialGradient id="SVGID_62_" cx="-61.2539" cy="21.2451" r="7.7671" gradientTransform="matrix(-0.7259 -0.6091 -0.6428 0.766 345.0542 30.4191)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_62_)" stroke="#000000" stroke-miterlimit="10" d="M369.736,93.111c0,0,4.132-13.063,14.033-16.723"/>
                                
                                    <radialGradient id="SVGID_63_" cx="-66.4263" cy="24.9121" r="5.1406" gradientTransform="matrix(-0.7259 -0.6091 -0.6428 0.766 345.0542 30.4191)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_63_)" stroke="#000000" stroke-miterlimit="10" d="M372.983,95.838c0,0,2.663-6.689,9.322-11.107"/>
                                
                                    <radialGradient id="SVGID_64_" cx="-79.7725" cy="21.2446" r="7.7685" gradientTransform="matrix(-0.7259 -0.6091 -0.6428 0.766 345.0542 30.4191)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_64_)" stroke="#000000" stroke-miterlimit="10" d="M381.397,102.898c0,0,12.148-6.339,14.034-16.727"/>
                                
                                    <radialGradient id="SVGID_65_" cx="-74.6006" cy="24.9121" r="5.1403" gradientTransform="matrix(-0.7259 -0.6091 -0.6428 0.766 345.0542 30.4191)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_65_)" stroke="#000000" stroke-miterlimit="10" d="M378.147,100.171c0,0,6.128-3.782,9.323-11.106"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_66_" cx="-70.8735" cy="452.665" r="21.3751" gradientTransform="matrix(-0.7259 -0.6091 -0.6428 0.766 345.0542 30.4191)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_66_)" stroke="#000000" stroke-miterlimit="10" d="M131.49,411.326c0,0-0.504,6.542-5.739,12.777
                                    c-5.232,6.239-31.694,10.057-35.304,14.358l-0.154-0.13c3.605-4.304,2.774-31.024,8.005-37.261
                                    c5.237-6.24,11.586-7.875,11.586-7.875"/>
                                
                                    <radialGradient id="SVGID_67_" cx="-61.0762" cy="440.1631" r="7.768" gradientTransform="matrix(-0.7259 -0.6091 -0.6428 0.766 345.0542 30.4191)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_67_)" stroke="#000000" stroke-miterlimit="10" d="M114.359,397.17c0,0-12.147,6.341-14.034,16.725"/>
                                
                                    <radialGradient id="SVGID_68_" cx="-66.2505" cy="436.4971" r="5.1403" gradientTransform="matrix(-0.7259 -0.6091 -0.6428 0.766 345.0542 30.4191)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_68_)" stroke="#000000" stroke-miterlimit="10" d="M117.61,399.899c0,0-6.128,3.78-9.321,11.105"/>
                                
                                    <radialGradient id="SVGID_69_" cx="-79.5981" cy="440.165" r="7.7681" gradientTransform="matrix(-0.7259 -0.6091 -0.6428 0.766 345.0542 30.4191)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_69_)" stroke="#000000" stroke-miterlimit="10" d="M126.023,406.958c0,0-4.135,13.066-14.034,16.726"/>
                                
                                    <radialGradient id="SVGID_70_" cx="-74.4243" cy="436.499" r="5.141" gradientTransform="matrix(-0.7259 -0.6091 -0.6428 0.766 345.0542 30.4191)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_70_)" stroke="#000000" stroke-miterlimit="10" d="M122.774,404.233c0,0-2.661,6.687-9.324,11.106"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_71_" cx="-81.8062" cy="38.4292" r="21.3757" gradientTransform="matrix(-0.8206 -0.4738 -0.5 0.866 311.4117 -13.848)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_71_)" stroke="#000000" stroke-miterlimit="10" d="M359.745,85.661c0,0,5.976-2.708,10.047-9.758
                                    c4.069-7.054-1.393-33.224,1.416-38.085l-0.18-0.104c-2.809,4.865-28.203,13.221-32.273,20.272
                                    c-4.071,7.05-3.433,13.578-3.433,13.578"/>
                                
                                    <radialGradient id="SVGID_72_" cx="-72.0059" cy="50.9307" r="7.7674" gradientTransform="matrix(-0.8206 -0.4738 -0.5 0.866 311.4117 -13.848)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_72_)" stroke="#000000" stroke-miterlimit="10" d="M340.583,74.408c0,0,1.801-13.583,10.916-18.906"/>
                                
                                    <radialGradient id="SVGID_73_" cx="-77.1782" cy="54.5967" r="5.1406" gradientTransform="matrix(-0.8206 -0.4738 -0.5 0.866 311.4117 -13.848)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_73_)" stroke="#000000" stroke-miterlimit="10" d="M344.254,76.529c0,0,1.461-7.05,7.252-12.558"/>
                                
                                    <radialGradient id="SVGID_74_" cx="-90.5264" cy="50.9287" r="7.7688" gradientTransform="matrix(-0.8206 -0.4738 -0.5 0.866 311.4117 -13.848)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_74_)" stroke="#000000" stroke-miterlimit="10" d="M353.767,82.021c0,0,10.864-8.352,10.917-18.91"/>
                                
                                    <radialGradient id="SVGID_75_" cx="-85.353" cy="54.5962" r="5.141" gradientTransform="matrix(-0.8206 -0.4738 -0.5 0.866 311.4117 -13.848)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_75_)" stroke="#000000" stroke-miterlimit="10" d="M350.092,79.9c0,0,5.379-4.789,7.254-12.557"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_76_" cx="-81.6167" cy="482.3477" r="21.3758" gradientTransform="matrix(-0.8206 -0.4738 -0.5 0.866 311.4117 -13.848)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_76_)" stroke="#000000" stroke-miterlimit="10" d="M161.215,429.159c0,0,0.64,6.53-3.433,13.581
                                    c-4.069,7.053-29.466,15.406-32.275,20.271l-0.174-0.101c2.803-4.864-2.656-31.035,1.414-38.085
                                    c4.074-7.056,10.043-9.769,10.043-9.769"/>
                                
                                    <radialGradient id="SVGID_77_" cx="-71.8179" cy="469.8467" r="7.768" gradientTransform="matrix(-0.8206 -0.4738 -0.5 0.866 311.4117 -13.848)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_77_)" stroke="#000000" stroke-miterlimit="10" d="M141.886,418.194c0,0-10.862,8.354-10.917,18.906"/>
                                
                                    <radialGradient id="SVGID_78_" cx="-76.9902" cy="466.1807" r="5.1401" gradientTransform="matrix(-0.8206 -0.4738 -0.5 0.866 311.4117 -13.848)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_78_)" stroke="#000000" stroke-miterlimit="10" d="M145.562,420.316c0,0-5.379,4.787-7.25,12.557"/>
                                
                                    <radialGradient id="SVGID_79_" cx="-90.3394" cy="469.8467" r="7.7681" gradientTransform="matrix(-0.8206 -0.4738 -0.5 0.866 311.4117 -13.848)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_79_)" stroke="#000000" stroke-miterlimit="10" d="M155.072,425.806c0,0-1.803,13.586-10.916,18.909"/>
                                
                                    <radialGradient id="SVGID_80_" cx="-85.1665" cy="466.1826" r="5.1416" gradientTransform="matrix(-0.8206 -0.4738 -0.5 0.866 311.4117 -13.848)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_80_)" stroke="#000000" stroke-miterlimit="10" d="M151.399,423.688c0,0-1.459,7.048-7.253,12.559"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_81_" cx="-87.2729" cy="69.3701" r="21.3754" gradientTransform="matrix(-0.8904 -0.3241 -0.342 0.9397 270.2848 -51.648)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_81_)" stroke="#000000" stroke-miterlimit="10" d="M329.45,68.806c0,0,5.416-3.705,8.2-11.354
                                    c2.783-7.654-7.14-32.478-5.218-37.752l-0.195-0.072c-1.921,5.278-25.479,17.917-28.264,25.568
                                    c-2.786,7.649-1.021,13.967-1.021,13.967"/>
                                
                                    <radialGradient id="SVGID_82_" cx="-77.4731" cy="81.8711" r="7.7674" gradientTransform="matrix(-0.8904 -0.3241 -0.342 0.9397 270.2848 -51.648)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_82_)" stroke="#000000" stroke-miterlimit="10" d="M308.625,61.051c0,0-0.586-13.688,7.469-20.515"/>
                                
                                    <radialGradient id="SVGID_83_" cx="-82.647" cy="85.5371" r="5.1406" gradientTransform="matrix(-0.8904 -0.3241 -0.342 0.9397 270.2848 -51.648)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_83_)" stroke="#000000" stroke-miterlimit="10" d="M312.611,62.502c0,0,0.216-7.197,4.962-13.626"/>
                                
                                    <radialGradient id="SVGID_84_" cx="-95.9937" cy="81.8711" r="7.7684" gradientTransform="matrix(-0.8904 -0.3241 -0.342 0.9397 270.2848 -51.648)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_84_)" stroke="#000000" stroke-miterlimit="10" d="M322.932,66.26c0,0,9.249-10.112,7.468-20.519"/>
                                
                                    <radialGradient id="SVGID_85_" cx="-90.8208" cy="85.5376" r="5.1406" gradientTransform="matrix(-0.8904 -0.3241 -0.342 0.9397 270.2848 -51.648)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_85_)" stroke="#000000" stroke-miterlimit="10" d="M318.946,64.808c0,0,4.465-5.649,4.963-13.625"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_86_" cx="-87.0684" cy="513.2783" r="21.3758" gradientTransform="matrix(-0.8904 -0.3241 -0.342 0.9397 270.2848 -51.648)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_86_)" stroke="#000000" stroke-miterlimit="10" d="M193.585,441.559c0,0,1.764,6.32-1.022,13.972
                                    c-2.783,7.651-26.343,20.289-28.265,25.566l-0.189-0.068c1.916-5.276-8.004-30.103-5.221-37.751
                                    c2.787-7.655,8.194-11.363,8.194-11.363"/>
                                
                                    <radialGradient id="SVGID_87_" cx="-77.27" cy="500.7803" r="7.7674" gradientTransform="matrix(-0.8904 -0.3241 -0.342 0.9397 270.2848 -51.648)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_87_)" stroke="#000000" stroke-miterlimit="10" d="M172.646,434.118c0,0-9.247,10.112-7.468,20.516"/>
                                
                                    <radialGradient id="SVGID_88_" cx="-82.4443" cy="497.1133" r="5.1403" gradientTransform="matrix(-0.8904 -0.3241 -0.342 0.9397 270.2848 -51.648)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_88_)" stroke="#000000" stroke-miterlimit="10" d="M176.634,435.569c0,0-4.466,5.648-4.96,13.625"/>
                                
                                    <radialGradient id="SVGID_89_" cx="-95.7925" cy="500.7803" r="7.768" gradientTransform="matrix(-0.8904 -0.3241 -0.342 0.9397 270.2848 -51.648)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_89_)" stroke="#000000" stroke-miterlimit="10" d="M186.954,439.325c0,0,0.583,13.691-7.467,20.518"/>
                                
                                    <radialGradient id="SVGID_90_" cx="-90.6177" cy="497.1143" r="5.1409" gradientTransform="matrix(-0.8904 -0.3241 -0.342 0.9397 270.2848 -51.648)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_90_)" stroke="#000000" stroke-miterlimit="10" d="M182.968,437.875c0,0-0.213,7.194-4.962,13.627"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_91_" cx="-87.3267" cy="99.877" r="21.3757" gradientTransform="matrix(-0.9332 -0.1645 -0.1736 0.9848 222.7468 -80.9274)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_91_)" stroke="#000000" stroke-miterlimit="10" d="M296.689,57.468c0,0,4.688-4.589,6.104-12.605
                                    c1.412-8.021-12.672-30.745-11.694-36.273l-0.205-0.037c-0.976,5.532-21.979,22.069-23.396,30.088
                                    c-1.414,8.017,1.42,13.933,1.42,13.933"/>
                                
                                    <radialGradient id="SVGID_92_" cx="-77.5278" cy="112.377" r="7.7675" gradientTransform="matrix(-0.9332 -0.1645 -0.1736 0.9848 222.7468 -80.9274)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_92_)" stroke="#000000" stroke-miterlimit="10" d="M274.834,53.446c0,0-2.953-13.379,3.793-21.5"/>
                                
                                    <radialGradient id="SVGID_93_" cx="-82.6992" cy="116.0439" r="5.1409" gradientTransform="matrix(-0.9332 -0.1645 -0.1736 0.9848 222.7468 -80.9274)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_93_)" stroke="#000000" stroke-miterlimit="10" d="M279.01,54.184c0,0-1.037-7.125,2.521-14.28"/>
                                
                                    <radialGradient id="SVGID_94_" cx="-96.0479" cy="112.3784" r="7.7685" gradientTransform="matrix(-0.9332 -0.1645 -0.1736 0.9848 222.7468 -80.9274)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_94_)" stroke="#000000" stroke-miterlimit="10" d="M289.829,56.092c0,0,7.354-11.564,3.791-21.503"/>
                                
                                    <radialGradient id="SVGID_95_" cx="-90.873" cy="116.0439" r="5.1405" gradientTransform="matrix(-0.9332 -0.1645 -0.1736 0.9848 222.7468 -80.9274)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_95_)" stroke="#000000" stroke-miterlimit="10" d="M285.651,55.354c0,0,3.416-6.339,2.521-14.28"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_96_" cx="-87.1113" cy="543.7939" r="21.3749" gradientTransform="matrix(-0.9332 -0.1645 -0.1736 0.9848 222.7468 -80.9274)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_96_)" stroke="#000000" stroke-miterlimit="10" d="M227.617,448.15c0,0,2.834,5.918,1.419,13.937
                                    c-1.412,8.021-22.42,24.555-23.396,30.087l-0.198-0.035c0.97-5.528-13.11-28.255-11.697-36.271
                                    c1.416-8.022,6.097-12.613,6.097-12.613"/>
                                
                                    <radialGradient id="SVGID_97_" cx="-77.3145" cy="531.292" r="7.7681" gradientTransform="matrix(-0.9332 -0.1645 -0.1736 0.9848 222.7468 -80.9274)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_97_)" stroke="#000000" stroke-miterlimit="10" d="M205.704,444.458c0,0-7.35,11.564-3.792,21.501"/>
                                
                                    <radialGradient id="SVGID_98_" cx="-82.4863" cy="527.626" r="5.1395" gradientTransform="matrix(-0.9332 -0.1645 -0.1736 0.9848 222.7468 -80.9274)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_98_)" stroke="#000000" stroke-miterlimit="10" d="M209.883,445.195c0,0-3.417,6.339-2.519,14.278"/>
                                
                                    <radialGradient id="SVGID_99_" cx="-95.8345" cy="531.292" r="7.7687" gradientTransform="matrix(-0.9332 -0.1645 -0.1736 0.9848 222.7468 -80.9274)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_99_)" stroke="#000000" stroke-miterlimit="10" d="M220.698,447.101c0,0,2.952,13.385-3.791,21.503"/>
                                
                                    <radialGradient id="SVGID_100_" cx="-90.6592" cy="527.6289" r="5.1409" gradientTransform="matrix(-0.9332 -0.1645 -0.1736 0.9848 222.7468 -80.9274)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_100_)" stroke="#000000" stroke-miterlimit="10" d="M216.521,446.367c0,0,1.04,7.121-2.521,14.281"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_101_" cx="-80.8384" cy="131.0176" r="21.375" gradientTransform="matrix(-0.9476 0 0 1 171.7582 -102.6084)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_101_)" stroke="#000000" stroke-miterlimit="10" d="M262.458,51.99c0,0,3.821-5.333,3.822-13.474
                                    c-0.002-8.145-17.817-28.078-17.815-33.691h-0.208c0.001,5.617-17.814,25.551-17.814,33.693
                                    c-0.001,8.141,3.817,13.475,3.817,13.475"/>
                                
                                    <radialGradient id="SVGID_102_" cx="-71.0386" cy="143.5176" r="7.7674" gradientTransform="matrix(-0.9476 0 0 1 171.7582 -102.6084)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_102_)" stroke="#000000" stroke-miterlimit="10" d="M240.237,51.825c0,0-5.232-12.663,0.001-21.832"/>
                                
                                    <radialGradient id="SVGID_103_" cx="-76.2129" cy="147.1841" r="5.1407" gradientTransform="matrix(-0.9476 0 0 1 171.7582 -102.6084)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_103_)" stroke="#000000" stroke-miterlimit="10" d="M244.478,51.826c0,0-2.26-6.836,0.002-14.501"/>
                                
                                    <radialGradient id="SVGID_104_" cx="-89.561" cy="143.5181" r="7.7687" gradientTransform="matrix(-0.9476 0 0 1 171.7582 -102.6084)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_104_)" stroke="#000000" stroke-miterlimit="10" d="M255.461,51.827c0,0,5.232-12.666,0-21.835"/>
                                
                                    <radialGradient id="SVGID_105_" cx="-84.3877" cy="147.1846" r="5.1403" gradientTransform="matrix(-0.9476 0 0 1 171.7582 -102.6084)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_105_)" stroke="#000000" stroke-miterlimit="10" d="M251.22,51.826c0,0,2.263-6.836,0.002-14.5"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_106_" cx="-80.6416" cy="574.9248" r="21.3754" gradientTransform="matrix(-0.9476 0 0 1 171.7582 -102.6084)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_106_)" stroke="#000000" stroke-miterlimit="10" d="M262.276,448.731c0,0,3.819,5.336,3.816,13.479
                                    c0.004,8.144-17.814,28.075-17.814,33.692h-0.202c-0.004-5.613-17.817-25.55-17.818-33.689c0.001-8.146,3.813-13.479,3.813-13.479
                                    "/>
                                
                                    <radialGradient id="SVGID_107_" cx="-70.8452" cy="562.4248" r="7.768" gradientTransform="matrix(-0.9476 0 0 1 171.7582 -102.6084)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_107_)" stroke="#000000" stroke-miterlimit="10" d="M240.054,448.9c0,0-5.23,12.666,0,21.833"/>
                                
                                    <radialGradient id="SVGID_108_" cx="-76.0205" cy="558.7598" r="5.1403" gradientTransform="matrix(-0.9476 0 0 1 171.7582 -102.6084)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_108_)" stroke="#000000" stroke-miterlimit="10" d="M244.298,448.901c0,0-2.264,6.836-0.001,14.5"/>
                                
                                    <radialGradient id="SVGID_109_" cx="-89.3662" cy="562.4268" r="7.7681" gradientTransform="matrix(-0.9476 0 0 1 171.7582 -102.6084)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_109_)" stroke="#000000" stroke-miterlimit="10" d="M255.28,448.9c0,0,5.23,12.668,0.002,21.835"/>
                                
                                    <radialGradient id="SVGID_110_" cx="-84.1943" cy="558.7617" r="5.141" gradientTransform="matrix(-0.9476 0 0 1 171.7582 -102.6084)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_110_)" stroke="#000000" stroke-miterlimit="10" d="M251.04,448.902c0,0,2.26,6.833-0.002,14.502"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_111_" cx="-68.6284" cy="160.4092" r="21.3755" gradientTransform="matrix(-0.9332 0.1645 0.1736 0.9848 117.9254 -114.9157)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_111_)" stroke="#000000" stroke-miterlimit="10" d="M227.795,52.541c0,0,2.837-5.916,1.424-13.933
                                    c-1.416-8.02-22.422-24.557-23.395-30.086l-0.206,0.036c0.977,5.532-13.106,28.256-11.693,36.275
                                    c1.413,8.018,6.099,12.607,6.099,12.607"/>
                                
                                    <radialGradient id="SVGID_112_" cx="-58.8296" cy="172.9092" r="7.7674" gradientTransform="matrix(-0.9332 0.1645 0.1736 0.9848 117.9254 -114.9157)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_112_)" stroke="#000000" stroke-miterlimit="10" d="M205.883,56.236c0,0-7.352-11.562-3.79-21.5"/>
                                
                                    <radialGradient id="SVGID_113_" cx="-64.0049" cy="176.5752" r="5.1406" gradientTransform="matrix(-0.9332 0.1645 0.1736 0.9848 117.9254 -114.9157)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_113_)" stroke="#000000" stroke-miterlimit="10" d="M210.06,55.5c0,0-3.413-6.34-2.516-14.281"/>
                                
                                    <radialGradient id="SVGID_114_" cx="-77.3501" cy="172.9087" r="7.7685" gradientTransform="matrix(-0.9332 0.1645 0.1736 0.9848 117.9254 -114.9157)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_114_)" stroke="#000000" stroke-miterlimit="10" d="M220.877,53.594c0,0,2.954-13.381-3.792-21.503"/>
                                
                                    <radialGradient id="SVGID_115_" cx="-72.1792" cy="176.5762" r="5.1402" gradientTransform="matrix(-0.9332 0.1645 0.1736 0.9848 117.9254 -114.9157)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_115_)" stroke="#000000" stroke-miterlimit="10" d="M216.7,54.33c0,0,1.042-7.125-2.516-14.28"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_116_" cx="-68.4556" cy="604.3232" r="21.375" gradientTransform="matrix(-0.9332 0.1645 0.1736 0.9848 117.9254 -114.9157)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_116_)" stroke="#000000" stroke-miterlimit="10" d="M296.508,443.286c0,0,4.688,4.591,6.101,12.61
                                    c1.417,8.02-12.669,30.741-11.692,36.273l-0.199,0.035c-0.979-5.527-21.982-22.067-23.396-30.084
                                    c-1.414-8.022,1.415-13.938,1.415-13.938"/>
                                
                                    <radialGradient id="SVGID_117_" cx="-58.6577" cy="591.8232" r="7.7687" gradientTransform="matrix(-0.9332 0.1645 0.1736 0.9848 117.9254 -114.9157)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_117_)" stroke="#000000" stroke-miterlimit="10" d="M274.655,447.31c0,0-2.951,13.383,3.79,21.503"/>
                                
                                    <radialGradient id="SVGID_118_" cx="-63.8306" cy="588.1572" r="5.1402" gradientTransform="matrix(-0.9332 0.1645 0.1736 0.9848 117.9254 -114.9157)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_118_)" stroke="#000000" stroke-miterlimit="10" d="M278.833,446.575c0,0-1.041,7.125,2.519,14.278"/>
                                
                                    <radialGradient id="SVGID_119_" cx="-77.1782" cy="591.8232" r="7.7688" gradientTransform="matrix(-0.9332 0.1645 0.1736 0.9848 117.9254 -114.9157)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_119_)" stroke="#000000" stroke-miterlimit="10" d="M289.649,444.667c0,0,7.352,11.567,3.792,21.503"/>
                                
                                    <radialGradient id="SVGID_120_" cx="-72.0049" cy="588.1602" r="5.1409" gradientTransform="matrix(-0.9332 0.1645 0.1736 0.9848 117.9254 -114.9157)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_120_)" stroke="#000000" stroke-miterlimit="10" d="M285.473,445.405c0,0,3.412,6.337,2.516,14.282"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_121_" cx="-51.6733" cy="186.7759" r="21.3754" gradientTransform="matrix(-0.8904 0.3241 0.342 0.9397 62.5541 -117.0031)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_121_)" stroke="#000000" stroke-miterlimit="10" d="M193.754,59.102c0,0,1.767-6.319-1.017-13.969
                                    c-2.788-7.652-26.346-20.291-28.264-25.567l-0.196,0.071c1.922,5.278-8,30.103-5.216,37.755c2.783,7.65,8.195,11.356,8.195,11.356
                                    "/>
                                
                                    <radialGradient id="SVGID_122_" cx="-41.874" cy="199.2764" r="7.7668" gradientTransform="matrix(-0.8904 0.3241 0.342 0.9397 62.5541 -117.0031)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_122_)" stroke="#000000" stroke-miterlimit="10" d="M172.817,66.545c0,0-9.248-10.109-7.466-20.515"/>
                                
                                    <radialGradient id="SVGID_123_" cx="-47.0488" cy="202.9434" r="5.1406" gradientTransform="matrix(-0.8904 0.3241 0.342 0.9397 62.5541 -117.0031)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_123_)" stroke="#000000" stroke-miterlimit="10" d="M176.803,65.096c0,0-4.461-5.651-4.957-13.627"/>
                                
                                    <radialGradient id="SVGID_124_" cx="-60.395" cy="199.2773" r="7.7681" gradientTransform="matrix(-0.8904 0.3241 0.342 0.9397 62.5541 -117.0031)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_124_)" stroke="#000000" stroke-miterlimit="10" d="M187.125,61.34c0,0,0.585-13.691-7.469-20.518"/>
                                
                                    <radialGradient id="SVGID_125_" cx="-55.2231" cy="202.9448" r="5.1402" gradientTransform="matrix(-0.8904 0.3241 0.342 0.9397 62.5541 -117.0031)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_125_)" stroke="#000000" stroke-miterlimit="10" d="M183.139,62.791c0,0-0.212-7.198-4.958-13.626"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_126_" cx="-51.4888" cy="630.6846" r="21.3753" gradientTransform="matrix(-0.8904 0.3241 0.342 0.9397 62.5541 -117.0031)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_126_)" stroke="#000000" stroke-miterlimit="10" d="M329.277,431.978c0,0,5.414,3.707,8.197,11.359
                                    c2.788,7.652-7.14,32.477-5.218,37.754l-0.188,0.069c-1.925-5.273-25.481-17.915-28.267-25.564
                                    c-2.785-7.653-1.026-13.97-1.026-13.97"/>
                                
                                    <radialGradient id="SVGID_127_" cx="-41.6909" cy="618.1846" r="7.768" gradientTransform="matrix(-0.8904 0.3241 0.342 0.9397 62.5541 -117.0031)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_127_)" stroke="#000000" stroke-miterlimit="10" d="M308.454,439.736c0,0-0.582,13.69,7.467,20.518"/>
                                
                                    <radialGradient id="SVGID_128_" cx="-46.8643" cy="614.5186" r="5.1402" gradientTransform="matrix(-0.8904 0.3241 0.342 0.9397 62.5541 -117.0031)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_128_)" stroke="#000000" stroke-miterlimit="10" d="M312.441,438.287c0,0,0.211,7.197,4.959,13.625"/>
                                
                                    <radialGradient id="SVGID_129_" cx="-60.2124" cy="618.1855" r="7.7688" gradientTransform="matrix(-0.8904 0.3241 0.342 0.9397 62.5541 -117.0031)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_129_)" stroke="#000000" stroke-miterlimit="10" d="M322.76,434.529c0,0,9.248,10.114,7.469,20.519"/>
                                
                                    <radialGradient id="SVGID_130_" cx="-55.0386" cy="614.5205" r="5.1416" gradientTransform="matrix(-0.8904 0.3241 0.342 0.9397 62.5541 -117.0031)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_130_)" stroke="#000000" stroke-miterlimit="10" d="M318.777,435.981c0,0,4.46,5.647,4.957,13.629"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_131_" cx="-30.5386" cy="210.1602" r="21.3757" gradientTransform="matrix(-0.8206 0.4738 0.5 0.866 7.231 -109.4304)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_131_)" stroke="#000000" stroke-miterlimit="10" d="M161.37,71.474c0,0,0.643-6.529-3.427-13.58
                                    c-4.074-7.052-29.469-15.407-32.274-20.271l-0.181,0.104c2.81,4.864-2.652,31.035,1.419,38.087
                                    c4.069,7.051,10.042,9.761,10.042,9.761"/>
                                
                                    <radialGradient id="SVGID_132_" cx="-20.7393" cy="222.6611" r="7.7674" gradientTransform="matrix(-0.8206 0.4738 0.5 0.866 7.231 -109.4304)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_132_)" stroke="#000000" stroke-miterlimit="10" d="M142.044,82.44c0,0-10.862-8.35-10.915-18.907"/>
                                
                                    <radialGradient id="SVGID_133_" cx="-25.9126" cy="226.3271" r="5.1409" gradientTransform="matrix(-0.8206 0.4738 0.5 0.866 7.231 -109.4304)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_133_)" stroke="#000000" stroke-miterlimit="10" d="M145.717,80.321c0,0-5.375-4.791-7.248-12.56"/>
                                
                                    <radialGradient id="SVGID_134_" cx="-39.2603" cy="222.6616" r="7.7685" gradientTransform="matrix(-0.8206 0.4738 0.5 0.866 7.231 -109.4304)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_134_)" stroke="#000000" stroke-miterlimit="10" d="M155.23,74.829c0,0-1.801-13.584-10.918-18.909"/>
                                
                                    <radialGradient id="SVGID_135_" cx="-34.0884" cy="226.3291" r="5.1406" gradientTransform="matrix(-0.8206 0.4738 0.5 0.866 7.231 -109.4304)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_135_)" stroke="#000000" stroke-miterlimit="10" d="M151.557,76.95c0,0-1.459-7.052-7.249-12.559"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_136_" cx="-30.3379" cy="654.0791" r="21.3754" gradientTransform="matrix(-0.8206 0.4738 0.5 0.866 7.231 -109.4304)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_136_)" stroke="#000000" stroke-miterlimit="10" d="M359.583,415.152c0,0,5.977,2.711,10.045,9.764
                                    c4.074,7.052-1.391,33.222,1.418,38.086l-0.174,0.102c-2.812-4.858-28.205-13.218-32.274-20.268
                                    c-4.073-7.055-3.438-13.579-3.438-13.579"/>
                                
                                    <radialGradient id="SVGID_137_" cx="-20.5396" cy="641.5771" r="7.7687" gradientTransform="matrix(-0.8206 0.4738 0.5 0.866 7.231 -109.4304)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_137_)" stroke="#000000" stroke-miterlimit="10" d="M340.422,426.408c0,0,1.805,13.585,10.916,18.91"/>
                                
                                    <radialGradient id="SVGID_138_" cx="-25.7139" cy="637.9131" r="5.1402" gradientTransform="matrix(-0.8206 0.4738 0.5 0.866 7.231 -109.4304)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_138_)" stroke="#000000" stroke-miterlimit="10" d="M344.098,424.289c0,0,1.458,7.051,7.25,12.557"/>
                                
                                    <radialGradient id="SVGID_139_" cx="-39.0625" cy="641.5791" r="7.7687" gradientTransform="matrix(-0.8206 0.4738 0.5 0.866 7.231 -109.4304)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_139_)" stroke="#000000" stroke-miterlimit="10" d="M353.609,418.795c0,0,10.864,8.355,10.918,18.91"/>
                                
                                    <radialGradient id="SVGID_140_" cx="-33.8882" cy="637.915" r="5.141" gradientTransform="matrix(-0.8206 0.4738 0.5 0.866 7.231 -109.4304)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_140_)" stroke="#000000" stroke-miterlimit="10" d="M349.938,420.917c0,0,5.373,4.788,7.248,12.562"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_141_" cx="-5.5308" cy="230.0195" r="21.3757" gradientTransform="matrix(-0.7259 0.6091 0.6428 0.766 -46.2022 -92.5489)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_141_)" stroke="#000000" stroke-miterlimit="10" d="M131.626,89.281c0,0-0.501-6.542-5.733-12.779
                                    c-5.236-6.237-31.696-10.056-35.304-14.358l-0.16,0.134c3.611,4.302,2.778,31.024,8.012,37.262
                                    c5.232,6.237,11.584,7.869,11.584,7.869"/>
                                
                                    <radialGradient id="SVGID_142_" cx="4.2686" cy="242.5215" r="7.7674" gradientTransform="matrix(-0.7259 0.6091 0.6428 0.766 -46.2022 -92.5489)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_142_)" stroke="#000000" stroke-miterlimit="10" d="M114.498,103.438c0,0-12.147-6.337-14.032-16.725"/>
                                
                                    <radialGradient id="SVGID_143_" cx="-0.9058" cy="246.1875" r="5.141" gradientTransform="matrix(-0.7259 0.6091 0.6428 0.766 -46.2022 -92.5489)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_143_)" stroke="#000000" stroke-miterlimit="10" d="M117.748,100.712c0,0-6.125-3.785-9.319-11.11"/>
                                
                                    <radialGradient id="SVGID_144_" cx="-14.2515" cy="242.5215" r="7.7688" gradientTransform="matrix(-0.7259 0.6091 0.6428 0.766 -46.2022 -92.5489)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_144_)" stroke="#000000" stroke-miterlimit="10" d="M126.163,93.652c0,0-4.133-13.065-14.036-16.725"/>
                                
                                    <radialGradient id="SVGID_145_" cx="-9.0786" cy="246.188" r="5.1406" gradientTransform="matrix(-0.7259 0.6091 0.6428 0.766 -46.2022 -92.5489)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_145_)" stroke="#000000" stroke-miterlimit="10" d="M122.913,96.379c0,0-2.662-6.691-9.32-11.109"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_146_" cx="-5.3188" cy="673.9404" r="21.376" gradientTransform="matrix(-0.7259 0.6091 0.6428 0.766 -46.2022 -92.5489)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_146_)" stroke="#000000" stroke-miterlimit="10" d="M386.506,393.319c0,0,6.355,1.632,11.589,7.871
                                    c5.237,6.236,4.399,32.959,8.01,37.261l-0.153,0.131c-3.611-4.298-30.07-8.119-35.305-14.355
                                    c-5.236-6.239-5.743-12.774-5.743-12.774"/>
                                
                                    <radialGradient id="SVGID_147_" cx="4.479" cy="661.4385" r="7.7688" gradientTransform="matrix(-0.7259 0.6091 0.6428 0.766 -46.2022 -92.5489)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_147_)" stroke="#000000" stroke-miterlimit="10" d="M369.592,407.731c0,0,4.136,13.064,14.033,16.728"/>
                                
                                    <radialGradient id="SVGID_148_" cx="-0.6953" cy="657.7744" r="5.1396" gradientTransform="matrix(-0.7259 0.6091 0.6428 0.766 -46.2022 -92.5489)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_148_)" stroke="#000000" stroke-miterlimit="10" d="M372.844,405.006c0,0,2.66,6.69,9.32,11.106"/>
                                
                                    <radialGradient id="SVGID_149_" cx="-14.042" cy="661.4404" r="7.7688" gradientTransform="matrix(-0.7259 0.6091 0.6428 0.766 -46.2022 -92.5489)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_149_)" stroke="#000000" stroke-miterlimit="10" d="M381.256,397.945c0,0,12.15,6.342,14.035,16.727"/>
                                
                                    <radialGradient id="SVGID_150_" cx="-8.8687" cy="657.7754" r="5.141" gradientTransform="matrix(-0.7259 0.6091 0.6428 0.766 -46.2022 -92.5489)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_150_)" stroke="#000000" stroke-miterlimit="10" d="M378.01,400.672c0,0,6.121,3.782,9.318,11.111"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_151_" cx="23.8628" cy="245.1885" r="21.3757" gradientTransform="matrix(-0.6091 0.7259 0.766 0.6428 -94.9788 -67.3057)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_151_)" stroke="#000000" stroke-miterlimit="10" d="M105.427,111.983c0,0-1.629-6.355-7.865-11.589
                                    c-6.24-5.232-32.961-4.399-37.261-8.009l-0.134,0.16c4.304,3.61,8.123,30.07,14.36,35.304c6.235,5.234,12.775,5.738,12.775,5.738"
                                    />
                                
                                    <radialGradient id="SVGID_152_" cx="33.6626" cy="257.6904" r="7.7674" gradientTransform="matrix(-0.6091 0.7259 0.766 0.6428 -94.9788 -67.3057)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_152_)" stroke="#000000" stroke-miterlimit="10" d="M91.017,128.899c0,0-13.063-4.131-16.723-14.034"/>
                                
                                    <radialGradient id="SVGID_153_" cx="28.4878" cy="261.3564" r="5.1409" gradientTransform="matrix(-0.6091 0.7259 0.766 0.6428 -94.9788 -67.3057)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_153_)" stroke="#000000" stroke-miterlimit="10" d="M93.744,125.651c0,0-6.689-2.664-11.106-9.323"/>
                                
                                    <radialGradient id="SVGID_154_" cx="15.1421" cy="257.6895" r="7.7689" gradientTransform="matrix(-0.6091 0.7259 0.766 0.6428 -94.9788 -67.3057)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_154_)" stroke="#000000" stroke-miterlimit="10" d="M100.805,117.236c0,0-6.339-12.149-16.728-14.034"/>
                                
                                    <radialGradient id="SVGID_155_" cx="20.313" cy="261.3584" r="5.1402" gradientTransform="matrix(-0.6091 0.7259 0.766 0.6428 -94.9788 -67.3057)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_155_)" stroke="#000000" stroke-miterlimit="10" d="M98.079,120.486c0,0-3.783-6.127-11.107-9.322"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_156_" cx="24.0405" cy="689.1084" r="21.3754" gradientTransform="matrix(-0.6091 0.7259 0.766 0.6428 -94.9788 -67.3057)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_156_)" stroke="#000000" stroke-miterlimit="10" d="M409.231,367.142c0,0,6.542,0.505,12.777,5.739
                                    c6.242,5.233,10.059,31.694,14.359,35.304l-0.129,0.156c-4.305-3.604-31.023-2.773-37.261-8.007
                                    c-6.24-5.236-7.875-11.584-7.875-11.584"/>
                                
                                    <radialGradient id="SVGID_157_" cx="33.8384" cy="676.6084" r="7.768" gradientTransform="matrix(-0.6091 0.7259 0.766 0.6428 -94.9788 -67.3057)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_157_)" stroke="#000000" stroke-miterlimit="10" d="M395.077,384.273c0,0,6.342,12.147,16.725,14.035"/>
                                
                                    <radialGradient id="SVGID_158_" cx="28.6646" cy="672.9424" r="5.1403" gradientTransform="matrix(-0.6091 0.7259 0.766 0.6428 -94.9788 -67.3057)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_158_)" stroke="#000000" stroke-miterlimit="10" d="M397.805,381.025c0,0,3.781,6.127,11.107,9.318"/>
                                
                                    <radialGradient id="SVGID_159_" cx="15.3179" cy="676.6084" r="7.7688" gradientTransform="matrix(-0.6091 0.7259 0.766 0.6428 -94.9788 -67.3057)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_159_)" stroke="#000000" stroke-miterlimit="10" d="M404.863,372.61c0,0,13.067,4.136,16.728,14.034"/>
                                
                                    <radialGradient id="SVGID_160_" cx="20.4912" cy="672.9443" r="5.1409" gradientTransform="matrix(-0.6091 0.7259 0.766 0.6428 -94.9788 -67.3057)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_160_)" stroke="#000000" stroke-miterlimit="10" d="M402.14,375.86c0,0,6.687,2.661,11.106,9.323"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_161_" cx="55.0063" cy="255.665" r="21.3757" gradientTransform="matrix(-0.4738 0.8206 0.866 0.5 -139.246 -33.6622)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_161_)" stroke="#000000" stroke-miterlimit="10" d="M83.567,138.89c0,0-2.708-5.976-9.758-10.047
                                    c-7.053-4.07-33.224,1.391-38.085-1.417l-0.104,0.181c4.865,2.808,13.221,28.203,20.273,32.274
                                    c7.049,4.072,13.577,3.433,13.577,3.433"/>
                                
                                    <radialGradient id="SVGID_162_" cx="64.8052" cy="268.165" r="7.7674" gradientTransform="matrix(-0.4738 0.8206 0.866 0.5 -139.246 -33.6622)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_162_)" stroke="#000000" stroke-miterlimit="10" d="M72.314,158.051c0,0-13.582-1.8-18.906-10.917"/>
                                
                                    <radialGradient id="SVGID_163_" cx="59.6323" cy="271.8311" r="5.1409" gradientTransform="matrix(-0.4738 0.8206 0.866 0.5 -139.246 -33.6622)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_163_)" stroke="#000000" stroke-miterlimit="10" d="M74.435,154.379c0,0-7.05-1.462-12.557-7.253"/>
                                
                                    <radialGradient id="SVGID_164_" cx="46.2856" cy="268.165" r="7.7681" gradientTransform="matrix(-0.4738 0.8206 0.866 0.5 -139.246 -33.6622)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_164_)" stroke="#000000" stroke-miterlimit="10" d="M79.928,144.866c0,0-8.352-10.863-18.91-10.916"/>
                                
                                    <radialGradient id="SVGID_165_" cx="51.4575" cy="271.833" r="5.1402" gradientTransform="matrix(-0.4738 0.8206 0.866 0.5 -139.246 -33.6622)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_165_)" stroke="#000000" stroke-miterlimit="10" d="M77.808,148.54c0,0-4.79-5.377-12.558-7.251"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_166_" cx="55.1938" cy="699.5811" r="21.376" gradientTransform="matrix(-0.4738 0.8206 0.866 0.5 -139.246 -33.6622)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_166_)" stroke="#000000" stroke-miterlimit="10" d="M427.065,337.417c0,0,6.529-0.64,13.58,3.433
                                    c7.055,4.07,15.406,29.468,20.271,32.274l-0.1,0.176c-4.863-2.803-31.035,2.655-38.084-1.415c-7.057-4.072-9.77-10.04-9.77-10.04"
                                    />
                                
                                    <radialGradient id="SVGID_167_" cx="64.9937" cy="687.0811" r="7.7681" gradientTransform="matrix(-0.4738 0.8206 0.866 0.5 -139.246 -33.6622)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_167_)" stroke="#000000" stroke-miterlimit="10" d="M416.099,356.746c0,0,8.354,10.863,18.907,10.919"/>
                                
                                    <radialGradient id="SVGID_168_" cx="59.8198" cy="683.416" r="5.1403" gradientTransform="matrix(-0.4738 0.8206 0.866 0.5 -139.246 -33.6622)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_168_)" stroke="#000000" stroke-miterlimit="10" d="M418.222,353.074c0,0,4.788,5.377,12.558,7.249"/>
                                
                                    <radialGradient id="SVGID_169_" cx="46.4722" cy="687.0811" r="7.7687" gradientTransform="matrix(-0.4738 0.8206 0.866 0.5 -139.246 -33.6622)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_169_)" stroke="#000000" stroke-miterlimit="10" d="M423.711,343.561c0,0,13.586,1.805,18.91,10.917"/>
                                
                                    <radialGradient id="SVGID_170_" cx="51.6455" cy="683.4189" r="5.1409" gradientTransform="matrix(-0.4738 0.8206 0.866 0.5 -139.246 -33.6622)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_170_)" stroke="#000000" stroke-miterlimit="10" d="M421.594,347.234c0,0,7.047,1.46,12.559,7.254"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_171_" cx="87.2759" cy="260.7891" r="21.3754" gradientTransform="matrix(-0.3241 0.8904 0.9397 0.342 -177.0459 7.4658)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_171_)" stroke="#000000" stroke-miterlimit="10" d="M66.712,169.184c0,0-3.705-5.415-11.354-8.2
                                    c-7.652-2.783-32.478,7.139-37.753,5.217l-0.071,0.196c5.279,1.92,17.917,25.479,25.569,28.264
                                    c7.649,2.786,13.967,1.022,13.967,1.022"/>
                                
                                    <radialGradient id="SVGID_172_" cx="97.0757" cy="273.2891" r="7.7674" gradientTransform="matrix(-0.3241 0.8904 0.9397 0.342 -177.0459 7.4658)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_172_)" stroke="#000000" stroke-miterlimit="10" d="M58.957,190.008c0,0-13.688,0.585-20.515-7.468"/>
                                
                                    <radialGradient id="SVGID_173_" cx="91.9014" cy="276.9561" r="5.1402" gradientTransform="matrix(-0.3241 0.8904 0.9397 0.342 -177.0459 7.4658)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_173_)" stroke="#000000" stroke-miterlimit="10" d="M60.408,186.023c0,0-7.196-0.216-13.625-4.962"/>
                                
                                    <radialGradient id="SVGID_174_" cx="78.5547" cy="273.2891" r="7.7681" gradientTransform="matrix(-0.3241 0.8904 0.9397 0.342 -177.0459 7.4658)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_174_)" stroke="#000000" stroke-miterlimit="10" d="M64.166,175.701c0,0-10.111-9.248-20.518-7.466"/>
                                
                                    <radialGradient id="SVGID_175_" cx="83.7275" cy="276.9561" r="5.1409" gradientTransform="matrix(-0.3241 0.8904 0.9397 0.342 -177.0459 7.4658)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_175_)" stroke="#000000" stroke-miterlimit="10" d="M62.716,179.688c0,0-5.651-4.464-13.626-4.961"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_176_" cx="87.479" cy="704.6963" r="21.376" gradientTransform="matrix(-0.3241 0.8904 0.9397 0.342 -177.0459 7.4658)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_176_)" stroke="#000000" stroke-miterlimit="10" d="M439.463,305.047c0,0,6.32-1.764,13.971,1.022
                                    c7.654,2.782,20.291,26.344,25.568,28.264l-0.066,0.19c-5.277-1.915-30.104,8.005-37.754,5.22
                                    c-7.652-2.785-11.361-8.191-11.361-8.191"/>
                                
                                    <radialGradient id="SVGID_177_" cx="97.2778" cy="692.1963" r="7.7688" gradientTransform="matrix(-0.3241 0.8904 0.9397 0.342 -177.0459 7.4658)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_177_)" stroke="#000000" stroke-miterlimit="10" d="M432.022,325.986c0,0,10.113,9.248,20.518,7.47"/>
                                
                                    <radialGradient id="SVGID_178_" cx="92.104" cy="688.5303" r="5.1402" gradientTransform="matrix(-0.3241 0.8904 0.9397 0.342 -177.0459 7.4658)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_178_)" stroke="#000000" stroke-miterlimit="10" d="M433.475,322.001c0,0,5.648,4.464,13.625,4.958"/>
                                
                                    <radialGradient id="SVGID_179_" cx="78.7559" cy="692.1982" r="7.7687" gradientTransform="matrix(-0.3241 0.8904 0.9397 0.342 -177.0459 7.4658)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_179_)" stroke="#000000" stroke-miterlimit="10" d="M437.231,311.68c0,0,13.691-0.583,20.52,7.468"/>
                                
                                    <radialGradient id="SVGID_180_" cx="83.9302" cy="688.5342" r="5.1403" gradientTransform="matrix(-0.3241 0.8904 0.9397 0.342 -177.0459 7.4658)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_180_)" stroke="#000000" stroke-miterlimit="10" d="M435.784,315.665c0,0,7.191,0.214,13.625,4.963"/>
                            </g>
                        </g>
                        <g>
                            <g>
                                
                                    <radialGradient id="SVGID_181_" cx="119.645" cy="259.6553" r="21.3755" gradientTransform="matrix(-0.1645 0.9332 0.9848 0.1736 -206.3244 55.0027)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_181_)" stroke="#000000" stroke-miterlimit="10" d="M55.374,201.944c0,0-4.588-4.689-12.606-6.104
                                    c-8.02-1.412-30.745,12.67-36.273,11.693l-0.036,0.205c5.532,0.975,22.069,21.98,30.089,23.395
                                    c8.016,1.415,13.932-1.418,13.932-1.418"/>
                                
                                    <radialGradient id="SVGID_182_" cx="129.4458" cy="272.1563" r="7.7674" gradientTransform="matrix(-0.1645 0.9332 0.9848 0.1736 -206.3244 55.0027)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_182_)" stroke="#000000" stroke-miterlimit="10" d="M51.353,223.799c0,0-13.378,2.953-21.5-3.792"/>
                                
                                    <radialGradient id="SVGID_183_" cx="124.2715" cy="275.8232" r="5.1403" gradientTransform="matrix(-0.1645 0.9332 0.9848 0.1736 -206.3244 55.0027)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_183_)" stroke="#000000" stroke-miterlimit="10" d="M52.09,219.623c0,0-7.125,1.037-14.28-2.521"/>
                                
                                    <radialGradient id="SVGID_184_" cx="110.9253" cy="272.1572" r="7.7681" gradientTransform="matrix(-0.1645 0.9332 0.9848 0.1736 -206.3244 55.0027)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_184_)" stroke="#000000" stroke-miterlimit="10" d="M53.998,208.804c0,0-11.564-7.352-21.503-3.79"/>
                                
                                    <radialGradient id="SVGID_185_" cx="116.0981" cy="275.8242" r="5.1409" gradientTransform="matrix(-0.1645 0.9332 0.9848 0.1736 -206.3244 55.0027)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_185_)" stroke="#000000" stroke-miterlimit="10" d="M53.262,212.982c0,0-6.34-3.415-14.281-2.52"/>
                            </g>
                            <g>
                                
                                    <radialGradient id="SVGID_186_" cx="119.8608" cy="703.5723" r="21.3757" gradientTransform="matrix(-0.1645 0.9332 0.9848 0.1736 -206.3244 55.0027)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_186_)" stroke="#000000" stroke-miterlimit="10" d="M446.055,271.017c0,0,5.918-2.834,13.938-1.42
                                    c8.02,1.411,24.555,22.42,30.086,23.396l-0.031,0.198c-5.531-0.969-28.258,13.11-36.273,11.696
                                    c-8.021-1.414-12.611-6.095-12.611-6.095"/>
                                
                                    <radialGradient id="SVGID_187_" cx="129.6587" cy="691.0693" r="7.7695" gradientTransform="matrix(-0.1645 0.9332 0.9848 0.1736 -206.3244 55.0027)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_187_)" stroke="#000000" stroke-miterlimit="10" d="M442.362,292.929c0,0,11.566,7.352,21.504,3.793"/>
                                
                                    <radialGradient id="SVGID_188_" cx="124.4834" cy="687.4053" r="5.1403" gradientTransform="matrix(-0.1645 0.9332 0.9848 0.1736 -206.3244 55.0027)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_188_)" stroke="#000000" stroke-miterlimit="10" d="M443.102,288.752c0,0,6.338,3.415,14.279,2.517"/>
                                
                                    <radialGradient id="SVGID_189_" cx="111.1382" cy="691.0713" r="7.7688" gradientTransform="matrix(-0.1645 0.9332 0.9848 0.1736 -206.3244 55.0027)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_189_)" stroke="#000000" stroke-miterlimit="10" d="M445.006,277.937c0,0,13.385-2.953,21.504,3.789"/>
                                
                                    <radialGradient id="SVGID_190_" cx="116.311" cy="687.4072" r="5.1403" gradientTransform="matrix(-0.1645 0.9332 0.9848 0.1736 -206.3244 55.0027)" gradientUnits="userSpaceOnUse">
                                    <stop  offset="0" style={{ "stop-color": '#FFFFFF' }}/>
                                    <stop  offset="1" style={ { "stop-color": '#73BF44' } }/>
                                </radialGradient>
                                <path fill="url(#SVGID_190_)" stroke="#000000" stroke-miterlimit="10" d="M444.274,282.11c0,0,7.121-1.037,14.279,2.521"/>
                            </g>
                        </g>
                        <circle fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10" cx="248.581" cy="250.717" r="202.5"/>
                        <circle fill="#FFFFFF" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="248.581" cy="250.217" r="194"/>
                        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="56.873" y1="217.717" x2="439.866" y2="217.717"/>
                        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="56.873" y1="285.217" x2="439.428" y2="285.217"/>
                        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="212.081" y1="440.295" x2="212.081" y2="59.899"/>
                        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="287.581" y1="440.295" x2="287.581" y2="59.899"/>
                        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="212.081" y1="217.717" x2="109.409" y2="115.046"/>
                        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="287.581" y1="217.717" x2="388.709" y2="116.588"/>
                        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="212.081" y1="285.217" x2="111.382" y2="385.916"/>
                        <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="287.581" y1="285.217" x2="387.728" y2="385.365"/>
                        {/* <g enable-background="new    ">
                            <path d="M258.803,95.892c0.033,5.292-3.209,7.938-9.723,7.938c-2.378,0-4.202-0.416-5.472-1.249
                                c-1.271-0.833-1.906-1.936-1.906-3.308c0-0.947,0.318-1.731,0.956-2.352c0.637-0.62,1.413-0.932,2.328-0.932
                                c0.947,0,1.731,0.312,2.352,0.932s0.931,1.404,0.931,2.352c0,1.242-0.507,2.173-1.519,2.793c0.98,0.131,1.911,0.196,2.793,0.196
                                c2.482-0.032,4.353-0.539,5.61-1.52c1.258-0.979,1.887-2.563,1.887-4.753c0-1.633-0.654-2.947-1.96-3.944
                                c-1.307-0.996-3.055-1.494-5.243-1.494c-3.496,0-6.125,1.225-7.889,3.675c-0.196-4.965-1.144-8.656-2.842-11.074h2.107
                                c1.241,2.287,1.878,4.933,1.911,7.938c1.726-1.372,3.826-2.059,6.301-2.059c2.963,0,5.244,0.572,6.839,1.715
                                C257.958,91.988,258.803,93.703,258.803,95.892z M246.896,99.272c0-0.555-0.18-1.012-0.539-1.372
                                c-0.36-0.359-0.817-0.539-1.372-0.539c-0.556,0-1.005,0.18-1.348,0.539c-0.343,0.36-0.515,0.817-0.515,1.372
                                c0,0.556,0.171,1.005,0.515,1.348c0.343,0.343,0.792,0.515,1.348,0.515c0.555,0,1.012-0.172,1.372-0.515
                                C246.717,100.277,246.896,99.828,246.896,99.272z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M177.488,125.967h-1.764v-9.212c0-1.11-0.256-2.009-0.767-2.695c-0.511-0.686-1.194-1.028-2.05-1.028
                                c-0.758,0-1.434,0.408-2.026,1.225c-0.594,0.816-0.89,1.715-0.89,2.695v9.016h-1.764v-9.065c0-0.979-0.409-1.869-1.225-2.67
                                c-0.817-0.8-1.699-1.2-2.646-1.2c-1.209,0-2.173,0.588-2.891,1.764c-0.621,1.046-0.931,2.434-0.931,4.165
                                c0,0.556,0.049,1.11,0.147,1.666c0.49-0.687,1.257-1.029,2.303-1.029c0.882,0,1.633,0.327,2.254,0.98s0.931,1.421,0.931,2.303
                                s-0.311,1.634-0.931,2.254c-0.621,0.621-1.454,0.931-2.499,0.931c-1.242,0-2.213-0.612-2.915-1.837
                                c-0.703-1.226-1.054-2.834-1.054-4.827c0-5.226,1.906-7.84,5.72-7.84c2.216,0,3.748,1.029,4.596,3.087
                                c0.758-2.058,2.042-3.087,3.855-3.087c1.383,0,2.488,0.449,3.312,1.348c0.824,0.899,1.235,2.132,1.235,3.699V125.967z
                                M164.65,122.831c0-0.522-0.18-0.964-0.539-1.323c-0.36-0.359-0.801-0.539-1.323-0.539c-0.523,0-0.964,0.18-1.323,0.539
                                c-0.36,0.359-0.539,0.801-0.539,1.323s0.179,0.964,0.539,1.322c0.359,0.36,0.8,0.539,1.323,0.539c0.522,0,0.963-0.179,1.323-0.539
                                C164.471,123.795,164.65,123.354,164.65,122.831z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M115.829,184.909c-1.764-0.784-3.218-1.176-4.361-1.176c-0.752,0-1.911,0.163-3.479,0.489
                                c-1.666,0.326-3.12,0.507-4.361,0.539c-2.058,0.065-3.691-0.546-4.9-1.837c-1.209-1.29-1.813-3.046-1.813-5.268
                                c0-2.482,0.841-4.401,2.523-5.758c1.682-1.354,3.961-2.033,6.835-2.033c-1.274-0.555-1.911-1.52-1.911-2.891
                                c0-0.883,0.31-1.634,0.931-2.255c0.62-0.62,1.355-0.931,2.205-0.931c0.882,0,1.633,0.311,2.254,0.931
                                c0.621,0.621,0.931,1.372,0.931,2.255c0,1.34-0.621,2.286-1.862,2.842c1.731-0.131,2.956-0.359,3.675-0.687
                                c2.09-0.979,3.348-2.662,3.773-5.047h1.666c-0.752,3.43-2.401,5.652-4.949,6.664c-1.242,0.49-3.533,0.735-6.873,0.735
                                c-4.859,0-7.288,2.106-7.288,6.32c0,1.699,0.426,3.038,1.28,4.019c0.853,0.979,2.018,1.47,3.496,1.47
                                c1.903,0,3.709-0.245,5.416-0.735c-3.953-1.045-5.897-2.874-5.831-5.487c0.032-0.914,0.368-1.658,1.004-2.229
                                c0.637-0.571,1.397-0.857,2.279-0.857c0.947,0,1.723,0.302,2.328,0.906c0.604,0.604,0.906,1.38,0.906,2.327
                                c0,0.687-0.229,1.34-0.686,1.96c-0.458,0.621-1.029,0.997-1.715,1.127c0.849,0.589,2.09,1.063,3.724,1.421
                                c0.849,0.196,1.837,0.45,2.964,0.76c1.127,0.312,2.033,0.646,2.719,1.005L115.829,184.909z M108.283,177.216
                                c0-0.521-0.171-0.963-0.515-1.322c-0.343-0.359-0.776-0.539-1.298-0.539c-0.523,0-0.956,0.188-1.298,0.563
                                c-0.343,0.376-0.515,0.809-0.515,1.298c0,0.523,0.179,0.964,0.539,1.323c0.359,0.36,0.784,0.539,1.274,0.539
                                c0.49,0,0.914-0.188,1.274-0.563C108.103,178.14,108.283,177.706,108.283,177.216z M109.214,166.976
                                c0-0.458-0.172-0.858-0.515-1.201c-0.343-0.343-0.744-0.515-1.201-0.515c-0.458,0-0.85,0.172-1.176,0.515
                                c-0.327,0.343-0.49,0.743-0.49,1.201c0,0.425,0.172,0.808,0.515,1.151c0.343,0.343,0.727,0.515,1.151,0.515
                                c0.457,0,0.857-0.163,1.201-0.49C109.042,167.825,109.214,167.433,109.214,166.976z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M104.767,240.185c-0.588,1.438-0.866,4.067-0.833,7.889c0,1.046,0,1.617,0,1.716c0,4.639-0.661,7.595-1.984,8.868
                                c-1.323,1.274-2.883,1.911-4.679,1.911h-0.245c1.241-3.299,1.862-6.107,1.862-8.428c0-3.07-0.858-4.605-2.573-4.605
                                c-0.66,0-1.229,0.411-1.707,1.234c-0.479,0.823-0.718,1.729-0.718,2.716v2.321h-1.813v-2.37c0-0.955-0.292-1.844-0.874-2.667
                                c-0.583-0.823-1.215-1.234-1.895-1.234c-0.875,0-1.587,0.539-2.138,1.619c-0.551,1.079-0.826,2.486-0.826,4.22
                                c0,0.721,0.032,1.326,0.098,1.816c0.49-0.694,1.241-1.041,2.254-1.041c0.914,0,1.69,0.325,2.328,0.974
                                c0.637,0.648,0.956,1.426,0.956,2.333c0,0.876-0.327,1.622-0.98,2.237c-0.654,0.616-1.421,0.925-2.303,0.925
                                c-1.307,0-2.32-0.58-3.038-1.74c-0.719-1.159-1.078-2.769-1.078-4.826c0-2.45,0.431-4.394,1.295-5.831
                                c0.863-1.438,1.995-2.156,3.395-2.156c1.791,0,3.028,1.029,3.713,3.087c0.495-2.058,1.649-3.087,3.463-3.087
                                c2.804,0,4.207,2.026,4.207,6.076c0,2.189-0.42,4.313-1.26,6.37c1.951-0.457,2.926-3.119,2.926-7.987
                                c0-5.65,0.212-9.097,0.637-10.339H104.767z M90.606,257.433c0-0.588-0.196-1.054-0.588-1.396c-0.392-0.343-0.833-0.515-1.323-0.515
                                s-0.915,0.188-1.274,0.563c-0.36,0.376-0.539,0.825-0.539,1.348c0,0.458,0.188,0.874,0.563,1.25
                                c0.375,0.376,0.792,0.563,1.25,0.563c0.522,0,0.972-0.18,1.348-0.539C90.418,258.348,90.606,257.923,90.606,257.433z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M118.818,322.14c0,4.051-1.617,6.076-4.851,6.076c-2.385,0-4.672-1.404-6.86-4.214c-0.425,0.195-1.12,0.85-2.083,1.96
                                c-0.964,1.11-1.512,1.928-1.642,2.45c-2.287-1.144-3.43-3.609-3.43-7.399c0-4.965,2.956-7.448,8.869-7.448
                                c0.49,0,1.127,0.033,1.911,0.099c0.784,0.065,1.372,0.098,1.764,0.098c1.404,0,2.433-0.311,3.087-0.931
                                c0.849-0.816,1.274-2.254,1.274-4.313v-0.833h1.715v0.98c0,4.541-1.938,6.811-5.814,6.811c-0.586,0-1.327-0.032-2.223-0.098
                                c-0.896-0.065-1.588-0.099-2.077-0.099c-2.183,0-3.828,0.507-4.935,1.52s-1.661,2.352-1.661,4.018c0,2.353,0.391,3.92,1.172,4.704
                                c1.334-1.829,2.848-3.054,4.542-3.675c0.456,0.882,1.286,1.83,2.491,2.842c1.465,1.274,2.719,1.911,3.761,1.911
                                c1.237,0,2.165-0.441,2.784-1.323c-0.588,0.099-0.948,0.147-1.078,0.147c-0.915,0-1.69-0.318-2.328-0.956
                                c-0.637-0.637-0.955-1.412-0.955-2.327c0-0.914,0.318-1.69,0.955-2.327c0.637-0.638,1.413-0.956,2.328-0.956
                                c0.914,0,1.69,0.318,2.328,0.956C118.499,320.449,118.818,321.226,118.818,322.14z M117.348,322.14c0-0.49-0.18-0.914-0.539-1.274
                                c-0.36-0.358-0.784-0.538-1.274-0.538c-0.49,0-0.915,0.18-1.274,0.538c-0.36,0.36-0.539,0.784-0.539,1.274s0.179,0.915,0.539,1.274
                                c0.359,0.359,0.784,0.539,1.274,0.539c0.49,0,0.914-0.18,1.274-0.539C117.168,323.055,117.348,322.63,117.348,322.14z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M175.858,396.499c-1.764-0.784-3.218-1.176-4.361-1.176c-0.752,0-1.911,0.163-3.479,0.489
                                c-1.666,0.326-3.12,0.507-4.361,0.539c-2.058,0.065-3.691-0.546-4.9-1.837c-1.209-1.29-1.813-3.046-1.813-5.268
                                c0-2.482,0.841-4.401,2.523-5.758c1.682-1.354,3.961-2.033,6.835-2.033c-1.274-0.555-1.911-1.52-1.911-2.891
                                c0-0.883,0.31-1.634,0.931-2.255c0.62-0.62,1.355-0.931,2.205-0.931c0.882,0,1.633,0.311,2.254,0.931
                                c0.621,0.621,0.931,1.372,0.931,2.255c0,1.34-0.621,2.286-1.862,2.842c1.731-0.131,2.956-0.359,3.675-0.687
                                c2.09-0.979,3.348-2.662,3.773-5.047h1.666c-0.752,3.43-2.401,5.652-4.949,6.664c-1.242,0.49-3.533,0.735-6.873,0.735
                                c-4.859,0-7.288,2.106-7.288,6.32c0,1.699,0.426,3.038,1.28,4.019c0.853,0.979,2.018,1.47,3.496,1.47
                                c1.903,0,3.709-0.245,5.416-0.735c-3.953-1.045-5.897-2.874-5.831-5.487c0.032-0.914,0.368-1.658,1.004-2.229
                                c0.637-0.571,1.397-0.857,2.279-0.857c0.947,0,1.723,0.302,2.328,0.906c0.604,0.604,0.906,1.38,0.906,2.327
                                c0,0.687-0.229,1.34-0.686,1.96c-0.458,0.621-1.029,0.997-1.715,1.127c0.849,0.589,2.09,1.063,3.724,1.421
                                c0.849,0.196,1.837,0.45,2.964,0.76c1.127,0.312,2.033,0.646,2.719,1.005L175.858,396.499z M168.313,388.806
                                c0-0.521-0.171-0.963-0.515-1.322c-0.343-0.359-0.776-0.539-1.298-0.539c-0.523,0-0.956,0.188-1.298,0.563
                                c-0.343,0.376-0.515,0.809-0.515,1.298c0,0.523,0.179,0.964,0.539,1.323c0.359,0.36,0.784,0.539,1.274,0.539
                                c0.49,0,0.914-0.188,1.274-0.563C168.132,389.729,168.313,389.296,168.313,388.806z M169.244,378.565
                                c0-0.458-0.172-0.858-0.515-1.201c-0.343-0.343-0.744-0.515-1.201-0.515c-0.458,0-0.85,0.172-1.176,0.515
                                c-0.327,0.343-0.49,0.743-0.49,1.201c0,0.425,0.172,0.808,0.515,1.151c0.343,0.343,0.727,0.515,1.151,0.515
                                c0.457,0,0.857-0.163,1.201-0.49C169.072,379.415,169.244,379.022,169.244,378.565z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M254.465,414.022h-1.764v-9.212c0-1.11-0.256-2.009-0.768-2.695c-0.51-0.686-1.193-1.028-2.05-1.028
                                c-0.758,0-1.434,0.408-2.026,1.225c-0.594,0.816-0.89,1.715-0.89,2.695v9.016h-1.764v-9.065c0-0.979-0.409-1.869-1.225-2.67
                                c-0.817-0.8-1.699-1.2-2.646-1.2c-1.209,0-2.173,0.588-2.891,1.764c-0.621,1.046-0.931,2.434-0.931,4.165
                                c0,0.556,0.049,1.11,0.147,1.666c0.49-0.687,1.257-1.029,2.303-1.029c0.882,0,1.633,0.327,2.254,0.98s0.931,1.421,0.931,2.303
                                s-0.311,1.634-0.931,2.254c-0.621,0.621-1.454,0.931-2.499,0.931c-1.242,0-2.213-0.612-2.915-1.837
                                c-0.703-1.226-1.054-2.834-1.054-4.827c0-5.226,1.906-7.84,5.72-7.84c2.216,0,3.748,1.029,4.596,3.087
                                c0.758-2.058,2.042-3.087,3.856-3.087c1.383,0,2.487,0.449,3.311,1.348c0.824,0.899,1.236,2.132,1.236,3.699V414.022z
                                M241.627,410.887c0-0.522-0.18-0.964-0.539-1.323c-0.36-0.359-0.801-0.539-1.323-0.539c-0.523,0-0.964,0.18-1.323,0.539
                                c-0.36,0.359-0.539,0.801-0.539,1.323s0.179,0.964,0.539,1.322c0.359,0.36,0.8,0.539,1.323,0.539c0.522,0,0.963-0.179,1.323-0.539
                                C241.447,411.851,241.627,411.409,241.627,410.887z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M338.25,388.414c0.032,5.292-3.209,7.938-9.724,7.938c-2.378,0-4.202-0.416-5.472-1.249
                                c-1.271-0.833-1.906-1.936-1.906-3.308c0-0.947,0.318-1.731,0.956-2.352c0.637-0.62,1.413-0.932,2.327-0.932
                                c0.947,0,1.731,0.312,2.352,0.932c0.621,0.62,0.932,1.404,0.932,2.352c0,1.242-0.507,2.173-1.52,2.793
                                c0.98,0.131,1.912,0.196,2.793,0.196c2.482-0.032,4.354-0.539,5.611-1.52c1.257-0.979,1.887-2.563,1.887-4.753
                                c0-1.633-0.654-2.947-1.961-3.944c-1.307-0.996-3.055-1.494-5.242-1.494c-3.496,0-6.125,1.225-7.889,3.675
                                c-0.197-4.965-1.145-8.656-2.843-11.074h2.106c1.242,2.287,1.879,4.933,1.912,7.938c1.725-1.372,3.825-2.059,6.301-2.059
                                c2.963,0,5.243,0.572,6.838,1.715C337.404,384.511,338.25,386.226,338.25,388.414z M326.343,391.795
                                c0-0.555-0.18-1.012-0.539-1.372c-0.36-0.359-0.817-0.539-1.372-0.539c-0.556,0-1.004,0.18-1.348,0.539
                                c-0.343,0.36-0.514,0.817-0.514,1.372c0,0.556,0.171,1.005,0.514,1.348c0.344,0.343,0.792,0.515,1.348,0.515
                                c0.555,0,1.012-0.172,1.372-0.515C326.164,392.8,326.343,392.351,326.343,391.795z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M398.943,328.51c-1.765-0.784-3.218-1.176-4.36-1.176c-0.752,0-1.912,0.163-3.479,0.489
                                c-1.666,0.326-3.12,0.507-4.361,0.539c-2.058,0.065-3.691-0.546-4.899-1.837c-1.209-1.29-1.813-3.046-1.813-5.268
                                c0-2.482,0.833-4.401,2.499-5.758c1.666-1.354,3.903-2.033,6.713-2.033c3.137,0,5.243-0.245,6.321-0.735
                                c2.09-0.979,3.349-2.662,3.772-5.047H401c-0.752,3.43-2.4,5.652-4.949,6.664c-1.241,0.49-3.527,0.735-6.859,0.735
                                c-4.835,0-7.252,2.106-7.252,6.32c0,1.699,0.426,3.038,1.28,4.019c0.853,0.979,2.019,1.47,3.495,1.47
                                c1.904,0,3.709-0.245,5.416-0.735c-3.952-1.045-5.896-2.874-5.83-5.487c0.031-0.914,0.367-1.658,1.004-2.229
                                s1.396-0.857,2.279-0.857c0.946,0,1.723,0.302,2.327,0.906s0.906,1.38,0.906,2.327c0,0.687-0.229,1.34-0.687,1.96
                                c-0.457,0.621-1.028,0.997-1.715,1.127c0.85,0.589,2.09,1.063,3.725,1.421c0.849,0.196,1.838,0.45,2.965,0.76
                                c1.127,0.312,2.033,0.646,2.719,1.005L398.943,328.51z M391.397,320.816c0-0.521-0.172-0.963-0.515-1.322s-0.776-0.539-1.298-0.539
                                c-0.523,0-0.956,0.188-1.299,0.563c-0.344,0.376-0.515,0.809-0.515,1.298c0,0.523,0.179,0.964,0.539,1.323
                                c0.358,0.36,0.784,0.539,1.274,0.539c0.489,0,0.914-0.188,1.273-0.563C391.217,321.74,391.397,321.307,391.397,320.816z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M411.593,253.316c0,5.162-2.931,7.742-8.794,7.742c-6.355,0-9.531-2.466-9.531-7.398v-12.545
                                c0-0.946-0.426-1.437-1.274-1.47v-1.715c2.024,0.164,3.038,1.225,3.038,3.185v12.789c0,3.692,2.604,5.537,7.813,5.537
                                c4.655,0,6.984-1.96,6.984-5.88c0-1.992-0.229-3.527-0.686-4.605c-0.392-0.883-0.864-1.323-1.419-1.323
                                c-0.685,0-1.248,0.277-1.688,0.833c-0.441,0.556-0.693,1.225-0.759,2.009h-1.126c-0.261-1.927-1.076-2.891-2.445-2.891
                                c-1.566,0-2.463,0.798-2.691,2.394c0.227-0.125,0.634-0.188,1.221-0.188c0.813,0,1.521,0.3,2.123,0.899s0.904,1.304,0.904,2.113
                                c0,0.811-0.312,1.516-0.932,2.115c-0.621,0.6-1.323,0.898-2.107,0.898c-0.947,0-1.731-0.375-2.352-1.127
                                c-0.621-0.751-0.932-1.78-0.932-3.087c0-1.567,0.402-2.883,1.205-3.944c0.804-1.062,1.96-1.593,3.469-1.593
                                c1.476,0,2.525,0.784,3.148,2.353c0.523-1.568,1.474-2.353,2.85-2.353c1.146,0,2.08,0.572,2.801,1.715
                                C411.2,249.054,411.593,250.899,411.593,253.316z M401.842,252.802c0-0.464-0.158-0.854-0.473-1.169
                                c-0.314-0.314-0.705-0.472-1.168-0.472c-0.433,0-0.814,0.157-1.146,0.472c-0.331,0.315-0.497,0.705-0.497,1.169
                                c0,0.433,0.166,0.813,0.497,1.146c0.331,0.331,0.713,0.496,1.146,0.496c0.463,0,0.854-0.165,1.168-0.496
                                C401.684,253.615,401.842,253.234,401.842,252.802z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M392.905,177.915c0,2.973-0.801,5.309-2.4,7.007h-2.156c1.862-1.535,2.793-3.756,2.793-6.664
                                c0-2.09-0.686-3.805-2.058-5.145c-1.372-1.339-3.332-2.009-5.88-2.009c-1.928,0-3.577,0.585-4.949,1.757s-2.059,2.699-2.059,4.586
                                c0,1.563,0.457,2.838,1.373,3.831c0.914,0.992,2.09,1.488,3.527,1.488c1.862,0,3.186-0.838,3.969-2.514
                                c-0.588,0.271-1.144,0.406-1.666,0.406c-0.947,0-1.731-0.302-2.352-0.906c-0.621-0.604-0.931-1.364-0.931-2.278
                                c0-0.947,0.34-1.731,1.021-2.353c0.682-0.62,1.461-0.931,2.336-0.931c1.104,0,1.962,0.376,2.578,1.127
                                c0.617,0.752,0.926,1.666,0.926,2.744c0,1.601-0.473,3.006-1.416,4.214c-1.106,1.404-2.75,2.106-4.93,2.106
                                c-1.888,0-3.416-0.718-4.588-2.155c-1.074-1.307-1.611-2.907-1.611-4.803c0-2.449,0.857-4.368,2.572-5.757s3.766-2.083,6.15-2.083
                                c3.136,0,5.545,0.793,7.227,2.377C392.064,173.547,392.905,175.531,392.905,177.915z M385.36,177.45c0-0.549-0.18-1-0.539-1.354
                                c-0.36-0.354-0.817-0.532-1.373-0.532c-0.555,0-1.004,0.178-1.347,0.532s-0.515,0.806-0.515,1.354c0,0.548,0.172,0.991,0.515,1.329
                                c0.343,0.339,0.792,0.508,1.347,0.508c0.556,0,1.013-0.169,1.373-0.508C385.18,178.441,385.36,177.998,385.36,177.45z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M335.277,126.506c-1.765-0.784-3.218-1.176-4.36-1.176c-0.752,0-1.912,0.163-3.479,0.489
                                c-1.666,0.326-3.12,0.507-4.361,0.539c-2.058,0.065-3.691-0.546-4.899-1.837c-1.209-1.29-1.813-3.046-1.813-5.268
                                c0-2.482,0.833-4.401,2.499-5.758c1.666-1.354,3.903-2.033,6.713-2.033c3.137,0,5.243-0.245,6.321-0.735
                                c2.09-0.979,3.349-2.662,3.772-5.047h1.666c-0.752,3.43-2.4,5.652-4.949,6.664c-1.241,0.49-3.527,0.735-6.859,0.735
                                c-4.835,0-7.252,2.106-7.252,6.32c0,1.699,0.426,3.038,1.28,4.019c0.853,0.979,2.019,1.47,3.495,1.47
                                c1.904,0,3.709-0.245,5.416-0.735c-3.952-1.045-5.896-2.874-5.83-5.487c0.031-0.914,0.367-1.658,1.004-2.229
                                s1.396-0.857,2.279-0.857c0.946,0,1.723,0.302,2.327,0.906s0.906,1.38,0.906,2.327c0,0.687-0.229,1.34-0.687,1.96
                                c-0.457,0.621-1.028,0.997-1.715,1.127c0.85,0.589,2.09,1.063,3.725,1.421c0.849,0.196,1.838,0.45,2.965,0.76
                                c1.127,0.312,2.033,0.646,2.719,1.005L335.277,126.506z M327.731,118.813c0-0.521-0.172-0.963-0.515-1.322
                                s-0.776-0.539-1.298-0.539c-0.523,0-0.956,0.188-1.299,0.563c-0.344,0.376-0.515,0.809-0.515,1.298
                                c0,0.523,0.179,0.964,0.539,1.323c0.358,0.36,0.784,0.539,1.274,0.539c0.489,0,0.914-0.188,1.273-0.563
                                C327.551,119.736,327.731,119.303,327.731,118.813z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M229.936,241.279c0,1.55-1.075,2.325-3.225,2.325c-2.167,0-3.25-0.775-3.25-2.325v-4.75
                                c-0.217,0.117-0.467,0.175-0.75,0.175c-0.45,0-0.838-0.162-1.163-0.487c-0.325-0.325-0.488-0.713-0.488-1.162
                                c0-0.45,0.163-0.838,0.488-1.163c0.325-0.325,0.712-0.487,1.163-0.487c0.45,0,0.837,0.162,1.162,0.487
                                c0.325,0.325,0.488,0.713,0.488,1.163v6.149c0,1.05,0.783,1.575,2.35,1.575c1.55,0,2.325-0.525,2.325-1.575v-11.774h0.9V241.279z
                                M223.561,235.054c0-0.233-0.083-0.434-0.25-0.601c-0.167-0.166-0.367-0.25-0.6-0.25c-0.234,0-0.434,0.084-0.6,0.25
                                c-0.167,0.167-0.25,0.367-0.25,0.601s0.083,0.434,0.25,0.6c0.167,0.167,0.366,0.25,0.6,0.25c0.233,0,0.433-0.083,0.6-0.25
                                C223.478,235.488,223.561,235.288,223.561,235.054z"/>
                            <path d="M237.686,241.954c0,0.45-0.15,0.838-0.45,1.163c-0.3,0.324-0.7,0.487-1.2,0.487c-0.45,0-0.838-0.163-1.163-0.487
                                c-0.325-0.325-0.488-0.713-0.488-1.163s0.163-0.837,0.488-1.162c0.325-0.325,0.712-0.487,1.163-0.487
                                c0.283,0,0.533,0.059,0.75,0.175v-2.625c0-0.684-1.609-1.283-4.825-1.8c0.1-1.767,0.908-2.65,2.425-2.65
                                c0.35,0,0.846,0.088,1.488,0.263c0.641,0.175,1.104,0.263,1.387,0.263c0.167,0,0.325-0.191,0.475-0.575l0.775,0.2
                                c-0.25,0.8-0.675,1.199-1.275,1.199c-0.35,0-0.854-0.091-1.512-0.274c-0.659-0.184-1.154-0.275-1.488-0.275
                                c-0.3,0-0.579,0.13-0.837,0.388c-0.259,0.259-0.396,0.521-0.413,0.787c1.066,0.184,2.117,0.459,3.15,0.825
                                c1.033,0.367,1.55,0.892,1.55,1.575V241.954z M236.886,241.954c0-0.233-0.083-0.433-0.25-0.6s-0.367-0.25-0.6-0.25
                                c-0.234,0-0.434,0.083-0.6,0.25c-0.167,0.167-0.25,0.366-0.25,0.6s0.083,0.434,0.25,0.601c0.167,0.166,0.366,0.25,0.6,0.25
                                c0.233,0,0.433-0.084,0.6-0.25C236.802,242.387,236.886,242.187,236.886,241.954z"/>
                            <path d="M244.086,241.854c0,0.467-0.163,0.866-0.488,1.2c-0.325,0.333-0.721,0.5-1.188,0.5c-0.517,0-0.942-0.184-1.275-0.551
                                c-0.284-0.316-0.425-0.699-0.425-1.149v-8.45h0.9v6.975c0.233-0.133,0.5-0.199,0.8-0.199c0.466,0,0.863,0.162,1.188,0.487
                                C243.923,240.992,244.086,241.387,244.086,241.854z M243.261,241.854c0-0.233-0.083-0.434-0.25-0.601
                                c-0.167-0.166-0.367-0.25-0.6-0.25s-0.434,0.084-0.6,0.25c-0.167,0.167-0.25,0.367-0.25,0.601s0.083,0.434,0.25,0.6
                                c0.167,0.167,0.367,0.25,0.6,0.25s0.433-0.083,0.6-0.25C243.177,242.288,243.261,242.087,243.261,241.854z"/>
                            <path d="M252.71,243.404h-0.899v-6.525c0-0.816-0.255-1.466-0.764-1.949c-0.508-0.483-1.162-0.726-1.962-0.726
                                c-0.567,0-1.117,0.159-1.65,0.476c-0.534,0.316-0.9,0.725-1.1,1.225c0.983,0.084,1.658,0.45,2.025,1.1
                                c-0.4,0.084-0.75,0.305-1.05,0.663c-0.3,0.358-0.45,0.754-0.45,1.188v4.55h-0.9v-4.525c0-0.982,0.433-1.649,1.3-2
                                c-0.55-0.266-1.184-0.357-1.9-0.274c0.133-0.934,0.554-1.7,1.263-2.3c0.708-0.601,1.545-0.9,2.512-0.9c1.084,0,1.95,0.3,2.6,0.9
                                c0.65,0.6,0.976,1.425,0.976,2.475V243.404z"/>
                            <path d="M265.186,237.429c-0.234,0.449-0.742,0.983-1.525,1.6v2.25c0,1.55-1.117,2.325-3.35,2.325c-2.25,0-3.375-0.775-3.375-2.325
                                v-4.75c-0.217,0.117-0.467,0.175-0.75,0.175c-0.451,0-0.838-0.162-1.163-0.487s-0.487-0.713-0.487-1.162
                                c0-0.45,0.162-0.838,0.487-1.163s0.712-0.487,1.163-0.487c0.449,0,0.837,0.162,1.162,0.487c0.324,0.325,0.487,0.713,0.487,1.163
                                v6.149c0,1.05,0.816,1.575,2.45,1.575c1.65,0,2.475-0.525,2.475-1.575v-1.825c-0.5,0.117-0.908,0.176-1.225,0.176
                                c-0.768,0-1.434-0.209-2-0.625c-0.566-0.417-0.85-0.926-0.85-1.525c0-0.383,0.133-0.704,0.399-0.963
                                c0.267-0.258,0.583-0.387,0.95-0.387c0.383,0,0.708,0.129,0.975,0.387c0.267,0.259,0.4,0.58,0.4,0.963
                                c0,0.584-0.292,1.009-0.875,1.275c0.199,0.116,0.533,0.175,1,0.175c0.449,0,0.857-0.083,1.225-0.25v-5h0.9v4.5
                                c0.4-0.3,0.725-0.684,0.975-1.15L265.186,237.429z M257.036,235.054c0-0.233-0.084-0.434-0.25-0.601
                                c-0.167-0.166-0.367-0.25-0.6-0.25c-0.234,0-0.434,0.084-0.601,0.25c-0.167,0.167-0.25,0.367-0.25,0.601s0.083,0.434,0.25,0.6
                                c0.167,0.167,0.366,0.25,0.601,0.25c0.232,0,0.433-0.083,0.6-0.25C256.952,235.488,257.036,235.288,257.036,235.054z
                                M260.735,237.404c0-0.184-0.07-0.346-0.212-0.487s-0.304-0.213-0.487-0.213s-0.342,0.071-0.475,0.213
                                c-0.135,0.142-0.201,0.304-0.201,0.487s0.066,0.342,0.201,0.475c0.133,0.134,0.291,0.2,0.475,0.2s0.346-0.066,0.487-0.2
                                C260.665,237.746,260.735,237.587,260.735,237.404z"/>
                            <path d="M273.435,243.404h-0.899v-6.5c0-1.233-0.4-2.092-1.201-2.575c-0.35,0.334-0.883,0.825-1.6,1.476l-1.699-1.476
                                c-0.834,0.534-1.25,1.4-1.25,2.601c0,0.517,0.133,1.229,0.399,2.137c0.267,0.909,0.399,1.696,0.399,2.363
                                c0.167-0.334,0.504-0.709,1.014-1.125c0.508-0.417,0.846-0.75,1.012-1c-0.383-0.033-0.704-0.184-0.963-0.45
                                c-0.258-0.267-0.387-0.601-0.387-1c0-0.417,0.137-0.767,0.412-1.05s0.621-0.426,1.037-0.426c0.417,0,0.768,0.143,1.051,0.426
                                s0.425,0.633,0.425,1.05c0,0.767-0.583,1.684-1.75,2.75s-1.774,2-1.825,2.8h-0.9v-2.25c0-0.483-0.141-1.171-0.424-2.063
                                c-0.284-0.892-0.426-1.57-0.426-2.037c0-0.816,0.184-1.559,0.551-2.226c0.433-0.75,1.024-1.225,1.774-1.425l1.55,1.375l1.426-1.375
                                c0.732,0.134,1.308,0.559,1.725,1.275c0.366,0.616,0.55,1.316,0.55,2.1V243.404z M270.536,237.829c0-0.216-0.076-0.399-0.226-0.55
                                s-0.333-0.225-0.55-0.225s-0.4,0.074-0.551,0.225c-0.149,0.15-0.225,0.334-0.225,0.55c0,0.217,0.075,0.4,0.225,0.55
                                c0.15,0.15,0.334,0.226,0.551,0.226s0.4-0.075,0.55-0.226C270.459,238.229,270.536,238.045,270.536,237.829z"/>
                            <path d="M281.184,241.954c0,0.45-0.149,0.838-0.449,1.163c-0.301,0.324-0.7,0.487-1.2,0.487c-0.45,0-0.838-0.163-1.163-0.487
                                c-0.324-0.325-0.487-0.713-0.487-1.163s0.163-0.837,0.487-1.162c0.325-0.325,0.713-0.487,1.163-0.487
                                c0.283,0,0.533,0.059,0.75,0.175v-2.625c0-0.684-1.608-1.283-4.825-1.8c0.1-1.767,0.908-2.65,2.425-2.65
                                c0.351,0,0.846,0.088,1.487,0.263s1.104,0.263,1.388,0.263c0.167,0,0.325-0.191,0.476-0.575l0.774,0.2
                                c-0.25,0.8-0.675,1.199-1.274,1.199c-0.351,0-0.854-0.091-1.513-0.274c-0.659-0.184-1.154-0.275-1.487-0.275
                                c-0.301,0-0.58,0.13-0.838,0.388c-0.259,0.259-0.396,0.521-0.412,0.787c1.066,0.184,2.116,0.459,3.149,0.825
                                c1.033,0.367,1.55,0.892,1.55,1.575V241.954z M280.384,241.954c0-0.233-0.083-0.433-0.25-0.6s-0.366-0.25-0.6-0.25
                                s-0.434,0.083-0.601,0.25c-0.166,0.167-0.25,0.366-0.25,0.6s0.084,0.434,0.25,0.601c0.167,0.166,0.367,0.25,0.601,0.25
                                s0.433-0.084,0.6-0.25C280.301,242.387,280.384,242.187,280.384,241.954z"/>
                        </g>
                        <g enable-background="new    ">
                            <path d="M234.219,274.169h-0.95c-1.85-2.018-2.775-4.451-2.775-7.301c0-2.699,0.917-5.184,2.75-7.449h1
                                c-1.867,2.133-2.8,4.615-2.8,7.449C231.444,269.519,232.369,271.952,234.219,274.169z"/>
                            <path d="M244.043,270.593c0,1.551-1.075,2.326-3.225,2.326c-2.167,0-3.25-0.775-3.25-2.326v-4.75
                                c-0.217,0.117-0.467,0.176-0.75,0.176c-0.45,0-0.838-0.162-1.163-0.488c-0.325-0.324-0.488-0.713-0.488-1.162
                                s0.163-0.838,0.488-1.162c0.325-0.326,0.712-0.488,1.163-0.488c0.45,0,0.837,0.162,1.162,0.488
                                c0.325,0.324,0.488,0.713,0.488,1.162v6.15c0,1.049,0.783,1.574,2.35,1.574c1.55,0,2.325-0.525,2.325-1.574v-11.775h0.9V270.593z
                                M237.668,264.368c0-0.232-0.083-0.434-0.25-0.6s-0.367-0.25-0.6-0.25c-0.234,0-0.434,0.084-0.6,0.25
                                c-0.167,0.166-0.25,0.367-0.25,0.6c0,0.234,0.083,0.434,0.25,0.6c0.167,0.168,0.366,0.25,0.6,0.25c0.233,0,0.433-0.082,0.6-0.25
                                C237.584,264.802,237.668,264.603,237.668,264.368z"/>
                            <path d="M251.793,271.269c0,0.449-0.15,0.838-0.45,1.162s-0.7,0.488-1.2,0.488c-0.449,0-0.838-0.164-1.162-0.488
                                c-0.325-0.324-0.488-0.713-0.488-1.162c0-0.451,0.163-0.838,0.488-1.162c0.324-0.326,0.713-0.488,1.162-0.488
                                c0.283,0,0.533,0.059,0.75,0.176v-2.625c0-0.684-1.608-1.283-4.825-1.801c0.1-1.766,0.908-2.65,2.425-2.65
                                c0.35,0,0.845,0.088,1.488,0.264c0.641,0.174,1.104,0.262,1.387,0.262c0.167,0,0.326-0.191,0.476-0.574l0.774,0.199
                                c-0.25,0.801-0.674,1.199-1.274,1.199c-0.351,0-0.854-0.09-1.513-0.273s-1.154-0.275-1.487-0.275c-0.3,0-0.579,0.129-0.837,0.387
                                c-0.259,0.26-0.396,0.521-0.413,0.787c1.066,0.184,2.116,0.459,3.149,0.826s1.551,0.891,1.551,1.574V271.269z M250.993,271.269
                                c0-0.234-0.083-0.434-0.25-0.6c-0.166-0.168-0.366-0.25-0.6-0.25s-0.434,0.082-0.6,0.25c-0.167,0.166-0.25,0.365-0.25,0.6
                                c0,0.232,0.083,0.434,0.25,0.6c0.166,0.166,0.366,0.25,0.6,0.25s0.434-0.084,0.6-0.25
                                C250.91,271.702,250.993,271.501,250.993,271.269z"/>
                            <path d="M261.069,263.169c-0.034,1.133-0.375,2.063-1.025,2.787s-1.492,1.088-2.525,1.088c-0.85,0-1.566-0.158-2.15-0.477
                                c-0.732-0.383-1.1-0.957-1.1-1.725c0-0.434,0.158-0.809,0.475-1.125s0.691-0.475,1.125-0.475s0.809,0.158,1.125,0.475
                                s0.476,0.691,0.476,1.125c0,0.566-0.241,1.01-0.726,1.326c0.268,0.066,0.476,0.1,0.625,0.1c0.9-0.033,1.584-0.33,2.051-0.889
                                c0.467-0.557,0.717-1.295,0.75-2.211H261.069z M261.069,268.468c-0.034,1.135-0.375,2.063-1.025,2.787
                                c-0.65,0.727-1.492,1.088-2.525,1.088c-0.85,0-1.566-0.158-2.15-0.475c-0.732-0.383-1.1-0.959-1.1-1.725
                                c0-0.434,0.158-0.809,0.475-1.125s0.691-0.475,1.125-0.475s0.809,0.158,1.125,0.475s0.476,0.691,0.476,1.125
                                c0,0.566-0.241,1.008-0.726,1.324c0.268,0.066,0.476,0.1,0.625,0.1c0.9-0.033,1.584-0.328,2.051-0.887s0.717-1.295,0.75-2.213
                                H261.069z M256.618,264.843c0-0.232-0.074-0.424-0.225-0.574s-0.342-0.225-0.574-0.225c-0.234,0-0.422,0.074-0.563,0.225
                                c-0.143,0.15-0.213,0.342-0.213,0.574c0,0.234,0.07,0.422,0.213,0.563c0.141,0.143,0.328,0.213,0.563,0.213
                                c0.232,0,0.424-0.07,0.574-0.213C256.543,265.265,256.618,265.077,256.618,264.843z M256.618,270.144
                                c0-0.234-0.074-0.426-0.225-0.576c-0.15-0.148-0.342-0.225-0.574-0.225c-0.234,0-0.422,0.076-0.563,0.225
                                c-0.143,0.15-0.213,0.342-0.213,0.576c0,0.232,0.07,0.42,0.213,0.563c0.141,0.141,0.328,0.213,0.563,0.213
                                c0.232,0,0.424-0.072,0.574-0.213C256.543,270.563,256.618,270.376,256.618,270.144z"/>
                            <path d="M266.643,266.794c0,2.766-0.926,5.225-2.775,7.375h-0.949c1.85-2.316,2.774-4.775,2.774-7.375
                                c0-2.635-0.925-5.092-2.774-7.375h0.949C265.717,261.501,266.643,263.96,266.643,266.794z"/>
            </g> */}
                    {items}
                </svg>
            </div>
            );
        }
    }
}