import React, { useState } from "react";

function Content() {
  let para1 = {
    backgroundColor: "yellow",
    color: "red",
    fontWeight: "700",
    padding: "20px",
    boxShadow: "5px  5px 5px black",
  };
  let user = "praveen";
  function btnclick(e) {
    console.log(e.target.innerText);
    console.log("hello", user);
    e.target.innerText = "teargeted event";
  }
  return (
    <>
      <div className="container">
        <p className="text-green" style={para1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vel cumque molestiae provident cupiditate deleniti dolor minus ipsum explicabo atque commodi dignissimos velit, iusto nesciunt eaque corrupti doloremque quidem. Neque, nisi modi. Eum
          adipisci magni eius unde, est molestiae voluptas doloribus in eaque natus, voluptates sed tenetur non expedita, praesentium accusantium consequuntur officiis dignissimos ducimus nobis? Velit magni quibusdam cupiditate est exercitationem veritatis
          labore officiis similique recusandae vitae sequi, iste, iusto tempora unde maxime quasi? At optio vel aspernatur voluptates ratione aperiam corporis vitae doloribus accusantium quis labore, voluptatibus minus nemo fugit adipisci molestias quod,
          atque exercitationem placeat itaque officia.
        </p>
      </div>
      <div className="container">
        <p style={{ backgroundColor: "black", color: "white", padding: "30px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsa deserunt corporis vero. Rem amet porro asperiores officia laudantium, cum, aut nobis veritatis eos soluta, repudiandae velit! Iste, placeat rem accusantium modi recusandae minus
          explicabo provident, facere laudantium omnis dolores non officia reprehenderit impedit animi tenetur esse perferendis quisquam? Quaerat ad in excepturi placeat, odio suscipit quas labore. In doloremque beatae amet alias harum. Impedit non quae
          minima alias beatae a reprehenderit quod aperiam expedita dolorem ipsa, mollitia blanditiis soluta doloremque delectus facilis labore enim perferendis officia voluptates fuga explicabo aliquid? Praesentium, tempore libero perferendis doloremque
          nostrum inventore provident mollitia.
        </p>
        <button className="btn" onClick={btnclick} style={{ backgroundColor: "blue", color: "white", padding: "20px", marginTop: "20px" }}>
          Click to action the event
        </button>
      </div>
    </>
  );
}

export default Content;
