import "./styles.css";
import {useState} from "react"

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}) {
  const [curOpen, setCurOpen] = useState(null)
  return <div className="accordion">
    {data.map((faq, i) => 
    <AccordionItem title={faq.title}  num={i} key={faq.title} curOpen={curOpen} setCurOpen={setCurOpen}> 
    {faq.text}
    </AccordionItem>
    )}
  </div>;
}

function AccordionItem({num, title, curOpen, setCurOpen, children}) {
  const isOpen = num ===curOpen

  function handleToggle(num) {
    setCurOpen(isOpen ? null : num)
  }
  
  return(
    <div className={`item ${isOpen ? "open": "" }`} onClick={()=> handleToggle(num)}>
      <p className="number">{num <9 ? num + 1: num}</p>
      <p className="title">{title}</p>
      <p className="icon" >
      {isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
      
    </div>
  )
}
