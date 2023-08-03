import './QuizSection.modules.css'
import QuestionQuiz from '../QuestionQuiz/QuestionQuiz'

const QuizSection = () => {

    return (

        <div className='quizSection'>

            <div className='quizSection_topBar'>

                <div className='quizSection_topBar_start'>
                    Texto
                </div>

                <div className='quizSection_topBar_end'>

                    <div className='selector_quizSection'>
                        Show Answers
                    </div>

                    <div className='selector_quizSection'>
                        Export
                        <div className='icon_selector_quizSection'>
                            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.175 0.158325L5 3.97499L8.825 0.158325L10 1.33333L5 6.33332L0 1.33333L1.175 0.158325Z" fill="black"/>
                            </svg>
                        </div>
                    </div>

                </div>

            </div>

            <div className='questions_plans_princing'>

                We've genrated 5 questions for you below. <br />
                Upgrade to generate more questions, add up to 25,000 characters,upload files and export results <br />
                <span className='plans_and_princing'>View Plans & Pricing</span>

            </div>

            <QuestionQuiz 
                statement={"1. Which country did Gandhi lead the successful campaign for independence from British rule?"}
                options={["A) South Africa", "B) India", "C) United Kingdom", "D) Australia"]}
            />

            <QuestionQuiz 
                statement={"2. Where was Gandhi born and raised?"}
                options={["A) South Africa", "B) India", "C) United Kingdom", "D) Australia"]}
            />

            <QuestionQuiz 
                statement={"3. What honorific is now used throughout the world to refer to Gandhi?"}
                options={["A) Enerable", "B) Great-souled", "C) Mahātmā"]}
                
            />

        </div>

    )

}

export default QuizSection