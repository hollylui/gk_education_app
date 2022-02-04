import clientPromise from "../../lib/mongodb";
import styles from "../../styles/quiz.module.scss";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Map from "../../components/Map";
import { useState,  } from "react";
import ReactModal from "react-modal";

export default function Quizpage ({questions}){
    const [modalIsOpen, setIsOpen] = useState(false);
    const [userItems, setItems] =useState(0);

    function addItem() {
        setItems(userItems=userItems++)
    }
    function openModal(){
        setIsOpen(true);
    }


     const handleClick= async (event) => {
         event.preventDefault();
         openModal();
         if (questions.answer.isCorrect===true){
            addItem();
         }
 }

    let randomQuestion= Math.floor(Math.random()*(questions.length))
     const question = questions[randomQuestion];

      
     return (<div>
        
     <Layout>

     {/* Question box */}
        <div className={styles.container}>
           <h3 className={styles.quizText}>{question.text}</h3>

           <div className={styles.subcontainer}> 
           <button className={styles.button} onClick={handleClick} type="submit" value={question.answers.isCorrect}>{question.answers[0].text} </button>
           <button className={styles.button} onClick={handleClick} type="submit" value={question.answers.isCorrect}>{question.answers[1].text}</button>
           <button className={styles.button} onClick={handleClick} type="submit" value={question.answers.isCorrect}>{question.answers[2].text}</button>
           <button className={styles.button} onClick={handleClick} type="submit" value={question.answers.isCorrect}>{question.answers[3].text}</button>
           </div>
       </div>  

{/* Pop-up Modal */}

<ReactModal
isOpen={modalIsOpen} 
contentLabel={"Question Answer"} >
<div> <p> You answered the question</p>
</div>





</ReactModal>



       <div className={styles.controller}>
          <Footer />
        </div>
        <div className={styles.map}> 
        <Map/>
        </div>
        
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