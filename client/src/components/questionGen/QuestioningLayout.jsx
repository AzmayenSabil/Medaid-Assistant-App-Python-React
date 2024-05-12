// import React, { useState, useEffect, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Navbar from "../navbar/Navbar.jsx";
// import "./styles/questioningLayout.css";

// const QuestioningLayout = ({ chiefComplaint }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const answerRef = useRef(null);
//   const [questionsEnded, setQuestionsEnded] = useState(false);
//   const [conversationLog, setConversationLog] = useState([]); // Add state for conversation log

//   const fetchData = async () => {
//     try {
//       const data = location.state;
//       console.log("running ", data);
//       const response = await axios.post(
//           "http://localhost:5000/questions",  // Update URL to use localhost
//           data,
//           {
//               headers: {
//                   "Content-Type": "application/json",
//               },
//           }
//       );

//       console.log("Response from BACKEND: ", response.data.questions);
//       setQuestions(response.data.questions);
//       setAnswers(
//         new Array(response.data.questions.length).fill({
//           answer: "",
//           type: "text",
//         })
//       );
//       setConversationLog(response.data.conversation_log); // Set conversation log

//       if (response.data.questions.length === 0) {
//         setQuestionsEnded(true);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [location.state]);

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       answers[currentQuestionIndex] = {
//         answer: answerRef.current.value,
//         type: "text",
//       };
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else if (currentQuestionIndex === questions.length - 1) {
//       setQuestionsEnded(true);
//     }
//   };

//   const handleBack = () => {
//     if (currentQuestionIndex > 0) {
//       answers[currentQuestionIndex] = {
//         answer: answerRef.current.value,
//         type: "text",
//       };
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSaveAnswer = () => {
//     answers[currentQuestionIndex] = {
//       answer: answerRef.current.value,
//       type: "text",
//     };
//   };

//   const handleOptionChange = (option) => {
//     answers[currentQuestionIndex] = {
//       answer: option,
//       type: "option",
//     };
//   };

//   const handleFinish = () => {
//     navigate("/complaint");
//   };

//   const renderQuestion = () => {
//     if (questionsEnded) {
//       return (
//         <div>
//           <p>Do you want to add more symptoms or finish the questions?</p>
//           <button className="button" onClick={handleFinish}>
//             Add More Symptoms
//           </button>
//         </div>
//       );
//     } else {
//       const question = questions[currentQuestionIndex];

//       if (question) {
//         return (
//           <div className="question">
//             <div className="question-title">{question}</div>
//             <div className="question-options">
//               <div>
//                 <label className="question-label">
//                   <input
//                     type="radio"
//                     name="answer"
//                     value="Yes"
//                     onChange={() => handleOptionChange("Yes")}
//                   />
//                   Yes
//                 </label>
//                 <label className="question-label">
//                   <input
//                     type="radio"
//                     name="answer"
//                     value="No"
//                     onChange={() => handleOptionChange("No")}
//                   />
//                   No
//                 </label>
//               </div>
//               <div>
//                 <p>If you have anything else to add?</p>
//                 <input
//                   type="text"
//                   ref={answerRef}
//                   value={answers[currentQuestionIndex].answer}
//                   onChange={handleSaveAnswer}
//                   className="question-input"
//                 />
//               </div>
//             </div>
//           </div>
//         );
//       } else {
//         return <div>No more questions</div>;
//       }
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         <div>
//           {conversationLog.map((log, index) => (
//             <div key={index}>{log}</div>
//           ))}
//         </div>
//         {renderQuestion()}
//         <div className="button-container">
//           {questionsEnded ? (
//             <button className="button" onClick={handleFinish}>
//               Finish
//             </button>
//           ) : (
//             <>
//               <button
//                 className="button"
//                 onClick={handleBack}
//                 disabled={currentQuestionIndex === 0}
//               >
//                 Previous
//               </button>
//               <button
//                 className="button"
//                 onClick={handleNext}
//                 disabled={currentQuestionIndex === questions.length}
//               >
//                 Next
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestioningLayout;

