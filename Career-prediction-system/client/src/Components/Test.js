import "./Test.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import cors from "cors";
import { Result } from "./Result";

export default function Main() {
  // let history = useHistory();
  // const handleSubmit = async (e) =>{
  //     history.push("/signin");
  //     console.log(history);
  // const [pos, setpos] = useState("");
  // const [pa, setpa] = useState("");
  // const [pc, setpc] = useState("");/
  // const [pse, setpse] = useState("");
  // const [pcn, setpcn] = useState("");
  // const [pes, setpes] = useState("");
  // const [pca, setpca] = useState("");
  // const [pm, setpm] = useState("");
  // const [pcm, setpcm] = useState("");
  // const [nhr, setnhr] = useState("");
  const [lq, setlq] = useState("");
  const [hc, sethc] = useState("");
  const [cs, setcs] = useState("");
  const [ps, setps] = useState("");
  // const [lh, setlh] = useState("");
  const [slc, setslc] = useState("");
  const [ec, setec] = useState("");
  const [certi, setcerti] = useState("");
  const [ws, setws] = useState("");
  const [rw, setrw] = useState("");
  const [mc, setmc] = useState("");
  const [is, setis] = useState("");
  const [ic, setic] = useState("");
  const [toc, settoc] = useState("");
  const [soe, setsoe] = useState("");
  // const [ig, setig] = useState("");
  const [ib, setib] = useState("");
  // const [b, setb] = useState("");
  const [mt, setmt] = useState("");
  const [wt, setwt] = useState("");
  const [wit, setwit] = useState();
  const [int, setint] = useState();
  

  const [result, setResult] = useState("Web Developer");
  const [flag, setFlag] = useState(true);
  let handleSubmit = async (e) => {
    // console.log(rw);
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8080/api/form", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          1: lq,
          2: hc,
          3: cs,
          4: ps,
          5: slc,
          6: ec,
          7: certi,
          8: ws,
          9: rw,
          10: mc,
          11: is,
          12: ic,
          13: toc,
          14: soe,
          15: ib,
          16: mt,
          17: wt,
          18: wit,
          19: int,
        }),
      });
      const ans =await res.json()
      //print response  
      // console.log(res);
      console.log(ans);
      setResult(ans.mag);
      sessionStorage.setItem("result",ans.mag);

      setFlag(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  

  return (
    <>
   {!sessionStorage.getItem("result") ? <div className="main" style={{ height: "100vh" }}>
      <div className="nav">
        <div className="nav--upper">
          <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            fill="currentColor"
            className="bi bi-house-door"
            viewBox="0 0 16 16"
          >
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
          </svg>
          </a>
        </div>

        <div className="nav--lower">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            fill="currentColor"
            className="bi bi-chat"
            viewBox="0 0 16 16"
          >
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
          </svg>
          <br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </div>
      </div>

      <div className="content">
        <div className="name">Career Prediction Test</div>

        <form
          action="http://localhost:8080/api/form"
          id="testForm"
          onSubmit={handleSubmit}
          //"window.location.href = 'localhost:3000/signin';"
        >
          <div className="testForm">
            Logical quotient rating <br />
            <input
              type="number"
              className="in"
              min="0"
              max="10"
              required
              value={lq}
              onChange={(e) => setlq(e.target.value)}
            />{" "}
            <br /> <br />
            No. of hackathons <br />
            <input
              type="number"
              className="in"
              min="0"
              max="10"
              required
              value={hc}
              onChange={(e) => sethc(e.target.value)}
            />{" "}
            <br /> <br />
            coding skills rating <br />
            <input
              type="number"
              className="in"
              value={cs}
              onChange={(e) => setcs(e.target.value)}
              min="0"
              max="10"
              required
            />{" "}
            <br /> <br />
            public speaking points <br />
            <input
              type="number"
              className="in"
              value={ps}
              onChange={(e) => setps(e.target.value)}
              min="0"
              max="10"
              required
            />{" "}
            <br /> <br />
  
            self-learning capability? <br />
            <input
              type="radio"
              name="Capacity"
              value="yes"
              onChange={(e) => setslc(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="Capacity"
              value="yes"
              onChange={(e) => setslc(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            No <br /> <br />

            Extra-courses did? <br />
            <input
              type="radio"
              name="talent"
              className="radio2"
              value="yes"
              onChange={(e) => setec(e.target.value)}
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="talent"
              className="radio2"
              value="yes"
              onChange={(e) => setec(e.target.value)}
              style={{ width: "30px" }}
              required
            />{" "}
            No <br /> <br />

            certifications <br />
            <select
              className="dropdown"
              required
              onChange={(e) => setcerti(e.target.value)}
            >
              <option value="shell programming">shell programming</option>
              <option value="machine learning">machine learning</option>
              <option value="app development">app development</option>
              <option value="python">python</option>
              <option value="r programming">r programming</option>
              <option value="information security">information security</option>
              <option value="hadoop">hadoop</option>
              <option value="distro making">distro making</option>
              <option value="full stack<">full stack</option>
            </select>{" "}
            <br /> <br />

            Workshops <br />
            <select
              className="dropdown"
              required
              onChange={(e) => setws(e.target.value)}
            >
              <option value="testing">testing</option>
              <option value="database security">database security</option>
              <option value="game development">game development</option>
              <option value="data science">data science</option>
              <option value="system designing">system designing</option>
              <option value="hacking">hacking</option>
              <option value="cloud computing">cloud computing</option>
              <option value="web technologies">web technologies</option>
            </select>{" "}
            <br /> <br />

            reading and writing skills <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setrw(e.target.value)}
            >
              <option value="excellent">excellent</option>
              <option value="poor">poor</option>
              <option value="medium">medium</option>
            </select>{" "}
            <br /> <br />

            memory capability score <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setmc(e.target.value)}
            >
              <option value="excellent">excellent</option>
              <option value="poor">poor</option>
              <option value="medium">medium</option>
            </select>{" "}
            <br /> <br />
            Interested subjects <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setis(e.target.value)}
            >
              <option value="cloud computing">cloud computing</option>
              <option value="networks">networks</option>
              <option value="hacking">hacking</option>
              <option value="Computer Architecture">Computer Architecture</option>
              <option value="programming">programming</option>
              <option value="parallel computing">parallel computing</option>
              <option value="IOT">IOT</option>
              <option value="data engineering">data engineering</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Management">Management</option>
            </select>{" "}
            <br /> <br />
            interested career area <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setic(e.target.value)}
            >
              <option value="system developer">system developer</option>
              <option value="Business process analyst">Business process analyst</option>
              <option value="developer">developer</option>
              <option value="testing">testing</option>
              <option value="security">security</option>
              <option value="cloud computing">cloud computing</option>
            </select>{" "}
            <br /> <br />
            Type of company want to settle in? <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => settoc(e.target.value)}
            >
              <option value="Web Services">Web Services</option>
              <option value="SaaS services">SaaS services</option>
              <option value="Sales and Marketing">Sales and Marketing</option>
              <option value="Testing and Maintainance Services">Testing and Maintainance Services</option>
              <option value="product development">product development</option>
              <option value="BPA">BPA</option>
              <option value="Service Based">Service Based</option>
              <option value="Product Based">Product Based</option>
              <option value="Cloud Services">Cloud Services</option>
              <option value="Finance">Finance</option>
            </select>{" "}
            <br /> <br />
            Taken inputs from seniors or elders <br />
            <input
              type="radio"
              name="iws"
              className="radio2"
              value="yes"
              onChange={(e) => setsoe(e.target.value)}
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="iws"
              className="radio2"
              value="no"
              onChange={(e) => setsoe(e.target.value)}
              style={{ width: "30px" }}
              required
            />{" "}
            No <br /> <br />

            Interested Type of Books <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setib(e.target.value)}
            >
              <option value="Prayer books">Prayer books</option>
              <option value="Childrens">Childrens</option>
              <option value="Travel">Travel</option>
              <option value="Romance">Romance</option>
              <option value="Cookbooks">Cookbooks</option>
              <option value="Self help">Self help</option>
              <option value="Drama">Drama</option>
              <option value="Math">Math</option>
              <option value="Religion-Spirituality">Religion-Spirituality</option>
              <option value="Anthology">Anthology</option>
              <option value="Trilogy">Trilogy</option>
              <option value="Autobigraphics">Autobigraphics</option>
              <option value="Mystery">Mystery</option>
              <option value="Diaries">Diaries</option>
              <option value="Journals">Journals</option>
              <option value="History">History</option>
              <option value="Art">Art</option>
              <option value="Dictionaries">Dictionaries</option>
              <option value="Horror">Horror</option>
              <option value="Encyclopedias">Encyclopedias</option>
              <option value="Action and Adventure">Action and Adventure</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Comics">Comics</option>
              <option value="Science fiction">Science fiction</option>
              <option value="Series">Series </option>
              <option value="Guide">Guide </option>
              <option value="Biographies">Biographies</option>
              <option value="Health">Health</option>
              <option value="Satire">Satire</option>
              <option value="Science">Science</option>
              <option value="Poetry">Poetry</option>
            </select>{" "}
            <br /> <br />
            
            Management or Technical <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setmt(e.target.value)}
            >
              <option value="Management">Management</option>
              <option value="Technical">Technical</option>
            </select>{" "}
            <br /> <br />
            Hard/Smart worker <br />
            <select
              name=""
              className="dropdown"
              required
              onChange={(e) => setwt(e.target.value)}
            >
              <option value="Hard worker">Hard worker</option>
              <option value="smart worker">smart worker</option>
            </select>{" "}
            <br /> <br />
            worked in teams ever? <br />
            <input
              type="radio"
              name="workInTeam"
              value="yes"
              onChange={(e) => setwit(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="workInTeam"
              value="no"
              onChange={(e) => setwit(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            no <br /> <br />
            Introvert <br />
            <input
              type="radio"
              name="introvert"
              value="yes"
              onChange={(e) => setint(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            Yes
            <input
              type="radio"
              name="introvert"
              value="no"
              onChange={(e) => setint(e.target.value)}
              className="radio2"
              style={{ width: "30px" }}
              required
            />{" "}
            no <br /> <br />
          </div>

          {/* <a href="/signin"> */}
            <button >Submit</button>
            {/* <input type="submit" value="Submit" /> */}
          {/* </a> */}
        </form>
      </div>
    </div> : <Result/>}
    </>

  );
}
