import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <DisplayCards/>
    </div>
    
  );
}

function DisplayCards(){
  return(
    <div className="DC_container">
      <Cards plan="FREE" prize="0" user="Single" sto="5" upb="y" ca="y" upp="n" dps="n" fs="n" msr="n"  />
      <Cards plan="PLUS" prize="9" user="5"sto="50"  upb="y" ca="y" upp="y" dps="y" fs="y" msr="n"/>
      <Cards plan="PRO" prize="49" user="Unlimited" sto="150"  upb="y" ca="y" upp="y" dps="y" fs="y" msr="y"/>
    </div>
  );
}

function Cards(proxy){
  return(
    <div className="C_container">
      <CardUpper plan={proxy.plan} prize={proxy.prize}/>
      <CardLower user={proxy.user} sto={proxy.sto} upb={proxy.upb} ca={proxy.ca} upp={proxy.upp} dps={proxy.dps} fs={proxy.fs} msr={proxy.msr}/>
    </div>
  );
}

function CardUpper(proxy){
  return(
    <div className="cardUpper">
      <h2>{proxy.plan}</h2>
      <div>${proxy.prize}<span class="stext">/month</span></div>
    </div>
    
  );
}

const y= "\u2714"
const n= "\u2716"

function CardLower(proxy){
  var a= (proxy.user===1 ? `${y} Single  User` :`${y} ${proxy.user} Users`)
  var b=  `${y} ${proxy.sto}GB Storage`
  var c=  (proxy.upb==="y" ? `${y} Unlimited Public Projects` : `${n} Unlimited Public Projects`)
  var d=  (proxy.ca==="y" ? `${y} Community Access` : `${n} Community Access`)
  var e=  (proxy.upp==="y" ? `${y} Unlimited private Projects` : `${n} Unlimited Private Projects`)
  var f=  (proxy.dps==="y" ? `${y} Dedicated Phone Support` : `${n} Dedicated Phone Support`)
  var g=  (proxy.fs==="y" ? `${y} Free Subdomain` : `${n} Free Subdomain`)
  var h=  (proxy.msr==="y" ? `${y} Monthly Status Report` : `${n} Monthly Status Report`)
  
  return(
    <div className="cardLower">
    <ul>
    <li>{a}</li>
    <li>{b}</li>
    <li>{c}</li>
    <li>{d}</li>
    <li style={{ opacity : e[0]===n ? "0.5" : "1"}}> {e}</li>
    <li style={{ opacity : f[0]===n ? "0.5" : "1"}}>{f}</li>
    <li style={{ opacity : g[0]===n ? "0.5" : "1"}}>{g}</li>
    <li style={{ opacity : h[0]===n ? "0.5" : "1"}}>{h}</li>
    </ul>  
    <div className="Card_button">
      Submit
    </div>
    </div>
    
  );
}





export default App;
