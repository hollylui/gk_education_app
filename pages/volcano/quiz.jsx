import clientPromise from "../../lib/mongodb";
import styles from "../../styles/quiz.module.scss";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Map from "../../components/Map";
import { useState, useContext, useEffect } from "react";
import BackpackContext from "../../context/BackpackContext";
import ReactModal from "react-modal";
import Backpack from "../../components/Backpack";

export default function Quizpage ({questions}){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isCorrect,setCorrect]=useState(false);
;    //user items is an empty array in default state
    const { userItems, setUserItems } = useContext(BackpackContext);

    function addItem() {
        setUserItems(userItems.push("coconut"));
    }

    function makeCorrect() {
         setCorrect(true);
       }
    function openModal(){
        setModalIsOpen(true);
    }

     const handleClick= async (event) => {

        
         let value = event.target.value; 

         console.log(typeof value)
        
         if (value==="true"){
            addItem();
            makeCorrect();
            console.log("setting to correct")
            
         } 

         openModal();
 }

 //pull random question from database
    let randomQuestion= Math.floor(Math.random()*(questions.length))
     const question = questions[randomQuestion];

      
     return (<div>
        
     <Layout>

     {/* Question box */}
        <div className={styles.container}>
          <h3>{question.text}</h3>

           <div className={styles.subcontainer}> 
           <button className={styles.button} onClick={handleClick} type="submit" value={question.answers[0].correctAnswer}>{question.answers[0].text} </button>
           <button className={styles.button} onClick={handleClick} type="submit" value={question.answers[1].correctAnswer}>{question.answers[1].text}</button>
           <button className={styles.button} onClick={handleClick} type="submit" value={question.answers[2].correctAnswer}>{question.answers[2].text}</button>
           <button className={styles.button} onClick={handleClick} type="submit" value={question.answers[3].correctAnswer}>{question.answers[3].text}</button>
           </div>
       </div>  

{/* Pop-up Modal */}

<ReactModal
isOpen={modalIsOpen} 
contentLabel={"Question Answer"} 
className={styles.modalcontent}>
<div> <p> You answered the question {isCorrect ? "correctly, great job!" : "incorrectly, try again"}</p>
</div>





</ReactModal>



       <div className={styles.controller}>
          {/* <Footer /> */}
        </div>
        <div className={styles.map}> 
        <Map/>
        </div>
        
        <Backpack/>
       </Layout>
 
     
     </div>
     )}


export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("kids-game");


    let data = await db.collection("questions").find({}).toArray();
    let questions = JSON.parse(JSON.stringify(data));
   


    return {
      props: { questions },
      
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    
    };
  }
}